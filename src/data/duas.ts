/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import { Dua } from '../types';

export const duas: Dua[] = [
    // General
    {
        id: '1', text: 'بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ',
        transliteration: 'Bismillahir Rahmanir Raheem',
        meaning: 'In the name of Allah, the Most Gracious, the Most Merciful',
        ref: 'Quran 1:1', category: 'General',
    },
    {
        id: '2', text: 'سُبحَانَ اللّهِ وَ بِحَمْدِهِ',
        transliteration: 'SubhanAllahi wa bihamdihi',
        meaning: 'Glory be to Allah and praise Him',
        ref: '', category: 'General',
    },
    {
        id: '3', text: 'سُبحَانَ اللّهِ الْعَظِيمِ',
        transliteration: 'SubhanAllahil Azeem',
        meaning: 'Glory be to Allah, the Most Great',
        ref: '', category: 'General',
    },
    {
        id: '4', text: 'سُبْحَانَ ٱللَّٰهِ',
        transliteration: 'SubhanAllah',
        meaning: 'Glory be to Allah',
        ref: '', category: 'General',
    },
    {
        id: '5', text: 'ٱلْحَمْدُ لِلّٰهِ',
        transliteration: 'Alhamdulillah',
        meaning: 'All praise is due to Allah',
        ref: '', category: 'General',
    },
    {
        id: '6', text: 'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ',
        transliteration: 'La ilaha illAllah',
        meaning: 'There is no god but Allah',
        ref: '', category: 'General',
    },
    {
        id: '7', text: 'ٱللَّٰهُ أَكْبَرُ',
        transliteration: 'Allahu Akbar',
        meaning: 'Allah is the Greatest',
        ref: '', category: 'General',
    },
    {
        id: '9', text: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ ٱلْعَلِيِّ ٱلْعَظِيمِ',
        transliteration: 'La hawla wa la quwwata illa billahil Aliyyil Azeem',
        meaning: 'There is no power and no strength except with Allah, the Most High, the Most Great',
        ref: '', category: 'General',
    },
    {
        id: '11', text: 'لَّآ إِلَٰهَ إِلَّآ أَنتَ سُبْحَٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّٰلِمِينَ',
        transliteration: "La ilaha illa anta subhanaka inni kuntu minaz zalimeen",
        meaning: 'There is no god but You, glory be to You, indeed I have been among the wrongdoers',
        ref: 'Quran 21:87', category: 'General',
    },
    {
        id: '17', text: 'بِسْمِ اللَّهِ تَوَكَّلْـتُ عَلَى اللَّهِ، وَلاَ حَوْلَ وَلاَ قُـوَّةَ إِلاَّ بِاللَّهِ',
        transliteration: 'Bismillahi tawakkaltu alAllah, wa la hawla wa la quwwata illa billah',
        meaning: 'In the name of Allah, I place my trust in Allah, there is no power and no strength except with Allah',
        ref: '', category: 'General',
    },

    // Forgiveness
    {
        id: '8', text: 'أَسْتَغْفِرُ اللّٰهَ',
        transliteration: 'Astaghfirullah',
        meaning: 'I seek forgiveness from Allah',
        ref: '', category: 'Forgiveness',
    },
    {
        id: '10', text: 'اللّٰهُمَّ أَنْتَ رَبِّي، لَا إِلٰهَ إِلَّا أَنْتَ، خَلَقْتَنِيْ وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَىَّ وَأَبُوءُ لَكَ بِذَنْبِيْ، فَاغْفِرْ لِيْ، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوْبَ إِلَّاأَنْتَ',
        transliteration: 'Allahumma anta Rabbi, la ilaha illa anta, khalaqtani wa ana abduka...',
        meaning: 'O Allah, You are my Lord, there is no god but You. You created me and I am Your servant... (Sayyid al-Istighfar)',
        ref: 'Bukhari', category: 'Forgiveness',
    },
    {
        id: '20', text: 'رَبَّنَا ظَلَمْنَآ أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ ٱلْخَٰسِرِينَ',
        transliteration: "Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakoonanna minal khasireen",
        meaning: 'Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers',
        ref: 'Quran 7:23', category: 'Forgiveness',
    },
    {
        id: '21', text: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ',
        transliteration: "Rabbighfir li wa liwalidayya wa lil mu'mineena yawma yaqumul hisab",
        meaning: 'My Lord, forgive me and my parents and the believers the Day the account is established',
        ref: 'Quran 14:41', category: 'Forgiveness',
    },

    // Before sleeping
    {
        id: '12', text: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
        transliteration: 'Bismika Allahumma amutu wa ahya',
        meaning: 'In Your name, O Allah, I die and I live',
        ref: 'Bukhari', category: 'Before sleeping',
    },
    {
        id: '22', text: 'اللَّهُمَّ بِاسْمِكَ أَحْيَا وَبِاسْمِكَ أَمُوتُ',
        transliteration: 'Allahumma bismika ahya wa bismika amut',
        meaning: 'O Allah, in Your name I live and in Your name I die',
        ref: 'Bukhari', category: 'Before sleeping',
    },
    {
        id: '23', text: 'اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ',
        transliteration: 'Allahumma qini adhabaka yawma tab-athu ibadak',
        meaning: "O Allah, protect me from Your punishment on the Day You resurrect Your servants",
        ref: 'Abu Dawud', category: 'Before sleeping',
    },

    // Waking up
    {
        id: '13', text: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
        transliteration: 'Alhamdu lillahil ladhi ahyana ba da ma amatana wa ilayhin nushur',
        meaning: 'All praise is for Allah who gave us life after having taken it from us, and unto Him is the resurrection',
        ref: 'Bukhari', category: 'Waking up',
    },

    // Bad news
    {
        id: '14', text: 'إِنَّا ِلِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ',
        transliteration: 'Inna lillahi wa inna ilayhi rajioon',
        meaning: 'Indeed we belong to Allah, and indeed to Him we will return',
        ref: 'Quran 2:156', category: 'Bad news',
    },

    // Washroom
    {
        id: '15', text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
        transliteration: "Allahumma inni a'udhu bika minal khubuthi wal khaba'ith",
        meaning: 'O Allah, I seek refuge with You from evil and evil ones',
        ref: 'Bukhari', category: 'Washroom',
    },
    {
        id: '16', text: 'غُفْرَانَكَ الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنِّي الْأَذٰى وَعَافَانِي',
        transliteration: 'Ghufranaka. Alhamdu lillahil ladhi adhhaba annil adha wa afani',
        meaning: 'I ask You for forgiveness. All praise is due to Allah who removed harm from me and healed me',
        ref: 'Ibn Majah', category: 'Washroom',
    },

    // Masjid
    {
        id: '18', text: 'اَللَّهُـمَّ افْتَـحْ لِي أَبْوَابَ رَحْمَتـِكَ',
        transliteration: 'Allahummaf-tah li abwaba rahmatik',
        meaning: 'O Allah, open for me the doors of Your mercy',
        ref: 'Muslim', category: 'Masjid',
    },
    {
        id: '19', text: 'اَللّٰهُمَّ إنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
        transliteration: 'Allahumma inni as-aluka min fadlik',
        meaning: 'O Allah, I ask You of Your bounty',
        ref: 'Muslim', category: 'Masjid',
    },

    // Travel
    {
        id: '24', text: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ',
        transliteration: 'Subhanal-ladhi sakh-khara lana hadha wa ma kunna lahu muqrineen wa inna ila Rabbina lamunqaliboon',
        meaning: 'Glory to Him who has subjected this to us, and we could never have it. And indeed to our Lord we will return',
        ref: 'Quran 43:13-14', category: 'Travel',
    },
    {
        id: '25', text: 'اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَٰذَا الْبِرَّ وَالتَّقْوَىٰ',
        transliteration: "Allahumma inna nas'aluka fi safarina hadhal birra wat-taqwa",
        meaning: 'O Allah, we ask You in this journey for righteousness and piety',
        ref: 'Muslim', category: 'Travel',
    },
    {
        id: '26', text: 'اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ',
        transliteration: 'Allahumma hawwin alayna safarana hadha watwi anna bu-dahu',
        meaning: 'O Allah, make this journey easy for us and shorten its distance',
        ref: 'Muslim', category: 'Travel',
    },

    // Eating
    {
        id: '27', text: 'بِسْمِ اللَّهِ',
        transliteration: 'Bismillah',
        meaning: 'In the name of Allah',
        ref: 'Bukhari', category: 'Eating',
    },
    {
        id: '28', text: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَٰذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
        transliteration: "Alhamdu lillahil ladhi at'amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah",
        meaning: 'All praise is for Allah who fed me this and provided it for me without any might or power from myself',
        ref: 'Tirmidhi', category: 'Eating',
    },
    {
        id: '29', text: 'اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَأَطْعِمْنَا خَيْرًا مِنْهُ',
        transliteration: 'Allahumma barik lana fihi wa at-imna khayran minhu',
        meaning: 'O Allah, bless it for us and feed us something better than it',
        ref: 'Tirmidhi', category: 'Eating',
    },

    // Anxiety & Distress
    {
        id: '30', text: 'لَا إِلَٰهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَٰهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ',
        transliteration: 'La ilaha illAllahul Azeemul Haleem, la ilaha illAllahu Rabbul Arshil Azeem',
        meaning: 'There is no god but Allah, the Great, the Forbearing. There is no god but Allah, Lord of the Magnificent Throne',
        ref: 'Bukhari', category: 'Anxiety',
    },
    {
        id: '31', text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ',
        transliteration: "Allahumma inni a'udhu bika minal hammi wal hazan",
        meaning: 'O Allah, I seek refuge in You from worry and grief',
        ref: 'Bukhari', category: 'Anxiety',
    },
    {
        id: '32', text: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
        transliteration: 'HasbunAllahu wa ni-mal wakeel',
        meaning: 'Allah is sufficient for us, and He is the best Disposer of affairs',
        ref: 'Quran 3:173', category: 'Anxiety',
    },
    {
        id: '33', text: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ',
        transliteration: 'Ya Hayyu ya Qayyumu bi rahmatika astaghith',
        meaning: 'O Ever-Living, O Sustainer, in Your mercy I seek relief',
        ref: 'Tirmidhi', category: 'Anxiety',
    },

    // Parents
    {
        id: '34', text: 'رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
        transliteration: 'Rabbir-hamhuma kama rabbayani sagheera',
        meaning: 'My Lord, have mercy upon them as they brought me up when I was small',
        ref: 'Quran 17:24', category: 'Parents',
    },
    // Rain
    {
        id: '36', text: 'اللَّهُمَّ صَيِّبًا نَافِعًا',
        transliteration: 'Allahumma sayyiban nafi-an',
        meaning: 'O Allah, let it be a beneficial rain',
        ref: 'Bukhari', category: 'Rain',
    },
    {
        id: '37', text: 'مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ',
        transliteration: 'Mutirna bi fadlillahi wa rahmatihi',
        meaning: 'We have been given rain by the grace and mercy of Allah',
        ref: 'Bukhari', category: 'Rain',
    },

    // Morning & Evening
    {
        id: '38', text: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ',
        transliteration: 'Asbahna wa asbahal mulku lillahi wal hamdu lillah',
        meaning: 'We have reached the morning and at this very time the whole kingdom belongs to Allah. All praise is due to Allah',
        ref: 'Muslim', category: 'Morning',
    },
    {
        id: '39', text: 'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ',
        transliteration: 'Allahumma bika asbahna wa bika amsayna wa bika nahya wa bika namutu wa ilaykan nushur',
        meaning: 'O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the resurrection',
        ref: 'Tirmidhi', category: 'Morning',
    },
    {
        id: '40', text: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ',
        transliteration: 'Amsayna wa amsal mulku lillahi wal hamdu lillah',
        meaning: 'We have reached the evening and at this very time the whole kingdom belongs to Allah. All praise is due to Allah',
        ref: 'Muslim', category: 'Evening',
    },
    {
        id: '41', text: 'اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ',
        transliteration: 'Allahumma bika amsayna wa bika asbahna wa bika nahya wa bika namutu wa ilaykal maseer',
        meaning: 'O Allah, by You we enter the evening and by You we enter the morning, by You we live and by You we die, and to You is the final destination',
        ref: 'Tirmidhi', category: 'Evening',
    },

    // Protection
    {
        id: '42', text: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
        transliteration: 'Bismillahil ladhi la yadurru ma-asmihi shay-un fil ardi wa la fis-sama-i wa huwas sami-ul aleem',
        meaning: 'In the name of Allah, with whose name nothing in the earth or heaven can cause harm, and He is the All-Hearing, the All-Knowing',
        ref: 'Tirmidhi', category: 'Protection',
    },
    {
        id: '43', text: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
        transliteration: "A'udhu bi kalimatil-lahit-tammati min sharri ma khalaq",
        meaning: 'I seek refuge in the perfect words of Allah from the evil of what He has created',
        ref: 'Muslim', category: 'Protection',
    },
    {
        id: '44', text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا عَمِلْتُ وَمِنْ شَرِّ مَا لَمْ أَعْمَلْ',
        transliteration: "Allahumma inni a'udhu bika min sharri ma amiltu wa min sharri ma lam a-mal",
        meaning: "O Allah, I seek refuge in You from the evil of what I have done and from the evil of what I have not done",
        ref: 'Muslim', category: 'Protection',
    },

    // Knowledge
    {
        id: '45', text: 'رَبِّ زِدْنِي عِلْمًا',
        transliteration: 'Rabbi zidni ilma',
        meaning: 'My Lord, increase me in knowledge',
        ref: 'Quran 20:114', category: 'Knowledge',
    },
    {
        id: '46', text: 'اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي وَزِدْنِي عِلْمًا',
        transliteration: "Allahum-ma infa'ni bima 'allamtani wa 'allimni ma yanfa'uni wa zidni 'ilma",
        meaning: 'O Allah, benefit me with what You have taught me, teach me what will benefit me, and increase me in knowledge',
        ref: 'Tirmidhi', category: 'Knowledge',
    },

    // Guidance
    {
        id: '47', text: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        transliteration: 'Ihdinas siratal mustaqeem',
        meaning: 'Guide us to the straight path',
        ref: 'Quran 1:6', category: 'Guidance',
    },
    {
        id: '48', text: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',
        transliteration: 'Rabbana la tuzigh qulubana ba-da idh hadaytana wa hab lana min ladunka rahmah',
        meaning: 'Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy',
        ref: 'Quran 3:8', category: 'Guidance',
    },

    // Gratitude
    {
        id: '49', text: 'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',
        transliteration: "Rabbi awzi'ni an ashkura ni'matakal-lati an'amta alayya",
        meaning: 'My Lord, enable me to be grateful for Your favor which You have bestowed upon me',
        ref: 'Quran 27:19', category: 'Gratitude',
    },

    // Health
    {
        id: '50', text: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي اللَّهُمَّ عَافِنِي فِي سَمْعِي اللَّهُمَّ عَافِنِي فِي بَصَرِي',
        transliteration: "Allahumma 'afini fi badani, Allahumma 'afini fi sam'i, Allahumma 'afini fi basari",
        meaning: 'O Allah, grant me health in my body, O Allah, grant me health in my hearing, O Allah, grant me health in my sight',
        ref: 'Abu Dawud', category: 'Health',
    },
    {
        id: '51', text: 'أَذْهِبِ الْبَاسَ رَبَّ النَّاسِ وَاشْفِ أَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا يُغَادِرُ سَقَمًا',
        transliteration: "Adh-hibil ba'sa Rabban-nasi washfi antash-shafi la shifa'a illa shifa'uka shifa'an la yughadiru saqama",
        meaning: 'Remove the affliction, O Lord of mankind, and heal - You are the Healer. There is no healing but Your healing, a healing that leaves no disease behind',
        ref: 'Bukhari', category: 'Health',
    },

    // Clothing
    {
        id: '52', text: 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَٰذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
        transliteration: 'Alhamdu lillahil-ladhi kasani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah',
        meaning: 'All praise is for Allah who has clothed me with this and provided it for me, with no power or might from myself',
        ref: 'Abu Dawud', category: 'Clothing',
    },

    // Gathering
    {
        id: '53', text: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا أَنْتَ أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ',
        transliteration: 'SubhanakaAllahumma wa bihamdika, ashhadu an la ilaha illa anta, astaghfiruka wa atubu ilayk',
        meaning: 'Glory be to You O Allah, and praise be to You. I bear witness that there is no god but You. I seek Your forgiveness and repent to You',
        ref: 'Tirmidhi', category: 'Gathering',
    },
];

export const categoryList = [...new Set(duas.map(d => d.category))];

export const getDuaById = (id: string): Dua => {
    const dua = duas.find(d => d.id === id);
    if (!dua) throw new Error(`Dua with id "${id}" not found`);
    return dua;
};

export const getDuaOfTheDay = (): Dua => {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    return duas[seed % duas.length];
};
