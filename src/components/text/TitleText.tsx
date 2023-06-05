/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native'
import { Fonts } from '../../utils/fonts';
import type { WithChildren } from '../../types';

type TitleTextProps = WithChildren & {
    style?: StyleProp<TextStyle>;
};

const TitleText: React.FC<TitleTextProps> = ({ children, style }) => {
    return <Text style={[styles.titleText, style]}>{children}</Text>;
};

export default TitleText;

const styles = StyleSheet.create({
    titleText: {
        fontFamily: Fonts.UbuntuBold,
    },
});
