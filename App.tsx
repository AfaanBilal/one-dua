/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Fonts } from './src/utils/fonts';
import { Colors } from './src/utils/colors';
import { Size, SpacingH } from './src/utils/size';
import { FontSize } from './src/utils/size';
import TitleText from './src/components/text/TitleText';
import BigCard from './src/components/cards/BigCard';

const duas = [
    'سُبحَانَ اللّهِ وَ بِحَمْدِهِ',
    'سُبحَانَ اللّهِ الْعَظِيمِ',
    'سُبْحَانَ ٱللَّٰهِ',
    'ٱلْحَمْدُ لِلّٰهِ',
    'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ',
    'ٱللَّٰهُ أَكْبَرُ',
    'أَسْتَغْفِرُ اللّٰهَ',
    'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ ٱلْعَلِيِّ ٱلْعَظِيمِ',
    'بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ',
    'اللّٰهُمَّ أَنْتَ رَبِّي، لَا إِلٰهَ إِلَّا أَنْتَ، خَلَقْتَنِيْ وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَىَّ وَأَبُوءُ لَكَ بِذَنْبِيْ، فَاغْفِرْ لِيْ، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوْبَ إِلَّاأَنْتَ',
    'لَّآ إِلَٰهَ إِلَّآ أَنتَ سُبْحَٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّٰلِمِينَ',
];

export default function App() {
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

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TitleText style={{ fontSize: FontSize.BIGGER, color: Colors.DARK, textAlign: 'center' }}>One Dua</TitleText>

            <ScrollView contentContainerStyle={styles.cardContainer}>
                {duas.map((d, i) => <BigCard key={i} dua={d} />)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Size.adjustedStatusBarHeight,
        flex: 1,
    },
    cardContainer: {
        padding: SpacingH.s0,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: SpacingH.s1,
    },
});
