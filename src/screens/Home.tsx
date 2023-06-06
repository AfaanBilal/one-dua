/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Colors } from '../utils/colors';
import { Size, SpacingH } from '../utils/size';
import { FontSize } from '../utils/size';
import TitleText from '../components/text/TitleText';
import BigCard from '../components/cards/BigCard';
import HighlightCard from '../components/cards/HighlightCard';
import { Dua } from '../types';

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

const Home: React.FC = () => {
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

export default Home;

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
