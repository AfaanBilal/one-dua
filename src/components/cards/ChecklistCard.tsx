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
import type { Checklist } from '../../types';
import AltText from '../text/AltText';

const ChecklistCard: React.FC<{ c: Checklist }> = ({ c }) => {
    return (
        <View style={styles.card}>
            <AltText style={styles.title}>{c.title}</AltText>
            {
                c.duas.map((d, i) =>
                    <View key={i} style={styles.duaCard}>
                        <Text style={styles.dua}>{d.dua.text}</Text>
                        <Text style={styles.text}>x{d.rep}</Text>
                    </View>
                )
            }
        </View>
    );
};

export default ChecklistCard;

const styles = StyleSheet.create({
    card: {
        width: '100%',
        paddingHorizontal: SpacingW.s2,
        paddingVertical: SpacingH.s2,
        backgroundColor: Colors.SOFT_WHITE,
        borderRadius: SpacingW.s2,
    },
    duaCard: {
        padding: SpacingH.s1,
        marginBottom: SpacingH.s1,
        backgroundColor: Colors.WHITE,
        borderRadius: SpacingW.s1,
    },
    title: {
        fontSize: FontSize.NORMED,
        color: Colors.MEDIUM,
        marginBottom: SpacingH.s2,
    },
    dua: {
        fontSize: FontSize.NORMAL,
        color: Colors.DARK,
        textAlign: 'right',
        marginBottom: SpacingH.s0,
    },
    text: {
        fontSize: FontSize.SMALL,
        color: Colors.DARK,
        textAlign: 'right',
    },
});
