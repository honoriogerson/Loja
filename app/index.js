import {
  View,
  Text,
  Pressable,
  StyleSheet
} from 'react-native'

import { router } from 'expo-router'

export default function Home() {

  function abrirProdutos() {

    router.push('/produtos')

  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Tela Inicial
      </Text>

      <Pressable
        style={styles.botao}
        onPress={abrirProdutos}
      >
        <Text style={styles.textoBotao}>
          Abrir Produtos
        </Text>
      </Pressable>

    </View>

  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  titulo: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold'
  },

  botao: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10
  },

  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold'
  }

})