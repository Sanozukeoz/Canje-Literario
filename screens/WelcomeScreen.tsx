import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nombre App</Text>
      <Text style={styles.subtitle}>
        Intercambia, descubre y conecta con lectores como tú.
        {'\n'}¡Tu próxima historia ya está en otra estantería!
      </Text>

      <CustomButton title="Iniciar Sesión" onPress={() => {}} />
      <CustomButton title="Registrarse" onPress={() => {}} />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 40,
    fontSize: 14,
    color: '#333',
  },
});
