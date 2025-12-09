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
import { Dua } from '../../types';
import { FavoritesContext } from '../../utils/FavoritesContext';

const BigCard: React.FC<{ dua: Dua }> = ({ dua }) => {
    const { favorites, setFavorites } = React.useContext(FavoritesContext);

    return (
        <View style={styles.card}>
            <View style={styles.topRow}>
                <TouchableOpacity hitSlop={10} onPress={() => setFavorites(favorites.includes(dua.id) ? favorites.filter(f => f !== dua.id) : [...favorites, dua.id])}>
                    <Entypo name={favorites.includes(dua.id) ? "heart" : "heart-outlined"} size={24} color="black" />
                </TouchableOpacity>
            </View>
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
    topRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: SpacingW.s2,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
