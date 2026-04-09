/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import { Chip, Searchbar } from 'react-native-paper';
import { Size, SpacingH, SpacingW } from '../utils/size';
import BigCard from '../components/cards/BigCard';
import HighlightCard from '../components/cards/HighlightCard';
import ScreenTitle from '../components/ScreenTitle';
import { useThemeColors } from '../utils/colors';
import { SettingsContext } from '../utils/SettingsContext';
import { duas, categoryList, getDuaOfTheDay } from '../data/duas';
import { Dua } from '../types';

const Home: React.FC = () => {
    const colors = useThemeColors();
    const { settings } = React.useContext(SettingsContext);
    const [search, setSearch] = React.useState('');
    const [filter, setFilter] = React.useState<string[]>([...categoryList]);
    const [highlighted, setHighlighted] = React.useState(() => getDuaOfTheDay());

    const allSelected = filter.length === categoryList.length;

    const filteredDuas = duas
        .filter(d => filter.includes(d.category))
        .filter(d =>
            d.text.includes(search) ||
            d.category.toLowerCase().includes(search.toLowerCase()) ||
            d.ref.toLowerCase().includes(search.toLowerCase()) ||
            (d.transliteration?.toLowerCase().includes(search.toLowerCase()) ?? false) ||
            (d.meaning?.toLowerCase().includes(search.toLowerCase()) ?? false)
        );

    const onRefresh = () => {
        setHighlighted(duas[Math.floor(Math.random() * duas.length)]);
    };

    const renderHeader = () => (
        <View style={{ paddingHorizontal: SpacingW.s1 }}>
            <HighlightCard dua={highlighted} />

            {settings.showHomeFilters && (
                <View style={styles.chipContainer}>
                    <Chip
                        mode='flat'
                        selected={allSelected}
                        onPress={() => setFilter(allSelected ? [] : [...categoryList])}
                        style={{ backgroundColor: allSelected ? colors.LIGHT : colors.SOFT_WHITE }}>
                        {allSelected ? 'Deselect All' : 'Select All'}
                    </Chip>
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
            )}
        </View>
    );

    const renderItem = ({ item }: { item: Dua }) => (
        <View style={styles.cardWrapper}>
            <BigCard dua={item} searchQuery={search} />
        </View>
    );

    return (
        <View style={[styles.container, { backgroundColor: settings.darkMode ? '#0F0F1A' : '#FFFFFF' }]}>
            <StatusBar style={settings.darkMode ? 'light' : 'auto'} />
            <ScreenTitle title='' />

            <Searchbar
                placeholder="Search duas..."
                onChangeText={(s: string) => setSearch(s)}
                value={search}
                style={{ marginHorizontal: SpacingW.s1, marginVertical: SpacingH.s1, backgroundColor: colors.SOFT_WHITE }}
                inputStyle={{ color: colors.DARK }}
                iconColor={colors.MEDIUM}
                placeholderTextColor={colors.MEDIUM}
            />

            <FlatList
                data={filteredDuas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={renderHeader}
                contentContainerStyle={styles.listContent}
                onRefresh={onRefresh}
                refreshing={false}
            />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        paddingTop: Size.adjustedStatusBarHeight,
        flex: 1,
    },
    chipContainer: {
        flexDirection: 'row',
        gap: SpacingW.s1,
        paddingVertical: SpacingH.s1,
        flexWrap: 'wrap',
    },
    listContent: {
        paddingHorizontal: SpacingW.s1,
        paddingBottom: SpacingH.s2,
    },
    cardWrapper: {
        paddingVertical: SpacingH.s1 / 2,
    },
});
