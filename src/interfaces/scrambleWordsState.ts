export interface ScrambleWordsState {
    clueCounter: number;
    errorCounter: number;
    guess: string;
    isGameOver: boolean;
    maxAllowErrors: number;
    maxClues: number;
    maxSkips: number;
    points: number;
    realWord: string;
    scrambledWord: string;
    skipCounter: number;
    words: Array<string>;
    lettersClue: Map<string, number>;
}