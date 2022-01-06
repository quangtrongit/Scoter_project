import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeSectionComponent from '../../components/HomeNew/HomeSectionComponents';

const HomeScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      {/*  */}
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome name="search" size={24} color="#969696" />
          <Text style={styles.inputText}>What do you want to eat today?</Text>
        </View>
        {/*  */}
        <TouchableOpacity style={styles.cartContainer}>
          <FontAwesome name="shopping-cart" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      {/*  */}
      <View style={styles.bodyContainer}>
        <ScrollView>
          <HomeSectionComponent />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingBottom: 4,
    backgroundColor: '#ffa500',
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2,
  },
  inputText: {
    color: '#969696',
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //
  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
