/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../utils/colors';
import { FontSize, Size, SpacingH, SpacingW } from '../../utils/size';
import { Dua } from '../../types';

const HighlightCard: React.FC<{ dua: Dua }> = ({ dua }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{dua.text}</Text>
            <View style={styles.bottomRow}>
                <Text style={styles.text}>{dua.category}</Text>
                <Text style={styles.text}>{dua.ref}</Text>
            </View>
        </View>
    );
};

export default HighlightCard;

const styles = StyleSheet.create({
    card: {
        minHeight: Size.h15,
        paddingHorizontal: SpacingW.s4,
        paddingVertical: SpacingH.s2,
        backgroundColor: Colors.DARK,
        borderRadius: SpacingW.s2,
        justifyContent: 'space-between',
    },
    title: {
        marginTop: SpacingH.s2,
        fontSize: FontSize.NORMED,
        color: Colors.SOFT_WHITE,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom: SpacingH.s2,
    },
    text: {
        fontSize: FontSize.SMALL,
        color: Colors.SOFT_WHITE,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
