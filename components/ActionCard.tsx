import {
  View,
  Text,
  StyleSheet,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.heading}>Blog Cards</Text>
      <View style={[styles.card, styles.elevation]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          style={styles.blogImage}
          source={{
            uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1613294983676/841x71jGr.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardBodyText} numberOfLines={3}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
              )
            }>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.instagram.com/devrittick/')
            }>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

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
  elevation: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  headingContainer: {
    paddingVertical: 6,
  },
  headerText: {
    textAlign: 'left',
    paddingHorizontal: 12,
    fontWeight: '700',
    fontSize: 20,
    color: 'black',
  },
  blogImage: {
    height: 150,
  },
  cardBody: {
    padding: 12,
  },
  cardBodyText: {
    lineHeight: 18,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  socialLinks: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 4,
    marginBottom: 12,
  },
});
