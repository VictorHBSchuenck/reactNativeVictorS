import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function MapView() {
  return (
    <View style={styles.mapContainer}>
      <Image
        source={require('../../assets/Mapa-Google-1024x715.png')}
        style={styles.map}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    height: 200,
    marginVertical: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
