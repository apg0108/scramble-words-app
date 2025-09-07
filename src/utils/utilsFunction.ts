import { initialize } from '@paunovic/random-words';
import type { ScrambleWordsState } from '@/interfaces';

// Esta función mezcla el arreglo para que siempre sea aleatorio
export function shuffleArray(array: Array<string>) {
    return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
export function scrambleWord(word: string = '') {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};

export function getWords(numberWords: number): Array<string> {
    const RANDOM = initialize({ countryCode: 'es' });
    const words = RANDOM.words(numberWords).map(word => word.toUpperCase());
    return words;
}

export function getInitialState(numberWords: number): ScrambleWordsState {
    const words = getWords(numberWords);
    return {
        words: words, realWord: words.at(0)!, scrambledWord: scrambleWord(words.at(0)),
        guess: '', points: 0, errorCounter: 0, skipCounter: 0, maxSkips: 3, maxAllowErrors: 3, isGameOver: false
    };
}