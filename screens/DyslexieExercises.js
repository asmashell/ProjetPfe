/* eslint-disable prettier/prettier */
// screens/DyslexieExercises.js
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const DyslexieExercises = () => {
  const exerciseImages = [
    require('../assets/exercices/image4.png'),
    // Ajoutez d'autres chemins d'image pour les exercices suivants
  ];

  const exerciseQuestions = [
    // Ajoutez d'autres questions pour les exercices suivants
  ];

  return (
    <View style={styles.container}>
      {/* Afficher la question de l'exercice actuel */}
      <Text style={styles.question}>{exerciseQuestions[0]}</Text>

      {/* Afficher l'image de l'exercice actuel */}
      <Image source={exerciseImages[0]} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Ajoutez la couleur de fond blanche
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'contain', // Utiliser 'contain' au lieu de 'cover'
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#AD85E9',
    textAlign: 'center',
    marginBottom: 20, // Ajoutez une marge entre la question et l'image
    // Ajoutez des styles pour l'arabe si nécessaire, comme la police et la direction du texte
  },
});
export default DyslexieExercises; 