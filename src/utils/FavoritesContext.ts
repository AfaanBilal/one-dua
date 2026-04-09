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
    try {
        const value = await AsyncStorage.getItem('favorites');
        return value !== null ? JSON.parse(value) : [];
    } catch {
        return [];
    }
};

export const saveFavorites = async (favorites: string[]) => {
    try {
        await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (e) {
        console.error('Failed to persist favorites', e);
    }
};
