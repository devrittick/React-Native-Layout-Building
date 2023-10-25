import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function ElivatedCard() {
  return (
    <View>
      <Text style={styles.heading}>Scrolled Cards</Text>
      <ScrollView horizontal={true}>
        <View style={[styles.card, styles.elivatedCard]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elivatedCard]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.elivatedCard]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.elivatedCard]}>
          <Text>have</Text>
        </View>
        <View style={[styles.card, styles.elivatedCard]}>
          <Text>more</Text>
        </View>
        <View style={[styles.card, styles.elivatedCard]}>
          <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 8,
    marginTop: 30,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    marginRight: 8,
    borderRadius: 4,
  },
  elivatedCard: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: '#EF5354',
    shadowOpacity: 1,
    shadowRadius: 2,
  },
});
