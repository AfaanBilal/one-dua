/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import { StyleSheet, View } from 'react-native';
import { Colors } from '../utils/colors';
import { SpacingH } from '../utils/size';
import { FontSize } from '../utils/size';
import TitleText from '../components/text/TitleText';
import AltText from './text/AltText';

type ScreenTitleProps = {
    title: string;
};

const ScreenTitle: React.FC<ScreenTitleProps> = ({ title }) => {
    return (
        <View style={styles.container}>
            <TitleText style={styles.appName}>OneDua</TitleText>
            <AltText style={styles.title}>{title}</AltText>
        </View>
    );
}

export default ScreenTitle;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        paddingHorizontal: SpacingH.s2,
        marginBottom: SpacingH.s1
    },
    appName: {
        fontSize: FontSize.BIG,
        color: Colors.DARK,
        textAlign: 'center'
    },
    title: {
        fontSize: FontSize.MEDIUM,
        color: Colors.DARK,
        textAlign: 'center',
    },
});
