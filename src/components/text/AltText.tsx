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

type AltTextProps = WithChildren & {
    style?: StyleProp<TextStyle>;
};

const AltText: React.FC<AltTextProps> = ({ children, style }) => {
    return <Text style={[styles.altText, style]}>{children}</Text>;
};

export default AltText;

const styles = StyleSheet.create({
    altText: {
        fontFamily: Fonts.SourceSansPro,
    },
});
