/* eslint-disable react-native/no-inline-styles */
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/HomeNew/HeaderComponent';

const ProfileItem = ({icon, name}) => (
  <View style={styles.itemContainer}>
    <MaterialCommunityIcons name={icon} size={26} color="#1e1e1e" />
    <Text style={[styles.itemText, {marginLeft: icon ? 20 : 0}]}>{name}</Text>
    <FontAwesome name="angle-right" size={26} color="#1e1e1e" />
  </View>
);

const ProfileScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      {/*  */}
      <Header title="Profile Customer" />
      {/*  */}
      <View style={styles.bodyContainer}>
        <View style={styles.userContainer}>
          <View style={styles.avatarContainer}>
            <TouchableOpacity>
              <MaterialIcons name="person" size={26} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Welcome to Fast Food & Drink</Text>
            <Text style={styles.authText}>User_TDQT </Text>
          </View>
          <TouchableOpacity>
            <FontAwesome name="angle-right" size={26} color="#1e88e5" />
          </TouchableOpacity>
        </View>
        {/*  */}
        <View style={styles.divider} />
        <TouchableOpacity>
          <ProfileItem icon="format-list-bulleted" name="Management Orders" />
        </TouchableOpacity>
        <TouchableOpacity>
          <ProfileItem icon="cart-outline" name=" Ordered Food  " />
        </TouchableOpacity>
        <TouchableOpacity>
          <ProfileItem icon="eye-outline" name="Viewed Food " />
        </TouchableOpacity>
        <TouchableOpacity>
          <ProfileItem icon="heart-outline" name="Favorite Food " />
        </TouchableOpacity>
        <TouchableOpacity>
          <ProfileItem icon="bookmark-outline" name="Food to buy later" />
        </TouchableOpacity>
        <TouchableOpacity>
          <ProfileItem icon="star-outline" name="Food  reviews" />
        </TouchableOpacity>
        {/*  */}
        <View style={styles.divider} />
        <TouchableOpacity>
          <ProfileItem name="Offers for bank card & visa holders" />
        </TouchableOpacity>
        <TouchableOpacity>
          <ProfileItem name="Setting" icon="cog" />
        </TouchableOpacity>
        {/*  */}
        <View style={styles.divider} />
        <TouchableOpacity>
          <ProfileItem icon="headphones" name=" Customer support" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <ProfileItem icon="logout" name="Logout" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  //
  userContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 22,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5538e5',
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  welcomeText: {
    color: '#828282',
  },
  authText: {
    color: '#1e3214',
    fontSize: 18,
    fontWeight: '500',
  },
  //
  itemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    color: '#1e1e1e',
  },
  //
  divider: {
    height: 10,
  },
});

export default ProfileScreen;
