/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { Size, SpacingH } from '../utils/size';
import ScreenTitle from '../components/ScreenTitle';
import BigCard from '../components/cards/BigCard';
import AltText from '../components/text/AltText';
import { duas } from '../data/duas';
import { FavoritesContext } from '../utils/FavoritesContext';
import { useThemeColors } from '../utils/colors';
import { SettingsContext } from '../utils/SettingsContext';
import { Dua } from '../types';
import { useNavigation } from '@react-navigation/native';

const EmptyFavorites: React.FC = () => {
    const navigation = useNavigation<any>();
    const colors = useThemeColors();

    return (
        <View style={styles.noFavorites}>
            <Entypo name="heart" size={64} color={colors.LIGHT} style={{ textAlign: 'center', marginBottom: SpacingH.s2 }} />
            <AltText style={[styles.noFavoriteTitle, { color: colors.DARK }]}>No favorites yet</AltText>
            <AltText style={[styles.noFavoriteText, { color: colors.DARK }]}>
                Tap the <Entypo name="heart-outlined" size={14} color={colors.DARK} /> on any dua to save it here.
            </AltText>
            <Button
                mode="outlined"
                onPress={() => navigation.navigate('Home')}
                style={{ marginTop: SpacingH.s2, alignSelf: 'center' }}
                textColor={colors.DARK}>
                Browse Duas
            </Button>
        </View>
    );
};

const Favorites: React.FC = () => {
    const { favorites } = React.useContext(FavoritesContext);
    const { settings } = React.useContext(SettingsContext);
    const favoriteDuas = duas.filter(d => favorites.includes(d.id));

    const renderItem = ({ item }: { item: Dua }) => <BigCard dua={item} />;

    return (
        <View style={[styles.container, { backgroundColor: settings.darkMode ? '#0F0F1A' : '#FFFFFF' }]}>
            <StatusBar style={settings.darkMode ? 'light' : 'auto'} />
            <ScreenTitle title='Favorites' />

            <FlatList
                data={favoriteDuas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={EmptyFavorites}
                contentContainerStyle={favoriteDuas.length ? styles.cardContainer : styles.emptyContainer}
            />
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
    emptyContainer: {
        flex: 1,
    },
    noFavorites: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SpacingH.s2,
    },
    noFavoriteTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: SpacingH.s1,
    },
    noFavoriteText: {
        textAlign: 'center',
    },
});
