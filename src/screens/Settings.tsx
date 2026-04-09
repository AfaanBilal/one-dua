/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Linking, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Divider, Switch } from 'react-native-paper';
import { Size, FontSize, SpacingH, SpacingW } from '../utils/size';
import { useThemeColors } from '../utils/colors';
import { SettingsContext } from '../utils/SettingsContext';
import { FavoritesContext } from '../utils/FavoritesContext';
import ScreenTitle from '../components/ScreenTitle';
import AltText from '../components/text/AltText';

const SettingRow: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => {
    const colors = useThemeColors();
    return (
        <View style={styles.settingRow}>
            <AltText style={[styles.settingLabel, { color: colors.DARK }]}>{label}</AltText>
            {children}
        </View>
    );
};

const Settings: React.FC = () => {
    const colors = useThemeColors();
    const { settings, updateSettings } = React.useContext(SettingsContext);
    const { setFavorites } = React.useContext(FavoritesContext);

    const fontSizeOptions = [
        { label: 'Small', value: 0.85 },
        { label: 'Default', value: 1 },
        { label: 'Large', value: 1.15 },
        { label: 'Larger', value: 1.3 },
    ];

    const resetFavorites = () => {
        Alert.alert(
            'Reset Favorites',
            'Are you sure you want to remove all favorites?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Reset', style: 'destructive', onPress: () => setFavorites([]) },
            ]
        );
    };

    const resetOnboarding = () => {
        updateSettings({ onboardingDone: false });
    };

    return (
        <View style={[styles.container, { backgroundColor: settings.darkMode ? '#0F0F1A' : '#FFFFFF' }]}>
            <StatusBar style={settings.darkMode ? 'light' : 'auto'} />
            <ScreenTitle title='Settings' />

            <ScrollView contentContainerStyle={styles.content}>
                <AltText style={[styles.sectionTitle, { color: colors.MEDIUM }]}>Appearance</AltText>

                <SettingRow label="Dark Mode">
                    <Switch
                        value={settings.darkMode}
                        onValueChange={(v) => updateSettings({ darkMode: v })}
                        color={colors.LIGHT}
                    />
                </SettingRow>

                <Divider style={styles.divider} />

                <SettingRow label="Font Size">
                    <View style={styles.fontSizeRow}>
                        {fontSizeOptions.map((opt) => (
                            <Button
                                key={opt.value}
                                mode={settings.fontSizeScale === opt.value ? 'contained' : 'outlined'}
                                onPress={() => updateSettings({ fontSizeScale: opt.value })}
                                compact
                                style={styles.fontSizeButton}
                                buttonColor={settings.fontSizeScale === opt.value ? colors.LIGHT : undefined}
                                textColor={settings.fontSizeScale === opt.value ? '#FFFFFF' : colors.DARK}
                                labelStyle={{ fontSize: FontSize.SMALLEST }}>
                                {opt.label}
                            </Button>
                        ))}
                    </View>
                </SettingRow>

                <Divider style={styles.divider} />

                <AltText style={[styles.sectionTitle, { color: colors.MEDIUM }]}>Display</AltText>

                <SettingRow label="Show Transliteration">
                    <Switch
                        value={settings.showTransliteration}
                        onValueChange={(v) => updateSettings({ showTransliteration: v })}
                        color={colors.LIGHT}
                    />
                </SettingRow>

                <Divider style={styles.divider} />

                <SettingRow label="Show Meaning">
                    <Switch
                        value={settings.showMeaning}
                        onValueChange={(v) => updateSettings({ showMeaning: v })}
                        color={colors.LIGHT}
                    />
                </SettingRow>

                <Divider style={styles.divider} />

                <AltText style={[styles.sectionTitle, { color: colors.MEDIUM }]}>Data</AltText>

                <Button
                    mode="outlined"
                    onPress={resetFavorites}
                    style={styles.dangerButton}
                    textColor={colors.ACCENT}>
                    Reset All Favorites
                </Button>

                <Button
                    mode="outlined"
                    onPress={resetOnboarding}
                    style={[styles.dangerButton, { marginTop: SpacingH.s1 }]}
                    textColor={colors.MEDIUM}>
                    Show Onboarding Again
                </Button>

                <View style={styles.footer}>
                    <AltText style={[styles.footerText, { color: colors.MEDIUM }]}>OneDua v1.0.0</AltText>
                    <TouchableOpacity onPress={() => Linking.openURL('https://afaan.dev')}>
                        <AltText style={[styles.footerText, { color: colors.LIGHT, textDecorationLine: 'underline' }]}>
                            afaan.dev
                        </AltText>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        paddingTop: Size.adjustedStatusBarHeight,
        flex: 1,
    },
    content: {
        padding: SpacingH.s2,
    },
    sectionTitle: {
        fontSize: FontSize.SMALL,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginTop: SpacingH.s2,
        marginBottom: SpacingH.s1,
    },
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: SpacingH.s1,
    },
    settingLabel: {
        fontSize: FontSize.NORMAL,
        flex: 1,
    },
    fontSizeRow: {
        flexDirection: 'row',
        gap: SpacingW.s1,
    },
    fontSizeButton: {
        borderRadius: 8,
    },
    divider: {
        marginVertical: SpacingH.s0,
    },
    dangerButton: {
        marginTop: SpacingH.s2,
    },
    footer: {
        alignItems: 'center',
        marginTop: SpacingH.s4,
        paddingBottom: SpacingH.s4,
    },
    footerText: {
        fontSize: FontSize.SMALLEST,
    },
});
