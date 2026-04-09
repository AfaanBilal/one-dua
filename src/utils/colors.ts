/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import { SettingsContext } from './SettingsContext';

export const Colors = {
    BLACK: '#000000',
    WHITE: '#FFFFFF',
    SOFT_WHITE: '#F9F9F9',
    DARK: '#092327',
    MEDIUM: '#0b5351',
    LIGHT: '#00a9a5',
    ACCENT: '#E74C3C',
};

export const DarkColors = {
    BLACK: '#000000',
    WHITE: '#16213E',
    SOFT_WHITE: '#1A1A2E',
    DARK: '#E8E8E8',
    MEDIUM: '#4DB6AC',
    LIGHT: '#00BFA5',
    ACCENT: '#FF6B6B',
};

export const CardShadow = {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
};

export const useThemeColors = () => {
    const { settings } = React.useContext(SettingsContext);
    return settings.darkMode ? DarkColors : Colors;
};
