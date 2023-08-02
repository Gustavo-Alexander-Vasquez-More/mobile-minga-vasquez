import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground, KeyboardAvoidingView, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Register from '../../assets/narutoBack.png';
import logo from '../../assets/logo2.png';
import { Input } from 'react-native-elements';
import axios from 'axios'; // Importa Axios

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleFormSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('photo', {
        uri: photo,
        name: 'photo.jpg',
        type: 'image/jpeg',
      });

      const response = await axios.post("https://minga-back-vasquez-production.up.railway.app/api/users/register", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Alert.alert(
        'Successful Registration',
        'Your registration was successful!',
        );
        props.navigation.navigate('Index')
    } catch (error) {
      console.error(error);
      // Resto de la lógica de manejo de errores
    }
  };

  const pickImage = async () => {
    Alert.alert(
      'Choose Image Source',
      'Where do you want to upload your image from?',
      [
        { text: 'Camera', onPress: () => handleImagePicker(true) },
        { text: 'Gallery', onPress: () => handleImagePicker(false) },
      ],
      { cancelable: true }
    );
  };

  const handleImagePicker = async (fromCamera) => {
    let result;

    if (fromCamera) {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
    } else {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
    }

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

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
          <TouchableOpacity style={styles.buttonContainer} onPress={pickImage}>
            <Text style={styles.buttonText}>Select Image</Text>
          </TouchableOpacity>
          {photo && <Image source={{ uri: photo }} style={styles.selectedPhoto} />}
          <TouchableOpacity style={styles.buttonContainer} onPress={handleFormSubmit}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
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
    resizeMode: 'cover',
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
  },
  buttonContainer: {
    width: '70%',
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 17,
    color: 'white',
  },
  selectedPhoto: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
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
});

export default SignUp;
