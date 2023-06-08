/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Size, SpacingH } from '../utils/size';
import { duas } from './Home';
import ChecklistCard from '../components/cards/ChecklistCard';
import ScreenTitle from '../components/ScreenTitle';
import type { Checklist } from '../types';

const checklists: Checklist[] = [
    { id: '1', title: 'Before sleeping', duas: [{ dua: duas[11], rep: 1 }, { dua: duas[3], rep: 33 }, { dua: duas[4], rep: 33 }, { dua: duas[5], rep: 34 },], },
    { id: '2', title: 'Waking up', duas: [{ dua: duas[4], rep: 3 }, { dua: duas[12], rep: 1 },], },
    { id: '3', title: 'Leaving home', duas: [{ dua: duas[16], rep: 1 },], },
    { id: '4', title: 'Before entering washroom', duas: [{ dua: duas[14], rep: 1 },], },
    { id: '5', title: 'After exiting washroom', duas: [{ dua: duas[15], rep: 1 },], },
];

const Checklists: React.FC = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScreenTitle title='Checklists' />

            <ScrollView>
                <View style={styles.cardContainer}>
                    {checklists.map((c, i) => <ChecklistCard key={i} c={c} />)}
                </View>
            </ScrollView>
        </View>
    );
};

export default Checklists;

const styles = StyleSheet.create({
    container: {
        paddingTop: Size.adjustedStatusBarHeight,
        flex: 1,
    },
    cardContainer: {
        padding: SpacingH.s1,
        gap: SpacingH.s1,
    },
});
