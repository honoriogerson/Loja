import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet
} from 'react-native'

import { router } from 'expo-router'

export default function Produtos() {

    // Dados dos produtos (Mokup)
  const produtos = [
    {
      id: 1,
      nome: 'Notebook',
      preco: 3500
    },
    {
      id: 2,
      nome: 'Mouse',
      preco: 120
    },
    {
      id: 3,
      nome: 'Teclado',
      preco: 250
    }
  ]

  function abrirDetalhes(produto) {

    // Navega para a tela de detalhes passando os parâmetros do produto
    router.push({
      pathname: '/produtos/detalhes',
      params: {
        nome: produto.nome,
        preco: produto.preco
      }
    })

  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Produtos
      </Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (

          <Pressable
            style={styles.card}
            onPress={() => abrirDetalhes(item)}
          >

            <Text style={styles.nome}>
              {item.nome}
            </Text>

            <Text>
              R$ {item.preco}
            </Text>

          </Pressable>

        )}
      />

    </View>

  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    marginTop: 50
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },

  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold'
  }

})