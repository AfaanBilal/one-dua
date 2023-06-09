/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Chip, Searchbar } from 'react-native-paper';
import { Size, SpacingH, SpacingW } from '../utils/size';
import BigCard from '../components/cards/BigCard';
import HighlightCard from '../components/cards/HighlightCard';
import ScreenTitle from '../components/ScreenTitle';
import { Dua } from '../types';
import { Colors } from '../utils/colors';

export const duas: Dua[] = [
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
    { text: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا', id: '12', ref: '', category: 'Before sleeping' },
    { text: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ', id: '13', ref: '', category: 'Waking up' },
    { text: 'إِنَّا ِلِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ', id: '14', ref: '', category: 'Bad news' },
    { text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ', id: '15', ref: '', category: 'Washroom' },
    { text: 'غُفْرَانَكَ الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنِّي الْأَذٰى وَعَافَانِي', id: '16', ref: '', category: 'Washroom' },
    { text: 'بِسْمِ اللَّهِ تَوَكَّلْـتُ عَلَى اللَّهِ، وَلاَ حَوْلَ وَلاَ قُـوَّةَ إِلاَّ بِاللَّهِ', id: '17', ref: '', category: 'General' },
    { text: 'اَللَّهُـمَّ افْتَـحْ لِي أَبْوَابَ رَحْمَتـِكَ', id: '18', ref: '', category: 'Masjid' },
    { text: 'اَللّٰهُمَّ إنِّي أَسْأَلُكَ مِنْ فَضْلِكَ', id: '19', ref: '', category: 'Masjid' },
];

const categoryList = [...new Set(duas.map(d => d.category))];

const highlighted = duas[Math.floor(Math.random() * duas.length)];

const Home: React.FC = () => {
    const [search, setSearch] = React.useState('');
    const [filter, setFilter] = React.useState<string[]>([...categoryList]);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScreenTitle title='' />

            <Searchbar
                placeholder="Search"
                onChangeText={(s: string) => setSearch(s)}
                value={search}
                style={{ marginHorizontal: SpacingW.s1, marginVertical: SpacingH.s1, backgroundColor: Colors.SOFT_WHITE }}
            />

            <ScrollView style={{ paddingHorizontal: SpacingW.s1 }}>
                <HighlightCard dua={highlighted} />

                <View style={{ flexDirection: 'row', gap: SpacingW.s1, paddingVertical: SpacingH.s1, flexWrap: 'wrap' }}>
                    {categoryList.map((c, i) =>
                        <Chip
                            key={i}
                            mode='outlined'
                            selected={filter.includes(c)}
                            onPress={() => setFilter(filter.includes(c) ? filter.filter(f => f !== c) : [...filter, c])}>
                            {c}
                        </Chip>
                    )}
                </View>

                <View style={styles.cardContainer}>
                    {duas
                        .filter(d => filter.includes(d.category))
                        .filter(d => d.category.toLowerCase().includes(search.toLowerCase()))
                        .map((d, i) => <BigCard key={i} dua={d} />)
                    }
                </View>
            </ScrollView>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        paddingTop: Size.adjustedStatusBarHeight,
        flex: 1,
    },
    cardContainer: {
        paddingVertical: SpacingH.s1,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: SpacingH.s1,
    },
});
