import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.heading}>Flat Card</Text>
      <View style={styles.verticalContainer}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  verticalContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#50DBB4',
  },
  cardThree: {
    backgroundColor: '#5DA3FA',
  },
});
