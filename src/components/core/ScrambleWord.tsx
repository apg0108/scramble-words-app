import type { ScrambleWordsState } from "@/interfaces"
import { getWordClue } from "@/utils/utilsFunction";

interface Props {
    state: ScrambleWordsState;
}

export function ScrambleWord({ state }: Props) {
    const { realWord, isGameOver, scrambledWord, lettersClue } = state;
    return (
        <>
            {/* Scrambled Word Display */}
            <div className="mb-8">
                <h2 className="text-center text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide flex items-center justify-center gap-2">
                    Palabra Desordenada
                    {isGameOver && (
                        <span className="text-red-500 text-xl"> {realWord}</span>
                    )}
                </h2>

                <div className="flex justify-center gap-2 mb-6">
                    {scrambledWord.split('').map((letter, index) => (
                        <div
                            key={index}
                            className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg transform hover:scale-105 transition-transform duration-200"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                animation: 'fadeInUp 0.6s ease-out forwards',
                            }}
                        >
                            {letter}
                        </div>
                    ))}
                </div>
                {
                    lettersClue.size > 0 && (
                        <div className="flex justify-center gap-2 mb-6">
                            {getWordClue(state.lettersClue, state.realWord.length).split('').map((letter, index) => (
                                <div
                                    key={index}
                                    className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg transform hover:scale-105 transition-transform duration-200"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                        animation: 'fadeInUp 0.6s ease-out forwards',
                                    }}
                                >
                                    {letter}
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </>
    )
}