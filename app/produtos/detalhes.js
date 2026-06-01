import {
  View,
  Text,
  Pressable,
  StyleSheet
} from 'react-native'

import {
  router,
  useLocalSearchParams
} from 'expo-router'

export default function Detalhes() {

  // Recebe os parâmetros enviados pela tela de produtos
  const { nome, preco } = useLocalSearchParams()

  function voltar() {

    // Volta para a tela anterior
    router.back()

  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Detalhes do Produto
      </Text>

      <Text style={styles.texto}>
        Nome: {nome}
      </Text>

      <Text style={styles.texto}>
        Preço: R$ {preco}
      </Text>

      <Pressable
        style={styles.botao}
        onPress={voltar}
      >
        <Text style={styles.textoBotao}>
          Voltar
        </Text>
      </Pressable>

    </View>

  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },

  texto: {
    fontSize: 20,
    marginBottom: 10
  },

  botao: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    marginTop: 20
  },

  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold'
  }

})