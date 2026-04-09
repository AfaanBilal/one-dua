/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Fonts } from './src/utils/fonts';
import { NavigationContainer } from '@react-navigation/native';
import { AppRegistry, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { expo } from './app.json';
import BottomTabs from './src/navigation/BottomTabs';
import { lightTheme, darkTheme } from './src/utils/theme';
import { FavoritesContext, loadFavorites, saveFavorites } from './src/utils/FavoritesContext';
import { SettingsContext, Settings, defaultSettings, loadSettings, saveSettings } from './src/utils/SettingsContext';
import Onboarding from './src/screens/Onboarding';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [favorites, setFavorites] = React.useState<string[]>([]);
    const [settings, setSettings] = React.useState<Settings>(defaultSettings);
    const [isLoading, setIsLoading] = React.useState(true);

    const [fontsLoaded] = useFonts({
        [Fonts.SourceSansProLight]: require('./assets/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf'),
        [Fonts.SourceSansPro]: require('./assets/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf'),
        [Fonts.SourceSansProSemiBold]: require('./assets/fonts/Source_Sans_Pro/SourceSansPro-SemiBold.ttf'),
        [Fonts.SourceSansProBold]: require('./assets/fonts/Source_Sans_Pro/SourceSansPro-Bold.ttf'),

        [Fonts.UbuntuLight]: require('./assets/fonts/Ubuntu/Ubuntu-Light.ttf'),
        [Fonts.Ubuntu]: require('./assets/fonts/Ubuntu/Ubuntu-Regular.ttf'),
        [Fonts.UbuntuMedium]: require('./assets/fonts/Ubuntu/Ubuntu-Medium.ttf'),
        [Fonts.UbuntuBold]: require('./assets/fonts/Ubuntu/Ubuntu-Bold.ttf'),
    });

    React.useEffect(() => {
        (async () => {
            const [loadedFavorites, loadedSettings] = await Promise.all([
                loadFavorites(),
                loadSettings(),
            ]);
            setFavorites(loadedFavorites);
            setSettings(loadedSettings);
            setIsLoading(false);
        })();
    }, []);

    React.useEffect(() => {
        if (fontsLoaded && !isLoading) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, isLoading]);

    const setFavoritesPersisted = (favorites: string[]) => {
        setFavorites(favorites);
        saveFavorites(favorites);
    };

    const updateSettings = (partial: Partial<Settings>) => {
        const newSettings = { ...settings, ...partial };
        setSettings(newSettings);
        saveSettings(newSettings);
    };

    const handleOnboardingDone = () => {
        updateSettings({ onboardingDone: true });
    };

    if (!fontsLoaded || isLoading) {
        return <View style={{ flex: 1, backgroundColor: '#092327' }} />;
    }

    if (!settings.onboardingDone) {
        return <Onboarding onDone={handleOnboardingDone} />;
    }

    return (
        <NavigationContainer>
            <SettingsContext.Provider value={{ settings, updateSettings }}>
                <FavoritesContext.Provider value={{ favorites, setFavorites: setFavoritesPersisted }}>
                    <PaperProvider theme={settings.darkMode ? darkTheme : lightTheme}>
                        <BottomTabs />
                    </PaperProvider>
                </FavoritesContext.Provider>
            </SettingsContext.Provider>
        </NavigationContainer>
    );
}

AppRegistry.registerComponent(expo.name, () => App);
