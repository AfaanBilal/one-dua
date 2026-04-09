/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { Size, SpacingH } from '../utils/size';
import { useThemeColors } from '../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDuaById } from '../data/duas';
import ChecklistCard from '../components/cards/ChecklistCard';
import ScreenTitle from '../components/ScreenTitle';
import { SettingsContext } from '../utils/SettingsContext';
import type { Checklist } from '../types';

const checklists: Checklist[] = [
    { id: '1', title: 'Before sleeping', duas: [{ dua: getDuaById('12'), rep: 1 }, { dua: getDuaById('4'), rep: 33 }, { dua: getDuaById('5'), rep: 33 }, { dua: getDuaById('6'), rep: 34 }] },
    { id: '2', title: 'Waking up', duas: [{ dua: getDuaById('5'), rep: 3 }, { dua: getDuaById('13'), rep: 1 }] },
    { id: '3', title: 'Leaving home', duas: [{ dua: getDuaById('17'), rep: 1 }] },
    { id: '4', title: 'Entering masjid', duas: [{ dua: getDuaById('18'), rep: 1 }] },
    { id: '5', title: 'Leaving masjid', duas: [{ dua: getDuaById('19'), rep: 1 }] },
    { id: '6', title: 'Before entering washroom', duas: [{ dua: getDuaById('15'), rep: 1 }] },
    { id: '7', title: 'After exiting washroom', duas: [{ dua: getDuaById('16'), rep: 1 }] },
];

const Checklists: React.FC = () => {
    const colors = useThemeColors();
    const { settings } = React.useContext(SettingsContext);
    const [resetKey, setResetKey] = React.useState(0);

    const resetAll = () => {
        Alert.alert(
            'Reset All Checklists',
            'Are you sure you want to reset all checklist progress?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Reset All', style: 'destructive', onPress: () => {
                        checklists.forEach(c => {
                            AsyncStorage.removeItem(`checklist_${c.id}`).catch(() => {});
                        });
                        setResetKey(k => k + 1);
                    },
                },
            ]
        );
    };

    return (
        <View style={[styles.container, { backgroundColor: settings.darkMode ? '#0F0F1A' : '#FFFFFF' }]}>
            <StatusBar style={settings.darkMode ? 'light' : 'auto'} />
            <ScreenTitle title='Checklists' />

            <ScrollView>
                <View style={styles.cardContainer}>
                    {checklists.map((c) => <ChecklistCard key={`${c.id}-${resetKey}`} c={c} />)}
                </View>
                <Button
                    mode="text"
                    onPress={resetAll}
                    textColor={colors.ACCENT}
                    style={styles.resetAllButton}>
                    Reset All Checklists
                </Button>
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
    resetAllButton: {
        marginVertical: SpacingH.s2,
    },
});
