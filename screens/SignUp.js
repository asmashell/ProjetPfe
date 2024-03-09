/* eslint-disable no-shadow */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function SignUp({ navigation }) {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignInLink = () => {
    navigation.navigate('SignIn');
  };

  const isPasswordValid = (password) => {
    // Vérification du mot de passe (au moins 8 caractères, au moins une majuscule, au moins un symbole)
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$/;
    return passwordRegex.test(password);
  };

  const handleSignUpPress = async () => {
    // Validation basique du mot de passe
    if (!isPasswordValid(password)) {
      Alert.alert(
        'Erreur',
        'Le mot de passe doit contenir au moins 8 caractères, au moins une lettre majuscule, et au moins un symbole.'
      );
      return;
    }

    // Validation basique de l'adresse e-mail
    if (!email || !email.includes('@')) {
      Alert.alert('Erreur', 'Veuillez saisir une adresse e-mail valide.');
      return;
    }

    try {
      // Effectuer la requête d'inscription au backend (cette URL est à remplacer par votre propre backend)
      const response = await fetch('http://localhost:3001/SignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, email, password, confirmPassword }),
      });

      // Vérifier la réponse du serveur
      if (response.ok) {
        // L'inscription a réussi
        console.log('Utilisateur inscrit:', { fullname, email });
        navigation.navigate('SignIn');
      } else {
        // Gérer les erreurs d'inscription
        const errorResponse = await response.json();
        Alert.alert('Erreur', errorResponse.message || 'Une erreur est survenue.');
      }
    } catch (error) {
      if (error instanceof TypeError && error.message.includes('Network request failed')) {
        console.error('Erreur réseau:', error);
        Alert.alert('Erreur', 'Problème de connexion au serveur. Veuillez vérifier votre connexion réseau.');
      } else {
        console.error('Erreur lors de l\'inscription:', error);
        Alert.alert('Erreur', 'Une erreur est survenue, veuillez réessayer.');
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/image16.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>أنشأ حسابًا للمتابعة</Text>
          </View>

          <KeyboardAwareScrollView>
            <View style={styles.form}>
              <View style={styles.input}>
                <Text style={styles.inputLabel}>الاسم الكامل</Text>
                <TextInput
                  onChangeText={(text) => setFullname(text)}
                  placeholder="أسماء"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={fullname}
                  textAlign="right"
                />
              </View>

              <View style={styles.input}>
                <Text style={styles.inputLabel}> البريد الإلكتروني</Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  onChangeText={(text) => setEmail(text)}
                  placeholder="asma@example.com"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={email}
                  textAlign="right"
                />
              </View>

              <View style={styles.input}>
                <Text style={styles.inputLabel}>كلمة العبور</Text>
                <TextInput
                  autoCorrect={false}
                  onChangeText={(text) => setPassword(text)}
                  placeholder="********"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  secureTextEntry={true}
                  value={password}
                  textAlign="right"
                />
              </View>

              <View style={styles.input}>
                <Text style={styles.inputLabel}>تأكيد كلمة العبور</Text>
                <TextInput
                  autoCorrect={false}
                  onChangeText={(text) => setConfirmPassword(text)}
                  placeholder="********"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  secureTextEntry={true}
                  value={confirmPassword}
                  textAlign="right"
                />
              </View>

              <View style={styles.formAction}>
                <TouchableOpacity onPress={handleSignUpPress}>
                  <View style={styles.btn}>
                    <Text style={styles.btnText}>التسجيل</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={handleSignInLink}>
                <Text style={styles.formFooter}>
                  هل لديك حساب؟{' '}
                  <Text
                    style={{
                      textDecorationLine: 'underline',
                      color: '#EE75CD',
                    }}>
                    تسجيل الدخول
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 1,
  },
  header: {
    marginVertical: 18,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 2,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  form: {
    paddingHorizontal: 40,
  },
  formAction: {
    marginVertical: 14,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 40,
    backgroundColor: '#F4EFF2',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#EE75CD',
    borderColor: '#EE75CD',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});