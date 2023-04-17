import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, ScrollView, Button, ImageBackground, } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  const cardapio = [
    { nome: 'Prato 1', preco: 30, id: 1, imagem: 'https://marettimo.com.br/blog/wp-content/uploads/2021/10/oferta_15385065343064_Destaque.jpg' },
    { nome: 'Prato 2', preco: 32, id: 2, imagem: 'https://s2.glbimg.com/qVnLfAAhGhUUkDgzVgF0Y_oNkXA=/0x0:4928x3264/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/5/O/FPc4tWTAamXeigwVkP0w/brasil-sabor-botequim-restaurante-foto-divulgacao-1-.jpg' },
    { nome: 'Prato 3', preco: 30, id: 3, imagem: 'https://img.elo7.com.br/product/original/22565B3/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-parede.jpg' },
    { nome: 'Prato 4', preco: 45, id: 4, imagem: 'https://classic.exame.com/wp-content/uploads/2021/10/Strozzapreti-ao-molho-Pato_Des-Cucina_fotoGladstoneCampos-1.jpg?quality=70&strip=info&w=1024' },
    { nome: 'Prato 5', preco: 30, id: 5, imagem: 'https://www.folhavitoria.com.br/entretenimento/blogs/espacogourmet/wp-content/uploads/2015/10/Capri_Salmone-Brasiliano_Foto-por-Ari-Oliveira-800x500.jpg' },
    { nome: 'Prato 6', preco: 32, id: 6, imagem: 'https://cozinhalegal.com.br/wp-content/uploads/2023/01/torta-banoffee-facil.jpg' },
    { nome: 'Prato 7', preco: 46, id: 7, imagem: 'https://f.i.uol.com.br/fotografia/2022/08/15/166059563462faadb224674_1660595634_5x2_lg.jpg' },
    { nome: 'Prato 8', preco: 59, id: 8, imagem: 'https://conteudo.imguol.com.br/c/entretenimento/a0/2021/11/06/lanche-hamburguer-x-salada-1636227034415_v2_4x3.jpg' },
    { nome: 'Prato 9', preco: 32, id: 9, imagem: 'https://1.bp.blogspot.com/-2QCwDY3d1rQ/XuZ4nNXJ4qI/AAAAAAABIvU/tvRLQ7_ndWgS7Q5FXYB9jKDAYOCSrgrHQCLcBGAsYHQ/s1600/Cartola.jpg' },
    { nome: 'Prato 10', preco: 45, id: 10, imagem: 'https://uploads.metropoles.com/wp-content/uploads/2021/01/11124603/Vila-Cinco-Lagosta-a-Manteguitta.jpg' },
    { nome: 'Prato 11', preco: 55, id: 11, imagem: 'https://www.terra.com.br/culinaria/infograficos/restaurantes-de-luxo/info/facebook.jpg'},
    { nome: 'Prato 12', preco: 30, id: 12, imagem: 'https://duplagourmet.com.br/wp-content/uploads/2015/08/prato.jpg' },
    { nome: 'Prato 13', preco: 50, id: 13, imagem: 'https://www.pocosja.com.br/divirta-se/wp-content/uploads/2021/11/MG_0040-scaled.jpg' },
    { nome: 'Prato 14', preco: 44, id: 14, imagem: 'https://i.pinimg.com/originals/b7/99/93/b79993cfd67afb2531ad6ee0d58f051b.jpg' },
    { nome: 'Prato 15', preco: 32, id: 15, imagem: 'https://www.socialbauru.com.br/wp-content/uploads/2019/07/circuito16-1.jpg' },
    { nome: 'Prato 16', preco: 70, id: 16, imagem: 'https://www.conexaoparis.com.br/wp-content/uploads/2015/07/magret-clementine-a.jpg' },
  ]

    const [pesqText, setPesqText] = useState('') // Estado para o texto de pesquisa
    const [itemsCardapio, setItemsCardapio] = useState (cardapio) // Estado para os itens do cardápio
    const [mostrarLista, setMostrarLista] = useState (false) // Estado para mostrar ou ocultar a lista completa de itens do cardápio
    const [mostrarPromocoes, setMostrarPromocoes] = useState (false) // Estado para mostrar ou ocultar as promoções
    const [mostrarRecomendacoes, setMostrarRecomendacoes] = useState (false) // Estado para mostrar ou ocultar as recomendações
    const [mostrarHorarios, setMostrarHorarios] = useState(false) // Estado para mostrar ou ocultar os horários
    const [mostrarNum, setMostrarNum]  = useState (false) // Estado para mostrar ou ocultar os números
    const [resultadosPesquisa, setResultadosPesquisa] = useState([])

    const apertarPesquisar = () => {
      // Filtra os itens do cardápio com base no texto de pesquisa
      const filtrarCardapio = cardapio.filter(item => item.nome.toLowerCase().includes(pesqText.toLowerCase()))
      // Atualiza o estado de resultadosPesquisa com o novo array filtrado
      setResultadosPesquisa(filtrarCardapio)   
    }

    // O hook useEffect monitora o valor de pesqText
    useEffect(() => {
      // Função para limpar o estado resultadosPesquisa quando pesqText estiver vazio
      const limparResultadoPesquisa = () => {
        if (pesqText === '') {
          setResultadosPesquisa([])
        }
      }
      // Chama a função de limparResultadoPesquisa sempre que pesqText mudar
      limparResultadoPesquisa()
    }, [pesqText])
    
    // Função para alternar a exibição da lista completa e da lista de promoções
    const alternarLista = () => {
      setMostrarLista(!mostrarLista) // Alterna o valor de mostrarLista para mostrar ou ocultar a lista completa de itens do cardápio
    }

  return (
    <View style={styles.container}>

      <View style={styles.pesq}>
        <TextInput
          style={styles.input}
          placeholder='Digite o nome do prato'
          value={pesqText}
          onChangeText={text => setPesqText(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={apertarPesquisar}>
          <Entypo name="magnifying-glass" size={20} color="white" />
        </TouchableOpacity>
      </View>

    <ScrollView>
      <View style={styles.background}>
        <ImageBackground
          source={{ uri: 'https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2022/12/11/915370/20221212090807397244a.jpg'}}
          style={styles.imageBackground}>
            <Text style={styles.text}>Venha nos visitar!</Text>
          </ImageBackground>
      </View>

      <FlatList
      data={resultadosPesquisa}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.imagem}} style={styles.imagem}/>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.preco}>R$ {item.preco}</Text>
        </View>
      )}
        keyExtractor={item => item.id.toString()}
      />

      <Text style={styles.titulos}>Cardápio</Text>
      <TouchableOpacity
        style={styles.buttonMostrar}
        onPress={alternarLista}>
        <Ionicons style={styles.icons} name="restaurant-outline" size={24} color="#f2eab7" />
        <Text style={styles.textButtonMostrar}>
          {
          mostrarLista ?
          'Esconder cardápio'
          :
          'Mostrar cardápio'
          }
        </Text>
        </TouchableOpacity>
        {mostrarLista &&
        <FlatList
          numColumns={2}
          data={itemsCardapio}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.imagem}} style={styles.imagem}/>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.preco}>R$ {item.preco}</Text>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      }

      <Text style={styles.titulos}>Promoções</Text>
      <TouchableOpacity
        style={styles.buttonMostrar}
        onPress={() => setMostrarPromocoes(!mostrarPromocoes)}>
        <MaterialIcons style={styles.icons} name="attach-money" size={27} color="#f2eab7" />
        <Text style={styles.textButtonMostrar}>
          {
            mostrarPromocoes ?
            'Esconder Promoções'
            :
            'Mostrar Promoções'
          }
        </Text>
      </TouchableOpacity>
      {mostrarPromocoes ? (
        <FlatList
          numColumns={2}
          data={itemsCardapio.filter(item => item.preco === 30 || item.preco === 32)}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.imagem}} style={styles.imagem}/>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.preco}>R$ {item.preco}</Text>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          />
      ) : null}

<Text style={styles.titulos}>Recomendações de pratos</Text>
<TouchableOpacity
  style={styles.buttonMostrar}
  onPress={() => setMostrarRecomendacoes (!mostrarRecomendacoes)}>
  <AntDesign style={styles.icons} name="like2" size={24} color="#f2eab7" />
  <Text style={styles.textButtonMostrar}>
    {
      mostrarRecomendacoes ?
      'Ocultar recomendações'
      :
      'Mostrar recomendações'
    }
  </Text>
</TouchableOpacity>
{mostrarRecomendacoes && (
  <View>
    {itemsCardapio
      .filter(item => item.id === 4 || item.id === 6 || item.id === 10 || item.id === 13 || item.id === 14 || item.id === 15)
      .map(item => (
        <View style={styles.card} key={item.id}>
          <Image source={{ uri: item.imagem}} style={styles.imagem}/>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.preco}>R$ {item.preco}</Text>
        </View>
      ))
    }
  </View>
)}


      <View style={styles.line}/>

      <View style={styles.cont}>
        <View>
          <View style={styles.box}>
            <AntDesign name="clockcircleo" size={42} color="#f2eab7" />
            <Text style={styles.text2}>Horários</Text>
          </View>
          <View style={styles.containerButton}>
            <Button
              title={
                  mostrarHorarios ?
                  'Ocultar horários'
                  :
                  'Ver Horários'
                }
                    onPress={() => setMostrarHorarios(!mostrarHorarios)}
                  />
          </View>
      </View>
              

          <View style={styles.reservas}>
            <View style={styles.box}>
              <AntDesign name="phone" size={42} color="#f2eab7" />
              <Text style={styles.text2}>Reservar</Text>
            </View>
            <View style={styles.containerButton}>
                <Button
                  title={
                    mostrarNum ?
                    'Ocultar número'
                    :
                    'Ver Número'
                  }
                  onPress={() => setMostrarNum(!mostrarNum)}
                />
              </View>
          </View>
      </View>
      {mostrarHorarios && (
        <View>
          <Text style={styles.textos}>Terças a Domingos 10:00-23:00</Text>
        </View>
      )}

      {mostrarNum && (
        <View>
          <Text style={styles.textos}>Telefone: 00 00000-0000</Text>
        </View>
      )}

      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171f25'
  },
  input: {
    marginTop: 35,
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 6,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    marginLeft: 49,
    width: '65%'
  },
  button: {
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 35,
    marginBottom: 10,
    backgroundColor: '#752e2b',
    padding: 10,
  },
  pesq: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBackground: {
    opacity: 0.7,
    paddingTop: 50,
    paddingBottom: 50,
    marginTop: 15,
    alignItems: 'center',
    resizeMode: 'cover',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden'
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#f2eab7',
    backgroundColor: '#090f13',
    padding: 15,
    marginBottom: 80,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  card: {
    flex: 1,
    backgroundColor: '#090f13',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  preco: {
    fontSize: 16,
    color: 'gray',
  },
  titulos:{
    color: '#f2eab7',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30,
  },
  buttonMostrar: {
    marginTop: 7,
    flexDirection: 'row',
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
    justifyContent: 'center',
    backgroundColor: '#171f25',
    borderWidth: 2,
    borderColor: '#752e2b',
    padding: 11,
    marginLeft: 30,
    marginRight: 30,
  },
  textButtonMostrar: {
    color: '#f2eab7',
    fontSize: 17,
    alignSelf: 'center'
  },
  icons: {
    marginRight: 10,
  },
  imagem: {
    width: 150,
    height: 150,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  line: {
    marginTop: 9,
    width: 200,
    borderWidth: 1,
    borderColor: '#752e2b',
    borderStyle: 'solid',
    alignSelf: 'center',
    marginBottom: 30
  },
  box: {
    backgroundColor: '#090f13',
    padding: 25,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 15,
  },
  text2: {
    marginTop: 5,
    color: '#f2eab7',
    fontSize: 20
  },
  cont: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30
  },
  textos: {
    color: 'white',
    fontSize: 20,
    margin: 10,
    alignSelf: 'center'
  }
});