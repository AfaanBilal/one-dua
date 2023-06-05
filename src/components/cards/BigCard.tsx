/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../utils/colors';
import { FontSize, SpacingH, SpacingW } from '../../utils/size';

const BigCard: React.FC<{ dua: string }> = ({ dua }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{dua}</Text>
        </View>
    );
};

export default BigCard;

const styles = StyleSheet.create({
    card: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SpacingW.s2,
        paddingVertical: SpacingH.s2,
        backgroundColor: Colors.SOFT_WHITE,
        borderRadius: SpacingW.s2,
        gap: SpacingH.s2,
    },
    text: {
        fontSize: FontSize.NORMED,
        color: Colors.DARK,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
