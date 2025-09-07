import type { ActionDispatch } from 'react';
import { SkipForward, Play } from 'lucide-react';
import { Button } from '@/components/ui';
import type { ScrambleWordsState } from '@/interfaces';
import type { ButtonActionsType, ScrambleWordsAction } from '@/types';

interface Props {
    state: ScrambleWordsState;
    dispatch: ActionDispatch<[action: ScrambleWordsAction]>;
    actionButton: ButtonActionsType;
}
export function ActionButton({ state, dispatch, actionButton }: Props) {
    const { isGameOver, skipCounter, maxSkips } = state;
    return (
        <>
            <Button
                onClick={() => dispatch({ type: actionButton })}
                variant="outline"
                className={`border-2 transition-colors flex items-center justify-center gap-2 cursor-pointer ${actionButton === 'SKIP'
                    ? 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                    : 'border-indigo-300 hover:border-indigo-400 hover:bg-indigo-50 text-indigo-600'}`}
                disabled={actionButton === 'SKIP' && (isGameOver || skipCounter >= maxSkips)}>
                {actionButton === 'SKIP' && (
                    <>
                        <SkipForward className="w-4 h-4" />
                        Saltar ({skipCounter} / {maxSkips})
                    </>
                )}
                {
                    actionButton === 'PLAY_AGAIN' && (
                        <>
                            <Play className="w-4 h-4" />
                            Jugar de nuevo
                        </>
                    )
                }
            </Button>
        </>
    )
}