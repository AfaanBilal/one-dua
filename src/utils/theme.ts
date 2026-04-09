/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import { DefaultTheme, MD3DarkTheme } from "react-native-paper";
import { Colors, DarkColors } from "./colors";

export const lightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        secondaryContainer: 'transparent',
        primary: Colors.LIGHT,
    },
};

export const darkTheme = {
    ...MD3DarkTheme,
    colors: {
        ...MD3DarkTheme.colors,
        secondaryContainer: 'transparent',
        primary: DarkColors.LIGHT,
        surface: DarkColors.SOFT_WHITE,
        background: '#0F0F1A',
    },
};
