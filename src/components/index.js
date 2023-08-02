import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, KeyboardAvoidingView, ImageBackground, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo2.png';
import kaneki from '../../assets/kaneki.png'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
console.disableYellowBox = true; 
const Index = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const navigation = useNavigation();

  const signin = async () => {
    let datos = {
      email: inputEmail,
      password: inputPassword,
    }

    try {
      const { data } = await axios.post('https://minga-back-vasquez-production.up.railway.app/api/users/signin', datos);

      console.log(data.response);

      let token = JSON.stringify(data.response.token)
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('user', JSON.stringify(data.response.user));
      await AsyncStorage.setItem('photo', JSON.stringify(data.response.user.photo));

      // Alerta para login exitoso
      showAlert("It's good to see you again! 😋", 'success');
      
      navigation.navigate('Home');

    } catch (error) {
      console.log(error);
      
      // Alerta para login no exitoso
      showAlert('wrong email or password! 😓', 'error');
      navigation.navigate('Index');
    }
  };

  const showAlert = (message, type) => {
    const alertBackgroundColor = type === 'success' ? 'green' : 'red';
    const textColor = 'white';

    Alert.alert(
      '',
      message,
      [
        { text: 'OK', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  return (
    <ImageBackground style={styles.backgroundImage} source={kaneki}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Image style={styles.logo} source={logo} />
        <View style={styles.formContainer}>
          <Text style={styles.welcome}>Welcome</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="📧 Your email"
              value={inputEmail}
              onChangeText={setInputEmail}
              keyboardType="email-address"
              style={styles.input}
            />
            <TextInput
              placeholder="🔒 Your password"
              value={inputPassword}
              onChangeText={setInputPassword}
              secureTextEntry
              style={styles.input}
            />
          </View>
          <TouchableHighlight style={styles.buttonRead} onPress={signin}>
            <Text style={styles.textLogin}>Sign in!</Text>
          </TouchableHighlight>
          <View style={{ marginBottom: 10 }} />
          <Text style={styles.textRegister}>you don't have an account?</Text>
          <TouchableHighlight style={styles.buttonRead} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.textLogin}>Register</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom:30,
    padding:10
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

export default Index;
