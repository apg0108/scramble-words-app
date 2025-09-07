export interface ScrambleWordsState {
    errorCounter: number;
    guess: string;
    isGameOver: boolean;
    maxAllowErrors: number;
    maxSkips: number;
    points: number;
    realWord: string;
    scrambledWord: string;
    skipCounter: number;
    words: Array<string>;
}