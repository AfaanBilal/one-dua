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
import HighlightCard from './src/components/cards/HighlightCard';
import { Dua } from './src/types';

const duas: Dua[] = [
    { text: 'بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ', id: '1', ref: 'Quran 1:1', category: 'General', },
    { text: 'سُبحَانَ اللّهِ وَ بِحَمْدِهِ', id: '2', ref: '', category: 'General' },
    { text: 'سُبحَانَ اللّهِ الْعَظِيمِ', id: '3', ref: '', category: 'General' },
    { text: 'سُبْحَانَ ٱللَّٰهِ', id: '4', ref: '', category: 'General' },
    { text: 'ٱلْحَمْدُ لِلّٰهِ', id: '5', ref: '', category: 'General' },
    { text: 'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ', id: '6', ref: '', category: 'General' },
    { text: 'ٱللَّٰهُ أَكْبَرُ', id: '7', ref: '', category: 'General' },
    { text: 'أَسْتَغْفِرُ اللّٰهَ', id: '8', ref: '', category: 'Forgiveness' },
    { text: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ ٱلْعَلِيِّ ٱلْعَظِيمِ', id: '9', ref: '', category: 'General' },
    { text: 'اللّٰهُمَّ أَنْتَ رَبِّي، لَا إِلٰهَ إِلَّا أَنْتَ، خَلَقْتَنِيْ وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَىَّ وَأَبُوءُ لَكَ بِذَنْبِيْ، فَاغْفِرْ لِيْ، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوْبَ إِلَّاأَنْتَ', id: '10', ref: '', category: 'Forgiveness' },
    { text: 'لَّآ إِلَٰهَ إِلَّآ أَنتَ سُبْحَٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّٰلِمِينَ', id: '11', ref: '', category: 'General' },
    { text: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا', id: '11', ref: '', category: 'Before sleeping' },
    { text: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ', id: '12', ref: '', category: 'Waking up' },
    { text: 'إِنَّا ِلِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ', id: '13', ref: '', category: 'Bad news' },
    { text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ', id: '14', ref: '', category: 'Entering washroom' },
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

            <TitleText style={{ fontSize: FontSize.BIGGER, color: Colors.DARK, textAlign: 'center', marginBottom: SpacingH.s1 }}>One Dua</TitleText>

            <HighlightCard dua={duas[9]} />

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
        padding: SpacingH.s1,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: SpacingH.s1,
    },
});
