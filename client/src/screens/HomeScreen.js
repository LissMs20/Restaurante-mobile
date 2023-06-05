import { StyleSheet, FlatList, ScrollView, View  } from "react-native";
import React, { useState, useEffect } from 'react';
import { BackgroundImage } from "../componentes/BackgroundImage";
import { MenuList } from "../componentes/MenuList";
import { MenuItem } from "../componentes/MenuItem";
import { Promotions } from "../componentes/Promotions";
import { Recommendations } from "../componentes/Recommendations";
import { SearchBar } from "../componentes/SearchBar";

export function HomeScreen (props) {

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

    const [pesqText, setPesqText] = useState('')
    const [itemsCardapio, setItemsCardapio] = useState (cardapio)
    const [mostrarPromocoes, setMostrarPromocoes] = useState (false)
    const [mostrarLista, setMostrarLista] = useState (false)
    const [mostrarRecomendacoes, setMostrarRecomendacoes] = useState (false)
    const [resultadosPesquisa, setResultadosPesquisa] = useState([])

    const apertarPesquisar = () => {
      const filtrarCardapio = cardapio.filter(item => item.nome.toLowerCase().includes(pesqText.toLowerCase()))
      setResultadosPesquisa(filtrarCardapio)   
    }

    useEffect(() => {
      const limparResultadoPesquisa = () => {
        if (pesqText === '') {
          setResultadosPesquisa([])
        }
      }
      limparResultadoPesquisa()
    }, [pesqText])

    const alternarLista = () => {
        setMostrarLista(!mostrarLista)
      }
    return (
        <View style={styles.container}>
            <SearchBar pesqText={pesqText} setPesqText={setPesqText} apertarPesquisar={apertarPesquisar} />
            <ScrollView>
                <BackgroundImage
                imageUrl="https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2022/12/11/915370/20221212090807397244a.jpg"
                />
                <FlatList
                data={resultadosPesquisa}
                renderItem={({ item }) => <MenuItem item={item} />}
                keyExtractor={item => item.id.toString()}
                />
                <MenuList
                title="Cardápio"
                items={itemsCardapio}
                mostrarLista={mostrarLista}
                alternarLista={alternarLista}
                />
                <Promotions
                items={itemsCardapio}
                mostrarPromocoes={mostrarPromocoes}
                setMostrarPromocoes={setMostrarPromocoes}
                />
                <Recommendations
                items={itemsCardapio}
                mostrarRecomendacoes={mostrarRecomendacoes}
                setMostrarRecomendacoes={setMostrarRecomendacoes}
                />
            </ScrollView>
        </View>
              
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171f25'
  },
})