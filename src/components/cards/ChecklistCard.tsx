/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Colors } from '../../utils/colors';
import { FontSize, SpacingH, SpacingW } from '../../utils/size';
import type { Checklist } from '../../types';
import AltText from '../text/AltText';

const ChecklistCard: React.FC<{ c: Checklist }> = ({ c }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                <View style={styles.topRow}>
                    <AltText style={styles.title}>{c.title}</AltText>
                    <Entypo name={`chevron-small-${isOpen ? 'up' : 'down'}`} size={24} color={Colors.LIGHT} />
                </View>
            </TouchableOpacity>
            {isOpen &&
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
        paddingTop: SpacingH.s1,
        backgroundColor: Colors.SOFT_WHITE,
        borderRadius: SpacingW.s2,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: SpacingW.s1,
    },
    duaCard: {
        paddingHorizontal: SpacingW.s1,
        paddingVertical: SpacingH.s2,
        marginBottom: SpacingH.s1,
        backgroundColor: Colors.WHITE,
        borderRadius: SpacingW.s1,
    },
    title: {
        fontSize: FontSize.NORMAL,
        color: Colors.DARK,
        marginBottom: SpacingH.s2,
    },
    dua: {
        fontSize: FontSize.NORMAL,
        color: Colors.DARK,
        textAlign: 'center',
        marginBottom: SpacingH.s0,
    },
    text: {
        fontSize: FontSize.NORMAL,
        color: Colors.DARK,
        textAlign: 'center',
    },
});
