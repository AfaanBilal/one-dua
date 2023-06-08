/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesContext = React.createContext<{ favorites: string[], setFavorites: (favorites: string[]) => void }>({ favorites: [], setFavorites: () => { } });

export const loadFavorites = async () => {
    const value = await AsyncStorage.getItem('favorites');
    return value !== null ? JSON.parse(value) : [];
};

export const saveFavorites = async (favorites: string[]) => await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
