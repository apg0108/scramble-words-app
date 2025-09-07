import { type ActionDispatch, type FormEvent } from 'react';
import { Button, Input } from '@/components/ui';
import type { ScrambleWordsAction } from '@/types/scrambleWordsType';
import type { ScrambleWordsState } from '@/interfaces';

interface Props {
  state : ScrambleWordsState;
  dispatch: ActionDispatch<[action: ScrambleWordsAction]>;  
}

export function Guess({state, dispatch} : Props) {

  const {guess, scrambledWord, isGameOver} = state;

  function handleGuessSubmit(e: FormEvent) {
    // Previene el refresh de la página
    e.preventDefault();
    dispatch({ type: 'CHECK_WORD', payload: guess });

  };

  return (
    <>
      {/* Guess Input */}
      <form onSubmit={handleGuessSubmit} className="mb-6">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="guess"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Adivina la palabra
            </label>
            <Input
              id="guess"
              type="text"
              value={guess}
              onChange={(e) => dispatch({ type: 'SET_GUESS', payload: e.target.value })}
              placeholder="Ingresa tu palabra..."
              className="text-center text-lg font-semibold h-12 border-2 border-indigo-200 focus:border-indigo-500 transition-colors"
              maxLength={scrambledWord.length}
              disabled={isGameOver}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700
                                    text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200
                                    cursor-pointer"
            disabled={!guess.trim() || isGameOver} onClick={handleGuessSubmit}
          >
            Enviar Adivinanza
          </Button>
        </div>
      </form>
    </>
  )
}