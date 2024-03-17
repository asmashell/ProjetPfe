/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-catch-shadow */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAuth } from './AuthContext';

export default function SignIn() {
  const navigation = useNavigation();
  const { dispatch } = useAuth();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  const handleSignInPress = async () => {
    try {
      // Effectuer la requête d'authentification au backend (cette URL est à remplacer par votre propre backend)
      const response = await fetch('http://localhost:3001/SignIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      // Vérifier la réponse du serveur
      if (response.ok) {
        const { token } = await response.json();

        // Stocker le token dans le contexte d'authentification ou local storage
        dispatch({ type: 'SIGN_IN', token });

        // Naviguer vers la page suivante (FicheEnfant dans votre cas)
        navigation.navigate('FicheEnfant');
      } else {
        // Gérer les erreurs d'authentification
        const errorResponse = await response.json();
        console.error('Erreur lors de la connexion:', errorResponse.message || 'Identifiants invalides');
      }
    } catch (error) {
      console.error('Erreur lors de la requête d\'authentification:', error);
      Alert.alert('Erreur', 'Une erreur est survenue, veuillez réessayer.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            alt="App Logo"
            resizeMode="contain"
            style={[styles.headerImg, { width: 800, height: 250 }]}
            source={{
              uri: 'https://i.pinimg.com/564x/f7/ae/aa/f7aeaaaa168fa32b37403e12ee1fbdb4.jpg',
            }}
          />
          <Text style={{ fontSize: 31, fontWeight: '700', color: '#000000', marginBottom: -20 }}>
            تسجيل الدخول إلى <Text style={{ color: '#F290D7' }}>تطبيقي</Text>
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>البريد الإلكتروني</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(email) => setForm({ ...form, email })}
              placeholder="asma@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
              textAlign="right"
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>كلمة المرور</Text>
            <TextInput
              autoCorrect={false}
              onChangeText={(password) => setForm({ ...form, password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password}
              textAlign="right"
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={handleSignInPress}>
              <View style={[styles.btn, { backgroundColor: '#EE75CD' }]}>
                <Text style={styles.btnText}>تسجيل الدخول</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.formLink}>
            <Text style={{ textDecorationLine: 'underline', color: '#6b7280' }}>هل نسيت كلمة المرور؟</Text>{' '}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={handleSignUpPress} style={{ marginTop: 'auto' }}>
        <Text style={styles.formFooter}>
          ليس لديك حساب؟{' '}
          <Text style={{ textDecorationLine: 'underline', color: '#EE75CD' }}>سجل الآن</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 1,
    paddingHorizontal: 1,
    flexGrow: 2,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 26,
  },
  headerImg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 26,
  },
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 6,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 16,
    fontWeight: '700',
    color: '#EE75CD',
    textAlign: 'center',
    marginTop: 5,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '700',
    color: '#222',
    marginBottom: 10,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#0C0705',
    borderStyle: 'solid',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#EE75CD',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '700',
    color: '#fff',
  },
});