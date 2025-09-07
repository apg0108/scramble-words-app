import { useEffect, useReducer, useState } from 'react';
import { ScrambleWordsReducer } from './reducer/scrambleWordsReducer';
import confetti from 'canvas-confetti';
import { ActionButton, Guess, Header, Stats, EndWord } from './components/core';
import { Card, CardContent } from '@/components/ui';
import { ScrambleWord } from './components/core/ScrambleWord';
import { getInitialState } from './utils/utilsFunction';

export function ScrambleWordsApp() {
    const [numberWords] = useState<number>(3);
    const [state, dispatch] = useReducer(ScrambleWordsReducer, getInitialState(numberWords));
    const { words } = state;

    useEffect(() => {
        if (state.points > 0)
            confetti({
                particleCount: 100,
                spread: 120,
                origin: { y: 0.6 }
            });
    }, [state.points]);

    return (
        <>
            {
                words.length > 0 ? (
                    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
                        <div className="w-full max-w-md mx-auto">
                            <Header />
                            {/* Main Game Card */}
                            <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-xl">
                                <CardContent className="p-8">
                                    <ScrambleWord state={state} />
                                    <Guess state={state} dispatch={dispatch} />
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <Stats state={state} numberWords={numberWords} isPointerCounter />
                                        <Stats state={state} />
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        <ActionButton state={state} dispatch={dispatch} numberWords={numberWords} action='SKIP' text='Saltar' />
                                        <ActionButton state={state} dispatch={dispatch} numberWords={numberWords} action='CLUE' text='Pista' />
                                        <ActionButton state={state} dispatch={dispatch} numberWords={numberWords} action='PLAY_AGAIN' text='Jugar' />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                ) : <EndWord state={state} dispatch={dispatch} numberWords={numberWords} />
            }

        </>

    );
}