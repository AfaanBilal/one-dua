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
import { FontSize, Size, SpacingH, SpacingW } from '../../utils/size';
import { Dua } from '../../types';
import { FavoritesContext } from '../../utils/FavoritesContext';
import { SettingsContext } from '../../utils/SettingsContext';
import AltText from '../text/AltText';

const HighlightCard: React.FC<{ dua: Dua }> = ({ dua }) => {
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
            <View style={[styles.card, CardShadow]}>
                <View style={styles.topRow}>
                    <AltText style={styles.label}>Dua of the Day</AltText>
                    <View style={{ flexDirection: 'row', gap: SpacingW.s2 }}>
                        <TouchableOpacity hitSlop={10} onPress={shareDua}>
                            <MaterialCommunityIcons name="share-variant-outline" size={20} color={colors.SOFT_WHITE} />
                        </TouchableOpacity>
                        <TouchableOpacity hitSlop={10} onPress={toggleFavorite}>
                            <Entypo
                                name={isFavorite ? "heart" : "heart-outlined"}
                                size={22}
                                color={isFavorite ? colors.ACCENT : colors.SOFT_WHITE}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={[styles.title, { fontSize: scaledFont(FontSize.NORMED) }]}>{dua.text}</Text>
                {settings.showTransliteration && dua.transliteration ? <AltText style={[styles.transliteration, { fontSize: scaledFont(FontSize.SMALL) }]}>{dua.transliteration}</AltText> : null}
                {settings.showMeaning && dua.meaning ? <AltText style={[styles.meaning, { fontSize: scaledFont(FontSize.SMALLEST) }]}>{dua.meaning}</AltText> : null}
                <View style={styles.bottomRow}>
                    <Text style={styles.text}>{dua.category}</Text>
                    <Text style={styles.text}>{dua.ref}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default HighlightCard;

const styles = StyleSheet.create({
    card: {
        minHeight: Size.h15,
        paddingHorizontal: SpacingW.s4,
        paddingVertical: SpacingH.s2,
        backgroundColor: '#092327',
        borderRadius: SpacingW.s2,
        justifyContent: 'space-between',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: FontSize.SMALLEST,
        color: '#00a9a5',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    title: {
        marginTop: SpacingH.s2,
        color: '#F9F9F9',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom: SpacingH.s1,
    },
    transliteration: {
        color: '#00a9a5',
        textAlign: 'center',
        fontStyle: 'italic',
        paddingBottom: SpacingH.s0,
    },
    meaning: {
        color: '#F9F9F9',
        textAlign: 'center',
        opacity: 0.85,
        paddingBottom: SpacingH.s4,
    },
    text: {
        fontSize: FontSize.SMALL,
        color: '#F9F9F9',
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
