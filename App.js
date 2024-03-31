import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function App() {

  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.imagemLogo} source={require('../../atividades/pra-fazer-app/assets/logo.png')}></Image>
      <TextInput style={styles.input} placeholder='E-mail'></TextInput>
      <TextInput style={styles.input} placeholder='Senha'></TextInput>
      <TouchableOpacity style={styles.botaoentrar}>
        <Text style={styles.botaoentrartexto}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaocriar}>
        <Text style={styles.botaocriartexto}>Criar Usuário</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6600',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    backgroundColor: '#FFF',
    width: '80%',
    height: 70,
    marginTop: 25,
    borderRadius: 10,
    paddingLeft: 25,
  },

  botaoentrar:{
    backgroundColor: '#070A52',
    width:'80%',
    height: 55,
    marginTop: 25,
    borderRadius: 10,
  },

  botaoentrartexto:{
    color:'#FFF',
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
  },

  botaocriar:{
    marginTop: 25,
  },

  botaocriartexto:{
    color: '#FFF',
  }
  
});
