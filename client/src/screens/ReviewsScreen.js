import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Axios from 'axios';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const submeterInformacao = (texto, rating) => {
  const item = { text: texto, rating: rating };
  Axios.post("http://192.168.0.106:3001/item", { item: item })
}

export function ReviewsScreen(props) {

  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = () => {
    Axios.get("http://192.168.0.106:3001/item")
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deletarItem = (itemId) => {
    Axios.delete(`http://192.168.0.106:3001/item/${itemId}`)
      .then(() => {
        const updatedReviews = reviews.filter(item => item.id !== itemId);
        setReviews(updatedReviews);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const addReview = () => {
  const review = { text: newReview, rating: rating };
  submeterInformacao(newReview, rating);
  setNewReview('');
  setRating(0);
  fetchReviews();
};

  const deleteReview = (itemId) => {
    const updatedReviews = reviews.filter(item => item.id !== itemId);
    setReviews(updatedReviews);
    deletarItem(itemId);
    fetchReviews();
  };   

  const renderStar = (index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => setRating(index + 1)}
        style={styles.star}
      >
        <Ionicons
          name={index < rating ? 'star' : 'star-outline'}
          size={24}
          color={index < rating ? '#FFD700' : '#536470'}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha a quantidade de estrelas</Text>

      <View style={styles.ratingContainer}>
        {[...Array(5)].map((_, index) => renderStar(index))}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua avaliação"
          value={newReview}
          onChangeText={setNewReview}
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.addButton} onPress={addReview}>
          <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <View style={styles.reviewItem}>
            <View style={styles.reviewHeader}>
              <Text style={styles.reviewRating}>{item.rating}</Text>
              <Ionicons name="star" size={16} color="#FFD700" />
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteReview(item.id)}
              >
                <Feather name="trash-2" size={22} color="#4a576b" />
              </TouchableOpacity>
            </View>
            <Text style={styles.reviewText}>{item.itens}</Text>
          </View>
        )}
        keyExtractor={(item, index) => String(index)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171f25',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  star: {
    marginHorizontal: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    marginTop: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    color: '#a6a6a6',
  },
  addButton: {
    backgroundColor: '#752e2b',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginLeft: 8,
    borderRadius: 8,
  },
  reviewItem: {
    borderWidth: 1,
    borderColor: '#752e2b',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewRating: {
    fontSize: 16,
    marginRight: 4,
    color: '#FFD700',
  },
  reviewText: {
    color: '#fff',
  },
  deleteButton: {
    marginLeft: 'auto',
  },
});
