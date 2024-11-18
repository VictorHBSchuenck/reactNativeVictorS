import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import FeedCard from '../FeedCard';

export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FeedCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
