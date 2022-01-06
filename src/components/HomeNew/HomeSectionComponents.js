/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

const section_banner = require('../../../assets/log1.png');
const item_image_1 = require('../../../assets/an-hamberger-co-beo-khong-7-1-300x187.jpeg');
const item_image_2 = require('../../../assets/4973.jpeg');
const item_image_3 = require('../../../assets/424351.jpeg');
const item_image_4 = require('../../../assets/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpeg');

const ProductItem = ({image, name, price}) => (
  <View style={styles.itemContainer}>
    <Image source={image} style={styles.itemImage} />
    <Text style={styles.itemName} numberOfLines={2}>
      {name}
    </Text>
    <Text style={styles.itemPrice}>{price}</Text>
  </View>
);

const HomeSectionComponent = () => {
  return (
    <View style={styles.sectionContainer}>
      {/*  */}
      <Text style={styles.sectionTitle}>MENU FAST FOOD </Text>
      {/*  */}
      <Image source={section_banner} style={styles.sectionImage} />
      {/*  */}
      <ScrollView horizontal={true}>
        <View style={styles.filterContainer}>
          {['Pick-up', 'Soft Drinks', 'Bakery Items', 'Fast Food','Deals','Coffee & Tea','Desserts'].map(
            (e, index) => (
              <View
                key={index.toString(2)}
                style={
                  index === 0
                    ? styles.filterActiveButtonContainer
                    : styles.filterInactiveButtonContainer
                }>
                <Text
                  style={
                    index === 0
                      ? styles.filterActiveText
                      : styles.filterInactiveText
                  }>
                  {e}
                </Text>
              </View>
            ),
          )}
        </View>
      </ScrollView>
      {/*  */}
      <ScrollView horizontal={true}>
        <View style={styles.listItemContainer}>
          {[
            {image1: item_image_1, image2: item_image_2},
            {image1: item_image_2, image2: item_image_3},
            {image1: item_image_4, image2: item_image_1},
            {image1: item_image_1, image2: item_image_2},
          ].map((e, index) => (
            <View key={index.toString()}>
              <TouchableOpacity>
              <ProductItem name="Fast Food" image={e.image1} price="29.000đ" />
              </TouchableOpacity>
              <TouchableOpacity>
              <ProductItem name="Soft Drink" image={e.image2} price="49.000đ" />
              </TouchableOpacity>
              <TouchableOpacity>
              <ProductItem name="Bakery Items" image={e.image2} price="99.000đ" />
              </TouchableOpacity>
              <TouchableOpacity>
              <ProductItem name="Deals" image={e.image2} price="19.000đ" />
              </TouchableOpacity>
              <TouchableOpacity>
              <ProductItem name="Coffee & Tea" image={e.image2} price="79.000đ" />
              </TouchableOpacity>
              <TouchableOpacity>
              <ProductItem name="Desserts" image={e.image2} price="69.000đ" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      {/*  */}
      <View style={styles.seeMoreContainer}>
        <Text style={styles.seeMoreText}>XEM THÊM 102 SẢN PHẨM </Text>
      </View>
    </View>
  );
};

export default HomeSectionComponent;

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2f2f2f',
    marginVertical: 12,
  },
  sectionImage: {
    width: width - 24,
    height: 130,
    borderRadius: 4,
  },
  //
  filterContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  filterActiveButtonContainer: {
    backgroundColor: '#242424',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 10,
  },
  filterInactiveButtonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: '#5a5a5a',
    borderWidth: 1,
    marginRight: 10,
  },
  filterActiveText: {
    color: '#fff',
  },
  filterInactiveText: {
    color: '#5a5a5a',
  },
  //
  listItemContainer: {
    flexDirection: 'row',
  },
  itemContainer: {
    width: 100,
    marginRight: 12,
    marginTop: 10,
  },
  itemImage: {
    width: 100,
    height: 120,
  },
  itemName: {
    fontSize: 14,
    color: '#484848',
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2a2a2a',
  },
  //
  seeMoreContainer: {
    marginTop: 10,
    padding: 12,
    borderTopWidth: 0.6,
    borderTopColor: '#ededed',
    alignItems: 'center',
  },
  seeMoreText: {
    color: '#0e45b4',
  },
});
