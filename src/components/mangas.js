import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import menu from '../../assets/Menu.png';
import logo from '../../assets/logo2.png';
import { useNavigation } from '@react-navigation/native';

import mangaDetail from './mangaDetail';

const Mangas = (props) => {
  const navigation = useNavigation();
  const [mangas, setMangas] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const getMangas = async () => {
    try {
      const { data } = await axios.get('https://minga-back-vasquez-production.up.railway.app/api/mangas', {
        params: {
          page: currentPage, // Enviamos el número de página actual al backend
          limit: itemsPerPage, // Indicamos la cantidad de mangas a obtener por página
        },
      });
      setMangas(data.mangas);
    } catch (error) {
      console.log(error);
    }
  }

  const getCategories = async () => {
    try {
      const { data } = await axios.get('https://minga-back-vasquez-production.up.railway.app/api/categories');
      setCategories(data.response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMangas();
  }, [currentPage]);
  useEffect(() => {
    getCategories();
  }, [selectedCategories]);

  const filterMangasByCategory = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
    setCurrentPage(1); // Resetear a la primera página al aplicar un nuevo filtro
  };

  const isMangaInSelectedCategories = (manga) => {
    if (selectedCategories.length === 0) {
      return true;
    } else {
      return selectedCategories.includes(manga.category_id);
    }
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Calculamos si el botón "Next" debe estar deshabilitado
  const isNextButtonDisabled = currentPage ===4;

  // Calculamos si el botón "Prev" debe estar deshabilitado
  const isPrevButtonDisabled = currentPage === 1;

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableHighlight activeOpacity={0.9} underlayColor={'rgba(191, 184, 184, 0.5)'} onPress={() => props.navigation.toggleDrawer()}>
          <Image style={styles.menu} source={menu} />
        </TouchableHighlight>
        <Text style={styles.title}>Mangas</Text>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.filterTextContainer}>
        <Text style={styles.filterText}>Filter by Category</Text>
      </View>
      <View style={styles.containerCategories}>
        {categories.map((category) => (
          <TouchableHighlight
            key={category._id}
            style={[
              styles.butonCategory,
              selectedCategories.includes(category._id) && styles.selectedCategory,
            ]}
            onPress={() => filterMangasByCategory(category._id)}
          >
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableHighlight>
        ))}
      </View>
      <ScrollView contentContainerStyle={styles.containerMangas} showsVerticalScrollIndicator={false}>
        {mangas?.filter(isMangaInSelectedCategories).map((manga, index) => (
          <View key={index} style={styles.mangaItem}>
            <Text style={styles.mangaTitle}>{manga.title}</Text>
            <Image style={styles.coverPhoto} source={{ uri: manga.cover_photo }} />
            <TouchableOpacity style={styles.moreDetailsButton} onPress={() => {
                navigation.navigate('Details', {
                  mangaId: manga._id, // Pasamos el ID del manga como parámetro
                });
              }}>
              <Text style={styles.moreDetailsButtonText}>More Details</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.navigationButtons}>
        <TouchableOpacity
          style={[styles.navigationButton, isPrevButtonDisabled && styles.disabledButton]}
          onPress={goToPrevPage}
          disabled={isPrevButtonDisabled}
        >
          <Text style={styles.navigationButtonText}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navigationButton, isNextButtonDisabled && styles.disabledButton]}
          onPress={goToNextPage}
          disabled={isNextButtonDisabled}
        >
          <Text style={styles.navigationButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  navbar: {
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  logo: {
    width: 40,
    height: 55,
    resizeMode: 'contain',
  },
  menu: {
    height: 30,
    width: 50,
  },
  title: {
    color: 'white',
    fontSize: 20
  },
  filterTextContainer: {
    alignItems: 'center',
    paddingTop: 10,
  },
  filterText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerMangas: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  mangaItem: {
    width: '45%', // Ajusta el ancho del contenedor de la imagen aquí
    marginVertical: 10,
    alignItems: 'center',
  },
  mangaTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  coverPhoto: {
    width: '100%', // Ajusta el ancho de la imagen aquí
    height: 230,
    resizeMode: 'cover',
  },
  moreDetailsButton: {
    backgroundColor: 'salmon',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  moreDetailsButtonText: {
    color: 'white',
    fontSize: 16,
  },
  butonCategory: {
    backgroundColor: 'salmon',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  selectedCategory: {
    backgroundColor: 'orange',
  },
  containerCategories: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
  },
  categoryText: {
    color: 'white',
    fontSize: 16,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  navigationButton: {
    backgroundColor: 'salmon',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  navigationButtonText: {
    color: 'black', // Cambiar a negro para mejorar la legibilidad con el fondo cyan
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
});

export default Mangas;
