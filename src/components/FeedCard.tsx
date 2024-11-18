import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from './MapView';

export default function FeedCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Corredor e DEV</Text>
      <Text style={styles.subtitle}>Rio de Janeiro Corrida (cidade maravilhosa)</Text>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>30,00 km</Text>
          <Text style={styles.statLabel}>Distância</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>2:36:03</Text>
          <Text style={styles.statLabel}>Tempo</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>5:12/km</Text>
          <Text style={styles.statLabel}>Ritmo</Text>
        </View>
      </View>

      <MapView />

      <Text style={styles.footer}>Seja a primeira pessoa a curtir isto</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a1a', // Fundo do card
    margin: 16,
    borderRadius: 12,
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ccc',
    fontSize: 16,
    marginVertical: 8,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#aaa',
    fontSize: 14,
  },
  footer: {
    color: '#ccc',
    textAlign: 'center',
    marginTop: 16,
  },
});
