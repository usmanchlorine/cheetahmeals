import { StyleSheet, Text, TextProps, View } from 'react-native';
import React from 'react';
import { SPACERS } from './spacers';
import { COLORS } from './colors';
import { fontSizes, fonts } from './fonts';

interface AppTextProps extends TextProps {
  children?: React.ReactNode; /// taking the react child when ever we want kai kisi component kai ander kouch dal sakta ho tu usme children prop dedete hain
  variant?: 'heading' | 'sub-heading' | 'body-text' | 'body-error'; /// extra props other then text props
}

const getStyle = (variant: AppTextProps['variant']) => {
  /// takes the varient and of AppTextProps['Varients'] and return the object based on the varient
  switch (variant) {
    case 'heading':
      return styles.heading;
    case 'body-text':
      return styles.bodyText;
    case 'sub-heading':
      return styles.subHeading;
    case 'body-error':
      return styles.bodyError;
  }
};

const AppText: React.FC<AppTextProps> = ({
  children,
  variant = undefined,
  style, /// extra style props we want
  ...rest
}) => {
  return (
    <Text
      style={[getStyle(variant), style]}
      {...rest}
    >
      {' '}
      {children}
    </Text>
  ); // we can use array of style containing the objects in it defining the styles
};

export default AppText;

const styles = StyleSheet.create({
  heading: {
    marginTop: SPACERS.tiny,
    marginBottom: SPACERS.small,
    textAlign: 'center',
    fontSize: fontSizes.title,
  },
  subHeading: {
    marginBottom: SPACERS.small,
    textAlign: 'center',
    fontSize: fontSizes.subtitle,
  },
  bodyText: {
    marginBottom: SPACERS.small,
    textAlign: 'left',
    fontSize: fontSizes.body,
  },
  bodyError: {
    fontSize: fontSizes.body,
    textAlign: 'center',
    color: COLORS.error,
    marginBottom: SPACERS.small,
  },
});
