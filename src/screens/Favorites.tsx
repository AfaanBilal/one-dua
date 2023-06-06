/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Size, SpacingH } from '../utils/size';
import ScreenTitle from '../components/ScreenTitle';
import { duas } from './Home';
import BigCard from '../components/cards/BigCard';

const Favorites: React.FC = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScreenTitle title='Favorites' />

            <ScrollView>
                <View style={styles.cardContainer}>
                    {duas
                        .map((d, i) => <BigCard key={i} dua={d} />)
                    }
                </View>
            </ScrollView>
        </View>
    );
}

export default Favorites;

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
