/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import { useFonts } from 'expo-font';
import { Fonts } from './src/utils/fonts';
import { NavigationContainer } from '@react-navigation/native';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { expo } from './app.json';
import BottomTabs from './src/navigation/BottomTabs';
import { theme } from './src/utils/theme';
import { FavoritesContext, loadFavorites, saveFavorites } from './src/utils/FavoritesContext';

export default function App() {
    const [favorites, setFavorites] = React.useState<string[]>([]);
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

    React.useEffect(() => { (async () => { setFavorites(await loadFavorites()); })(); }, []);
    const setFavoritesPersisted = (favorites: string[]) => {
        setFavorites(favorites);
        (async () => { await saveFavorites(favorites); })();
    };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <FavoritesContext.Provider value={{ favorites, setFavorites: setFavoritesPersisted }}>
                <PaperProvider theme={theme}>
                    <BottomTabs />
                </PaperProvider>
            </FavoritesContext.Provider>
        </NavigationContainer>
    );
}

AppRegistry.registerComponent(expo.name, () => App);
