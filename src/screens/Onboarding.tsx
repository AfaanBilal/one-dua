/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import { Dimensions, FlatList, StyleSheet, View, ViewToken } from 'react-native';
import { Button } from 'react-native-paper';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../utils/colors';
import { FontSize, SpacingH } from '../utils/size';
import TitleText from '../components/text/TitleText';
import AltText from '../components/text/AltText';

const { width } = Dimensions.get('window');

type OnboardingPage = {
    id: string;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
};

const pages: OnboardingPage[] = [
    {
        id: '1',
        icon: <MaterialCommunityIcons name="book-open-page-variant" size={80} color={Colors.LIGHT} />,
        title: 'Welcome to OneDua',
        subtitle: 'Your daily companion for Quranic and Sunnah duas. Browse, search, and learn beautiful supplications.',
    },
    {
        id: '2',
        icon: <Entypo name="heart" size={80} color={Colors.ACCENT} />,
        title: 'Save Your Favorites',
        subtitle: 'Tap the heart icon on any dua to save it. Access your favorites anytime from the Favorites tab.',
    },
    {
        id: '3',
        icon: <MaterialCommunityIcons name="check-circle" size={80} color={Colors.LIGHT} />,
        title: 'Daily Checklists',
        subtitle: 'Follow guided checklists for morning, evening, and other routines. Tap to count your dhikr repetitions.',
    },
];

type Props = {
    onDone: () => void;
};

const Onboarding: React.FC<Props> = ({ onDone }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const flatListRef = React.useRef<FlatList>(null);

    const onViewableItemsChanged = React.useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
        if (viewableItems.length > 0 && viewableItems[0].index !== null) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewabilityConfig = React.useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const goNext = () => {
        if (currentIndex < pages.length - 1) {
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
            onDone();
        }
    };

    const renderItem = ({ item }: { item: OnboardingPage }) => (
        <View style={styles.page}>
            <View style={styles.iconContainer}>{item.icon}</View>
            <TitleText style={styles.title}>{item.title}</TitleText>
            <AltText style={styles.subtitle}>{item.subtitle}</AltText>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={pages}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
            />

            <View style={styles.footer}>
                <View style={styles.dots}>
                    {pages.map((_, i) => (
                        <View
                            key={i}
                            style={[
                                styles.dot,
                                { backgroundColor: i === currentIndex ? Colors.LIGHT : Colors.LIGHT + '40' },
                            ]}
                        />
                    ))}
                </View>

                <View style={styles.buttons}>
                    {currentIndex < pages.length - 1 ? (
                        <>
                            <Button onPress={onDone} textColor={Colors.MEDIUM}>Skip</Button>
                            <Button mode="contained" onPress={goNext} buttonColor={Colors.LIGHT}>Next</Button>
                        </>
                    ) : (
                        <Button mode="contained" onPress={onDone} buttonColor={Colors.LIGHT} style={{ flex: 1 }}>
                            Get Started
                        </Button>
                    )}
                </View>
            </View>
        </View>
    );
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    page: {
        width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SpacingH.s4,
    },
    iconContainer: {
        marginBottom: SpacingH.s4,
    },
    title: {
        fontSize: FontSize.BIG,
        color: Colors.DARK,
        textAlign: 'center',
        marginBottom: SpacingH.s2,
    },
    subtitle: {
        fontSize: FontSize.NORMAL,
        color: Colors.MEDIUM,
        textAlign: 'center',
        lineHeight: FontSize.NORMAL * 1.6,
    },
    footer: {
        paddingHorizontal: SpacingH.s2,
        paddingBottom: SpacingH.s6,
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        marginBottom: SpacingH.s2,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
