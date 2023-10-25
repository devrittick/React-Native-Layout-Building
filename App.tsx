import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElivatedCard from './components/ElivatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatCard />
        <ElivatedCard />
        <ContactList />
        <ActionCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginBottom: 0,
  },
});
