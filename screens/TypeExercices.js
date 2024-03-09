/* eslint-disable prettier/prettier */
// screens/TypeExercices.js
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TypeExercices = ({ navigation }) => {
  const navigateToExercise = category => {
    navigation.navigate(`${category}Exercises`);
  };

  return (
    <ImageBackground
      source={require('../assets/image10.jpg')} // Ajoutez le chemin de votre image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>اختر فئة التمارين:</Text>
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => navigateToExercise('dyslexie')}
        >
          <Text style={styles.categoryButtonText}>تمارين القراءة</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => navigateToExercise('dysgraphie')}
        >
          <Text style={styles.categoryButtonText}>تمارين الكتابة</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => navigateToExercise('dyscalculie')}
        >
          <Text style={styles.categoryButtonText}>تمارين الحساب</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 150,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: 'white',
  },
  categoryButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: 250,
    alignItems: 'center',
  },
  categoryButtonText: {
    color: '#00BFFF',
    fontSize: 20,
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ou 'stretch' selon vos préférences
    justifyContent: 'center',
  },
});
export default  TypeExercices;

