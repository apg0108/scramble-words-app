import type { ActionDispatch } from 'react';
import { SkipForward, Play, Search } from 'lucide-react';
import { Button } from '@/components/ui';
import type { ScrambleWordsState } from '@/interfaces';
import type { ButtonActionsType, ScrambleWordsAction } from '@/types';

interface Props {
    state: ScrambleWordsState;
    dispatch: ActionDispatch<[action: ScrambleWordsAction]>;
    action: ButtonActionsType;
    numberWords: number;
    text: string;
}
export function ActionButton({ state, dispatch, action, numberWords, text }: Props) {
    const { isGameOver, skipCounter, maxSkips, clueCounter, maxClues } = state;

    function isDisable(): boolean {
        switch (action) {
            case 'SKIP':
                return isGameOver || skipCounter >= maxSkips;
            case 'CLUE':
                return isGameOver || clueCounter >= maxClues;
            default:
                return false;
        }
    }

    return (
        <>
            <Button
                onClick={() => dispatch(action === 'PLAY_AGAIN' ? { type: action, payload: numberWords } : { type: action })}
                variant="outline"
                className={`border-2 transition-colors flex items-center justify-center gap-2 cursor-pointer ${action === 'SKIP' || action === 'CLUE'
                    ? 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                    : 'border-indigo-300 hover:border-indigo-400 hover:bg-indigo-50 text-indigo-600'}`}
                disabled={isDisable()}>
                {
                    action === 'SKIP' &&
                    (
                        <>
                            <SkipForward className="w-4 h-4" />
                            {text} ({skipCounter} / {maxSkips})
                        </>
                    )

                }

                {
                    action === 'PLAY_AGAIN' &&
                    (
                        <>
                            <Play className="w-4 h-4" />
                            {text}
                        </>
                    )
                }

                {
                    action === 'CLUE' &&
                    (
                        <>
                            <Search className="w-4 h-4" />
                            {text} ({clueCounter} / {maxClues})
                        </>
                    )
                }
            </Button>
        </>
    )
}