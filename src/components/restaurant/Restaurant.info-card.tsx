import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SPACERS } from '../../theme/spacers';
import AppText from '../../theme/AppText';
import { COLORS } from '../../theme/colors';
import { fontSizes, fontWeights, fonts } from '../../theme/fonts';
import { Icon } from 'react-native-paper';
import { Chip } from 'react-native-paper';
import { mockImages } from '../../service/restaurant/mock';
interface RestaurantInfoProps {
  name: string;
  icon?: string;
  address?: string;
  isOpening?: boolean;
  rating: number;
  isTemporarlyClosed?: boolean;
  vicinity?: string;
  isOpenNow?: boolean;
  priceLevel: number;
  types?: string[];
}

const RestaurantInfoCard: React.FC<any> = ({ restaurant }) => {
  const {
    name,
    icon = '',
    address,
    vicinity,
    isOpenNow,
    rating,
    priceLevel,
    types,
  }: RestaurantInfoProps = restaurant;
  const arrayOfStar = Array.from(new Array(Math.floor(rating ? rating : 0)));
  const arrayOfHollowStar = Array.from(
    new Array(5 - Math.floor(rating ? rating : 0)),
  );
  const arrayOfPricelevel = Array.from(new Array(priceLevel ? priceLevel : 0));
  const randomImage = mockImages.at(
    Math.floor(Math.random() * mockImages.length),
  );
  return (
    <View style={[styles.cardContainer, {}]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.AppImage}
          source={{ uri: randomImage }}
        />
        {arrayOfPricelevel.length > 0 && (
          <View style={styles.promotionChip}>
            {arrayOfPricelevel.map((level, idx) => (
              <Icon
                source="currency-usd"
                size={18}
                key={idx}
                color={COLORS.white}
              />
            ))}
          </View>
        )}

        <View
          style={[
            styles.openingChip,
            {
              backgroundColor: isOpenNow
                ? COLORS.ui.success
                : COLORS.ui.secondary,
            },
          ]}
        >
          <Icon
            source="information"
            size={20}
            color={COLORS.white}
          />
          <AppText
            variant={undefined}
            style={styles.promotionChipText}
          >
            {isOpenNow ? 'Open' : 'Closed'}
          </AppText>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoHeading}>
          <AppText
            variant="sub-heading"
            style={styles.restaurantHeading}
          >
            {name.length >= 24 ? name.slice(0, 24) + '...' : name}
          </AppText>
          <View style={{ flexDirection: 'row' }}>
            {arrayOfStar.map((star, idx) => (
              <Icon
                key={idx}
                source="star"
                size={20}
                color="tomato"
              />
            ))}

            {arrayOfHollowStar.map((star, idx) => (
              <Icon
                key={idx}
                source="star-outline"
                size={20}
                color="black"
              />
            ))}
          </View>
        </View>
        <View>
          <AppText
            variant="body-text"
            style={styles.infoAddress}
          >
            {vicinity}
          </AppText>
        </View>
        <View style={{ flexDirection: 'row' }}>
          {types?.map(
            (type: string, idx: any) =>
              idx < 4 && (
                <AppText
                  style={{ color: 'tomato', elevation: 4 }}
                  key={idx}
                >
                  {type.replaceAll('_', ' ')}
                </AppText>
              ),
          )}
        </View>
      </View>
    </View>
  );
};

export default RestaurantInfoCard;

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: SPACERS.extraTiny,
    backgroundColor: COLORS.white,
    elevation: 2,
    marginBottom: SPACERS.small,
  },
  imageContainer: {
    height: 180,
    position: 'relative',
  },
  AppImage: {
    objectFit: 'cover',
    flex: 1,
  },
  infoContainer: {
    padding: SPACERS.tiny,
  },
  promotionChip: {
    position: 'absolute',
    top: SPACERS.tiny,
    left: SPACERS.tiny,
    flexDirection: 'row',
    paddingHorizontal: SPACERS.tiny,
    paddingVertical: SPACERS.tiny,
    alignItems: 'center',
    borderRadius: SPACERS.tiny,
    backgroundColor: COLORS.chip.promotion,
  },

  openingChip: {
    position: 'absolute',
    top: SPACERS.tiny,
    right: SPACERS.tiny,
    flexDirection: 'row',
    paddingHorizontal: SPACERS.small,
    paddingVertical: SPACERS.tiny,
    gap: SPACERS.extraTiny,
    alignItems: 'center',
    borderRadius: SPACERS.tiny,
  },
  promotionChipText: {
    fontSize: fontSizes.button,
    fontWeight: '700',
    color: COLORS.white,
  },
  infoHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  restaurantHeading: {
    fontFamily: fonts.subheading,
  },
  infoAddress: {
    textAlign: 'justify',
    fontFamily: fonts.monospace,
  },
});
