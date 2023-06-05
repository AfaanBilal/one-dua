/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import { PixelRatio, Platform } from 'react-native';
import Constants from 'expo-constants';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

export const sV = (pt: number) => {
    return PixelRatio.roundToNearestPixel(pt * PixelRatio.get());
};

export const wp = widthPercentageToDP;
export const hp = heightPercentageToDP;

export const isTabPortrait = wp('100%') > 760 && wp('100%') < 960;
const divFactorFS = isTabPortrait ? 0.75 : 1;

const fontScale = PixelRatio.getFontScale() / divFactorFS;

export const FontSize = {
    BIGGEST: hp('6.5%') / fontScale,
    BIGGER: hp('5%') / fontScale,
    BIG: hp('4%') / fontScale,
    MEDIUM: hp('3%') / fontScale,
    NORMED: hp('2.5%') / fontScale,
    NORMAL: hp('1.9%') / fontScale,
    SMALL: hp('1.7%') / fontScale,
    SMALLER: hp('1.5%') / fontScale,
    SMALLEST: hp('1.3%') / fontScale,
};

const hMulFactor = isTabPortrait ? 1 : 1;
const wMulFactor = isTabPortrait ? .5 : 1;

export const SpacingW = {
    s0: wp('0.5%') * wMulFactor,
    s1: wp('1%') * wMulFactor,
    s2: wp('2%') * wMulFactor,
    s3: wp('3%') * wMulFactor,
    s4: wp('4%') * wMulFactor,
    s5: wp('5%') * wMulFactor,
    s6: wp('6%') * wMulFactor,
};

export const SpacingH = {
    s0: hp('0.5%') * hMulFactor,
    s1: hp('1%') * hMulFactor,
    s2: hp('2%') * hMulFactor,
    s3: hp('3%') * hMulFactor,
    s4: hp('4%') * hMulFactor,
    s5: hp('5%') * hMulFactor,
    s6: hp('6%') * hMulFactor,
};

export const Size = {
    w100: wp('100%') * wMulFactor,
    w90: wp('90%') * wMulFactor,
    w80: wp('80%') * wMulFactor,
    w75: wp('75%') * wMulFactor,
    w70: wp('70%') * wMulFactor,
    w60: wp('60%') * wMulFactor,
    w50: wp('50%') * wMulFactor,
    w40: wp('40%') * wMulFactor,
    w30: wp('30%') * wMulFactor,
    w25: wp('25%') * wMulFactor,
    w20: wp('20%') * wMulFactor,
    w15: wp('15%') * wMulFactor,
    w10: wp('10%') * wMulFactor,
    w5: wp('5%') * wMulFactor,

    h100: hp('100%') * hMulFactor,
    h90: hp('90%') * hMulFactor,
    h80: hp('80%') * hMulFactor,
    h75: hp('75%') * hMulFactor,
    h70: hp('70%') * hMulFactor,
    h60: hp('60%') * hMulFactor,
    h50: hp('50%') * hMulFactor,
    h40: hp('40%') * hMulFactor,
    h30: hp('30%') * hMulFactor,
    h25: hp('25%') * hMulFactor,
    h20: hp('20%') * hMulFactor,
    h15: hp('15%') * hMulFactor,
    h10: hp('10%') * hMulFactor,
    h5: hp('5%') * hMulFactor,

    adjustedStatusBarHeight: Platform.OS == 'ios' ? Constants.statusBarHeight : 0,
};

export const keyboardAvoidOffset = Size.adjustedStatusBarHeight + (Platform.OS == 'ios' ? hp('12%') : .1 * Size.adjustedStatusBarHeight);
export const isWeb = Platform.OS == 'web';
export const isIOS = Platform.OS == 'ios';
