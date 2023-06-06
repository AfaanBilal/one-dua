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
import type { Checklist } from '../types';
import { duas } from './Home';
import ChecklistCard from '../components/cards/ChecklistCard';

const checklists: Checklist[] = [
    { id: '1', title: 'Before sleeping', duas: [{ dua: duas[11], rep: 1 }, { dua: duas[3], rep: 33 }, { dua: duas[4], rep: 33 }, { dua: duas[5], rep: 34 },], },
    { id: '2', title: 'Waking up', duas: [{ dua: duas[4], rep: 3 }, { dua: duas[12], rep: 1 },], },
];

const Checklists: React.FC = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TitleText style={{ fontSize: FontSize.BIGGER, color: Colors.DARK, textAlign: 'center', marginBottom: SpacingH.s1 }}>Checklists</TitleText>

            <ScrollView>
                <View style={styles.cardContainer}>
                    {checklists.map((c, i) => <ChecklistCard key={i} c={c} />)}
                </View>
            </ScrollView>
        </View>
    );
}

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
