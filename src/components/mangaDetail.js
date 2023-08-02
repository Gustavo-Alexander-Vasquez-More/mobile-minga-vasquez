import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native'
import React, { useEffect, useState } from 'react'; // Importa useState
import axios from 'axios'; // Importa Axios
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
console.disableYellowBox = true; 
const mangaDetail = () => {
  const route = useRoute();
  const mangaId = route.params.mangaId;
  const [manga, setManga] = useState([]);

  const getMangas = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('token');
      const token = JSON.parse(storedToken);
      
      let headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(`https://minga-back-vasquez-production.up.railway.app/api/mangas/${mangaId}`, headers);
      setManga(data.response);
      console.log(data.response);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getMangas(); // Llama a la función usando los paréntesis
  }, [manga]);

  return (
    <View style={styles.container}>
        <View style={styles.categoryName}>
        <Text style={styles.category} >{manga.category_id?.name}</Text> 
        <View style={styles.dataUser}>
            <Image style={styles.photo} source={{ uri: manga.author_id?.photo }}/>
            <Text style={styles.nameAuthor} >{manga.author_id?.name}</Text> 
            <Text style={styles.last_nameAuthor} >{manga.author_id?.last_name}</Text> 
        </View>
        </View>
   <Text style={styles.title} >{manga.title}</Text>
   <Image source={{ uri: manga.cover_photo }} style={styles.imgDetail} />
   <Text style={styles.description} >{manga.description}</Text>
   <TouchableHighlight style={styles.boton} ><Text style={styles.read}>Read now</Text></TouchableHighlight>
  </View>
  )
}

export default mangaDetail

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent:'space-around',
    alignItems:'center',
    paddingHorizontal:20
  },
  imgDetail:{
    width:'100%',
    height:300,
    resizeMode:'contain'
  },
  title:{
    color:'white',
    fontSize:35
  },
  category:{
    color:'white',
    fontSize:20 
  },
  categoryName:{
    justifyContent:'space-around',
    width:'100%',
    height:30,
    flex:0,
    flexDirection:'row'
  },
  nameAuthor:{
    color:'white',
    fontSize:20  
  },
  last_nameAuthor:{
    color:'white',
    fontSize:20   
  },
  dataUser:{
    flex:0,
    flexDirection:'row',
    justifyContent:'space-around',
    
    width:200
  },
  photo:{
    width:40,
    height:30
  },
  description:{
    color:'white',
    fontSize:15
  },
  boton:{
    backgroundColor:'salmon',
    width:'60%',
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
  },
  read:{
    color:'white',
    fontSize:25
  }
})
