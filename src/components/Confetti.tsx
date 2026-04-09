/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { Colors } from '../utils/colors';

const CONFETTI_COLORS = [Colors.LIGHT, Colors.ACCENT, '#FFD700', Colors.MEDIUM, '#9B59B6'];
const NUM_PIECES = 20;

const ConfettiPiece: React.FC<{ delay: number; color: string }> = ({ delay, color }) => {
    const translateY = React.useRef(new Animated.Value(-10)).current;
    const translateX = React.useRef(new Animated.Value(0)).current;
    const opacity = React.useRef(new Animated.Value(1)).current;
    const left = React.useRef(Math.random() * 100).current;

    React.useEffect(() => {
        Animated.sequence([
            Animated.delay(delay),
            Animated.parallel([
                Animated.timing(translateY, { toValue: 120, duration: 1500, useNativeDriver: true }),
                Animated.timing(translateX, { toValue: (Math.random() - 0.5) * 80, duration: 1500, useNativeDriver: true }),
                Animated.timing(opacity, { toValue: 0, duration: 1500, useNativeDriver: true }),
            ]),
        ]).start();
    }, []);

    return (
        <Animated.View
            style={[
                styles.piece,
                {
                    left: `${left}%`,
                    backgroundColor: color,
                    transform: [{ translateY }, { translateX }],
                    opacity,
                },
            ]}
        />
    );
};

const Confetti: React.FC = () => {
    return (
        <View style={styles.container} pointerEvents="none">
            {Array.from({ length: NUM_PIECES }).map((_, i) => (
                <ConfettiPiece
                    key={i}
                    delay={Math.random() * 500}
                    color={CONFETTI_COLORS[i % CONFETTI_COLORS.length]}
                />
            ))}
        </View>
    );
};

export default Confetti;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 10,
        overflow: 'hidden',
    },
    piece: {
        position: 'absolute',
        top: 0,
        width: 8,
        height: 8,
        borderRadius: 4,
    },
});
