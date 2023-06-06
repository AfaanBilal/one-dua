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
import { Dua } from '../../types';

const BigCard: React.FC<{ dua: Dua }> = ({ dua }) => {
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

export default BigCard;

const styles = StyleSheet.create({
    card: {
        width: '100%',
        paddingHorizontal: SpacingW.s2,
        paddingVertical: SpacingH.s2,
        backgroundColor: Colors.SOFT_WHITE,
        borderRadius: SpacingW.s2,
    },
    title: {
        marginTop: SpacingH.s2,
        fontSize: FontSize.NORMED,
        color: Colors.DARK,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom: SpacingH.s2,
    },
    text: {
        fontSize: FontSize.SMALL,
        color: Colors.DARK,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
