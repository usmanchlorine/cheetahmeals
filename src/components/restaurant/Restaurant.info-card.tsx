import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SPACERS } from '../../theme/spacers';

interface RestaurantInfoProps {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpening: boolean;
  rating: number;
  isTemporarlyClosed: unknown;
}

const RestaurantInfoCard: React.FC<RestaurantInfoProps | any> = ({
  restaurant = {},
}) => {
  const {
    name = 'KFC-jauher',
    icon = '',
    photos = [
      'https://cdnnew.foody.com.cy/cdn-cgi/image/f=auto/shop/490/cover?t=1669218790&platform=web',
    ],
    address = 'A188 block 3 gulistan e jauher',
    isOpening = true,
    rating = 4,
    isTemporarlyClosed = '',
  } = restaurant;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.AppImage}
          source={{ uri: photos[0] }}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoHeading}>
          <Text style={styles.restaurantHeading}>{name}</Text>
          <Text>rating Area</Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantInfoCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 300,
    display: 'flex',
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  imageContainer: {
    backgroundColor: 'blue',
    flex: 0.6,
  },
  AppImage: {
    objectFit: 'cover',
    flex: 1,
  },
  infoContainer: {
    padding: SPACERS.tiny,
  },
  infoHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  restaurantHeading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
