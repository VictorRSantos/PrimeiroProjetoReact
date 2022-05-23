import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardMensagem from './componentes/CardMensagem';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Primeiro App React</Text>
    
      <CardMensagem/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:
  {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:10
  }
});
