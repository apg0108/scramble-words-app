import { getInitialState, randomExcluding, scrambleWord, shuffleArray } from "@/utils/utilsFunction";
import type { ScrambleWordsState } from '@/interfaces';
import type { ScrambleWordsAction } from '@/types';

export function ScrambleWordsReducer(state: ScrambleWordsState, action: ScrambleWordsAction): ScrambleWordsState {

    switch (action.type) {
        case 'CHECK_WORD': {
            if (state.guess === state.realWord) {
                const words = shuffleArray(state.words.filter(word => word !== action.payload));
                if (words.length === 0) return {...state , points: state.points + 1, words: []};  
                return {
                    ...state, words: words, realWord: words.at(0)!, scrambledWord: scrambleWord(words.at(0)!),
                    guess: '', points: state.points + 1, lettersClue: new Map()
                };
            }
            if (state.errorCounter + 1 >= state.maxAllowErrors) return { ...state, errorCounter: state.errorCounter + 1, isGameOver: true };
            return {
                ...state, guess: '', errorCounter: state.errorCounter + 1
            };
        }
        case "SKIP": {
            const words = shuffleArray(state.words.filter(word => word !== state.realWord));         
            if (words.length === 0) return {...state , skipCounter : state.skipCounter + 1, words: []};
            if (state.skipCounter + 1 >= state.maxSkips) return { ...state, skipCounter: state.skipCounter + 1, isGameOver: true };
            return {
                ...state, words: words, realWord: words.at(0)!, scrambledWord: scrambleWord(words.at(0)),
                guess: '', skipCounter: state.skipCounter + 1, lettersClue: new Map()
            };
        }
        case "CLUE": {
            if (state.clueCounter >= state.maxClues) return { ...state, clueCounter: state.clueCounter + 1 };
            const randomNumber = randomExcluding(state.realWord.length, Array.from(state.lettersClue.values()));
            const letter = state.realWord.at(randomNumber)!;
            const position = state.realWord.indexOf(letter);
            const newMap = new Map(state.lettersClue).set(letter, position);
            return {
                ...state, clueCounter: state.clueCounter + 1, lettersClue: newMap
            };
        }
        case "PLAY_AGAIN":
            return getInitialState(action.payload);
        case "SET_GUESS":
            return { ...state, guess: action.payload.toUpperCase() };
        default:
            return state;
    }

}