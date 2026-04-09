/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { Colors } from '../../utils/colors';

type HighlightTextProps = {
    text: string;
    highlight?: string;
    style?: StyleProp<TextStyle>;
};

const HighlightText: React.FC<HighlightTextProps> = ({ text, highlight, style }) => {
    if (!highlight || !highlight.trim()) {
        return <Text style={style}>{text}</Text>;
    }

    const lowerText = text.toLowerCase();
    const lowerHighlight = highlight.toLowerCase();
    const parts: { text: string; match: boolean }[] = [];
    let lastIndex = 0;

    let index = lowerText.indexOf(lowerHighlight);
    while (index !== -1) {
        if (index > lastIndex) {
            parts.push({ text: text.slice(lastIndex, index), match: false });
        }
        parts.push({ text: text.slice(index, index + highlight.length), match: true });
        lastIndex = index + highlight.length;
        index = lowerText.indexOf(lowerHighlight, lastIndex);
    }

    if (lastIndex < text.length) {
        parts.push({ text: text.slice(lastIndex), match: false });
    }

    if (parts.length === 0) {
        return <Text style={style}>{text}</Text>;
    }

    return (
        <Text style={style}>
            {parts.map((part, i) =>
                part.match ? (
                    <Text key={i} style={{ backgroundColor: Colors.LIGHT + '40', fontWeight: 'bold' }}>{part.text}</Text>
                ) : (
                    <Text key={i}>{part.text}</Text>
                )
            )}
        </Text>
    );
};

export default HighlightText;
