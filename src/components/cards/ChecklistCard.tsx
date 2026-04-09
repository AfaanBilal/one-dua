/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import { LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useThemeColors, CardShadow } from '../../utils/colors';
import { FontSize, SpacingH, SpacingW } from '../../utils/size';
import type { Checklist } from '../../types';
import AltText from '../text/AltText';
import Confetti from '../Confetti';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ChecklistCard: React.FC<{ c: Checklist }> = ({ c }) => {
    const colors = useThemeColors();
    const [isOpen, setIsOpen] = React.useState(false);
    const [counts, setCounts] = React.useState<number[]>(c.duas.map(() => 0));
    const [showConfetti, setShowConfetti] = React.useState(false);

    const storageKey = `checklist_${c.id}`;

    React.useEffect(() => {
        (async () => {
            try {
                const saved = await AsyncStorage.getItem(storageKey);
                if (saved) {
                    const parsed = JSON.parse(saved);
                    if (Array.isArray(parsed) && parsed.length === c.duas.length) {
                        setCounts(parsed);
                    }
                }
            } catch {}
        })();
    }, []);

    const persistCounts = (newCounts: number[]) => {
        setCounts(newCounts);
        AsyncStorage.setItem(storageKey, JSON.stringify(newCounts)).catch(() => {});
    };

    const completedCount = counts.filter((count, i) => count >= c.duas[i].rep).length;
    const totalCount = c.duas.length;
    const allComplete = completedCount === totalCount;

    const toggleOpen = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsOpen(!isOpen);
    };

    const increment = (index: number) => {
        const newCounts = [...counts];
        if (newCounts[index] < c.duas[index].rep) {
            newCounts[index]++;
            persistCounts(newCounts);

            const nowAllComplete = newCounts.every((count, i) => count >= c.duas[i].rep);
            if (newCounts[index] >= c.duas[index].rep) {
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                if (nowAllComplete) {
                    setShowConfetti(true);
                    setTimeout(() => setShowConfetti(false), 2500);
                }
            } else {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }
        }
    };

    const resetAll = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        persistCounts(c.duas.map(() => 0));
    };

    return (
        <View style={[styles.card, { backgroundColor: colors.SOFT_WHITE }, CardShadow]}>
            {showConfetti && <Confetti />}
            <TouchableOpacity onPress={toggleOpen}>
                <View style={styles.topRow}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: SpacingW.s1 }}>
                        <AltText style={[styles.title, { color: colors.DARK }]}>{c.title}</AltText>
                        {completedCount > 0 && (
                            <AltText style={[styles.progress, { color: allComplete ? colors.LIGHT : colors.MEDIUM }]}>
                                {completedCount}/{totalCount}
                            </AltText>
                        )}
                    </View>
                    <Entypo name={`chevron-small-${isOpen ? 'up' : 'down'}`} size={24} color={colors.LIGHT} />
                </View>
            </TouchableOpacity>
            {isOpen &&
                <>
                    {c.duas.map((d, i) => {
                        const isComplete = counts[i] >= d.rep;
                        return (
                            <TouchableOpacity key={i} onPress={() => increment(i)} activeOpacity={0.7}>
                                <View style={[styles.duaCard, { backgroundColor: isComplete ? colors.LIGHT + '20' : colors.WHITE }]}>
                                    <Text style={[styles.dua, { color: colors.DARK }]}>{d.dua.text}</Text>
                                    <View style={styles.counterRow}>
                                        {isComplete ? (
                                            <Entypo name="check" size={20} color={colors.LIGHT} />
                                        ) : (
                                            <View style={[styles.counterBadge, { backgroundColor: colors.LIGHT }]}>
                                                <Text style={styles.counterText}>{counts[i]}/{d.rep}</Text>
                                            </View>
                                        )}
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                    <TouchableOpacity onPress={resetAll} style={styles.resetButton}>
                        <AltText style={[styles.resetText, { color: colors.ACCENT }]}>Reset</AltText>
                    </TouchableOpacity>
                </>
            }
        </View>
    );
};

export default ChecklistCard;

const styles = StyleSheet.create({
    card: {
        width: '100%',
        paddingHorizontal: SpacingW.s2,
        paddingTop: SpacingH.s1,
        borderRadius: SpacingW.s2,
        overflow: 'hidden',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: SpacingW.s1,
    },
    progress: {
        fontSize: FontSize.SMALLEST,
        fontWeight: 'bold',
    },
    duaCard: {
        paddingHorizontal: SpacingW.s1,
        paddingVertical: SpacingH.s2,
        marginBottom: SpacingH.s1,
        borderRadius: SpacingW.s1,
    },
    title: {
        fontSize: FontSize.NORMAL,
        marginBottom: SpacingH.s2,
    },
    dua: {
        fontSize: FontSize.NORMAL,
        textAlign: 'center',
        marginBottom: SpacingH.s1,
    },
    counterRow: {
        alignItems: 'center',
    },
    counterBadge: {
        borderRadius: 12,
        paddingHorizontal: SpacingW.s2,
        paddingVertical: 2,
    },
    counterText: {
        color: '#FFFFFF',
        fontSize: FontSize.SMALLEST,
        fontWeight: 'bold',
    },
    resetButton: {
        alignItems: 'center',
        paddingVertical: SpacingH.s1,
        marginBottom: SpacingH.s1,
    },
    resetText: {
        fontSize: FontSize.SMALL,
    },
});
