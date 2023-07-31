import { StyleSheet, Text, View, TouchableHighlight, Image, KeyboardAvoidingView, ImageBackground} from 'react-native';
import { useState } from 'react';
import { Input } from 'react-native-elements';
import React from 'react';
import logo from '../../assets/logo2.png';
import kaneki from '../../assets/kaneki.png'

const index = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes realizar la lógica para manejar el inicio de sesión con el email y la contraseña ingresados
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
      <ImageBackground style={styles.backgroundImage} source={kaneki}>
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
        <TouchableHighlight style={styles.buttonRead} onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.textLogin}>Sign in!</Text>
        </TouchableHighlight>
        <View style={{ marginBottom: 10 }} />
        <Text style={styles.textRegister}>you don't have an account?</Text>
        <TouchableHighlight style={styles.buttonRead} onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.textLogin}>Register</Text>
        </TouchableHighlight>
      </View>
    </KeyboardAvoidingView>
      </ImageBackground>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
resizeMode:'contain'
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
});
