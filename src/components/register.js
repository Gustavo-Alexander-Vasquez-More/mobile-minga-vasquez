import { StyleSheet, Text, View, ImageBackground, KeyboardAvoidingView, Image, TouchableHighlight} from 'react-native';
import React, { useState } from 'react';
import Register from '../../assets/narutoBack.png';
import logo from '../../assets/logo2.png';
import { Input } from 'react-native-elements';

const register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');
 

return (
    <ImageBackground style={styles.backgroundImage} source={Register}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Image style={styles.logo} source={logo} />
        <View style={styles.formContainer}>
          <Text style={styles.welcome}>Welcome</Text>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Correo electrónico"
              onChangeText={(text) => setEmail(text)}
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
              inputContainerStyle={styles.input}
            />
            <Input
              placeholder="Contraseña"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry
              inputContainerStyle={styles.input}
            />
          </View>
          <TouchableHighlight style={styles.buttonRead} onPress={() => props.navigation.navigate('Index')}>
            <Text style={styles.textLogin}>Sign up!</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 25,
    alignItems: 'center',  // Centrar elementos horizontalmente
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  buttonRead: {
    width: '70%',
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 10,
    alignItems: 'center',
  },
  textLogin: {
    fontSize: 17,
    color: 'white',
  },
  welcome: {
    color: 'white',
    fontSize: 30,
    marginBottom: 20,
  },
  logo: {
    width: 160,
    height: 80,
    marginBottom: 20,
  },
  textRegister: {
    color: 'white',
    fontSize: 15,
    marginBottom: 10,
  },
  photoInput:{
    width:'100%',
    height:50,
    backgroundColor:'pink'
  }
});
