/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import { Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';
import { useThemeColors, CardShadow } from '../../utils/colors';
import { FontSize, SpacingH, SpacingW } from '../../utils/size';
import { Dua } from '../../types';
import { FavoritesContext } from '../../utils/FavoritesContext';
import { SettingsContext } from '../../utils/SettingsContext';
import HighlightText from '../text/HighlightText';

const BigCard: React.FC<{ dua: Dua; searchQuery?: string }> = ({ dua, searchQuery }) => {
    const colors = useThemeColors();
    const { favorites, setFavorites } = React.useContext(FavoritesContext);
    const { settings } = React.useContext(SettingsContext);
    const isFavorite = favorites.includes(dua.id);

    const toggleFavorite = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        setFavorites(isFavorite ? favorites.filter(f => f !== dua.id) : [...favorites, dua.id]);
    };

    const copyToClipboard = async () => {
        const text = [dua.text, dua.transliteration, dua.meaning].filter(Boolean).join('\n');
        await Clipboard.setStringAsync(text);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    };

    const shareDua = async () => {
        const text = [dua.text, dua.transliteration ? `\n${dua.transliteration}` : '', dua.meaning ? `\n${dua.meaning}` : '', dua.ref ? `\n— ${dua.ref}` : '', '\nShared via OneDua'].filter(Boolean).join('');
        await Share.share({ message: text });
    };

    const scaledFont = (base: number) => base * settings.fontSizeScale;

    return (
        <TouchableOpacity activeOpacity={0.8} onLongPress={copyToClipboard} delayLongPress={500}>
            <View style={[styles.card, { backgroundColor: colors.SOFT_WHITE }, CardShadow]}>
                <View style={styles.topRow}>
                    <TouchableOpacity hitSlop={10} onPress={shareDua}>
                        <MaterialCommunityIcons name="share-variant-outline" size={20} color={colors.MEDIUM} />
                    </TouchableOpacity>
                    <TouchableOpacity hitSlop={10} onPress={toggleFavorite}>
                        <Entypo
                            name={isFavorite ? "heart" : "heart-outlined"}
                            size={24}
                            color={isFavorite ? colors.ACCENT : colors.MEDIUM}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={[styles.title, { color: colors.DARK, fontSize: scaledFont(FontSize.NORMED) }]}>{dua.text}</Text>
                {settings.showTransliteration && dua.transliteration ? (
                    <HighlightText
                        text={dua.transliteration}
                        highlight={searchQuery}
                        style={[styles.transliteration, { color: colors.MEDIUM, fontSize: scaledFont(FontSize.SMALL) }]}
                    />
                ) : null}
                {settings.showMeaning && dua.meaning ? (
                    <HighlightText
                        text={dua.meaning}
                        highlight={searchQuery}
                        style={[styles.meaning, { color: colors.DARK, fontSize: scaledFont(FontSize.SMALLEST) }]}
                    />
                ) : null}
                <View style={styles.bottomRow}>
                    <HighlightText text={dua.category} highlight={searchQuery} style={[styles.text, { color: colors.DARK }]} />
                    <Text style={[styles.text, { color: colors.DARK }]}>{dua.ref}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default BigCard;

const styles = StyleSheet.create({
    card: {
        width: '100%',
        paddingHorizontal: SpacingW.s2,
        paddingVertical: SpacingH.s2,
        borderRadius: SpacingW.s2,
    },
    title: {
        marginTop: SpacingH.s2,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom: SpacingH.s1,
    },
    transliteration: {
        textAlign: 'center',
        fontStyle: 'italic',
        paddingBottom: SpacingH.s0,
    },
    meaning: {
        textAlign: 'center',
        paddingBottom: SpacingH.s2,
    },
    text: {
        fontSize: FontSize.SMALL,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: SpacingW.s2,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
