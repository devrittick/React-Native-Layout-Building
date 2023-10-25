import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.heading}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/PTV-India-Cover-Final.png',
          }}
          style={styles.image}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Taj Mahal</Text>
          <Text style={styles.cardLabel}>Agra</Text>
          <Text style={styles.cardDescription}>
            The Taj Mahal is considered to be the greatest architectural
            achievement in the whole range of Indo-Islamic architecture.
          </Text>
          <Text style={styles.cardFooter}>
            Best time to visit: April to October
          </Text>
        </View>
      </View>
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
    borderRadius: 4,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  image: {
    height: 180,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  cardBody: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#20232A',
  },
  cardLabel: {
    fontSize: 14,
    paddingBottom: 8,
    color: '#383838',
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 20,
    paddingBottom: 8,
    color: '#808080',
  },
  cardFooter: {
    paddingBottom: 8,
    color: '#383838',
  },
});
