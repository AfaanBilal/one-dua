/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

export type WithChildren = {
    children: React.ReactNode;
};

export type Dua = {
    id: string;
    text: string;
    transliteration?: string;
    meaning?: string;
    ref: string;
    category: string;
};

export type Checklist = {
    id: string;
    title: string;
    duas: { dua: Dua, rep: number }[];
};
