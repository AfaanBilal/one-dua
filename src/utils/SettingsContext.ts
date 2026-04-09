/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Settings = {
    darkMode: boolean;
    showTransliteration: boolean;
    showMeaning: boolean;
    fontSizeScale: number;
    onboardingDone: boolean;
    showHomeFilters: boolean;
};

export const defaultSettings: Settings = {
    darkMode: false,
    showTransliteration: true,
    showMeaning: true,
    fontSizeScale: 1,
    onboardingDone: false,
    showHomeFilters: true,
};

export const SettingsContext = React.createContext<{
    settings: Settings;
    updateSettings: (partial: Partial<Settings>) => void;
}>({
    settings: defaultSettings,
    updateSettings: () => {},
});

export const loadSettings = async (): Promise<Settings> => {
    try {
        const value = await AsyncStorage.getItem('settings');
        return value !== null ? { ...defaultSettings, ...JSON.parse(value) } : defaultSettings;
    } catch {
        return defaultSettings;
    }
};

export const saveSettings = async (settings: Settings) => {
    try {
        await AsyncStorage.setItem('settings', JSON.stringify(settings));
    } catch (e) {
        console.error('Failed to persist settings', e);
    }
};
