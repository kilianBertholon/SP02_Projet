import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import Garmin from '../../assets/image/Captor/Garmin.jpg'
import Oura from '../../assets/image/Captor/oura.jpg'
import SP02 from '../../assets/image/Captor/SP02_medical.jpg'


export default function GalleryCaptor() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galerie d'images</Text>
      <View style={styles.galleryContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          {/* Image principale en haut */}
          <Image
            style={styles.mainImage}
            source={Garmin}
          />
          
          {/* Images miniatures sur le côté */}
          <View style={styles.thumbnailContainer}>
            <Image
              style={styles.thumbnail}
              source={Oura}
            />
            <Image
              style={styles.thumbnail}
              source={SP02}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  galleryContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  mainImage: {
    width: '100%',
    height: '40%',
  },
  thumbnailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  thumbnail: {
    width: 50,
    height: 50,
    margin: 5,
  },
});