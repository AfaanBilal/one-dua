/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Size, SpacingH } from '../utils/size';
import ScreenTitle from '../components/ScreenTitle';
import BigCard from '../components/cards/BigCard';
import AltText from '../components/text/AltText';
import { duas } from './Home';
import { FavoritesContext } from '../utils/FavoritesContext';

const Favorites: React.FC = () => {
    const { favorites } = React.useContext(FavoritesContext);
    const favoriteDuas = duas.filter(d => favorites.includes(d.id));

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScreenTitle title='Favorites' />

            {favoriteDuas.length ?
                <ScrollView>
                    <View style={styles.cardContainer}>
                        {favoriteDuas.map((d, i) => <BigCard key={i} dua={d} />)}
                    </View>
                </ScrollView>
                :
                <View style={styles.noFavorites}><AltText style={styles.noFavoriteText}>Tap the <Entypo name="heart-outlined" size={14} color="black" /> to add a favorite.</AltText></View>
            }
        </View>
    );
};

export default Favorites;

const styles = StyleSheet.create({
    container: {
        paddingTop: Size.adjustedStatusBarHeight,
        flex: 1,
    },
    cardContainer: {
        padding: SpacingH.s1,
        gap: SpacingH.s1,
    },
    noFavorites: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    noFavoriteText: {
        textAlign: 'center'
    },
});
