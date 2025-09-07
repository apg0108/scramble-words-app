import type { ActionDispatch } from "react";
import { Button } from '@/components/ui';
import type { ScrambleWordsState } from "@/interfaces"
import type { ScrambleWordsAction } from "@/types";

interface Props {
    state : ScrambleWordsState;
    dispatch : ActionDispatch<[action : ScrambleWordsAction]>;
    numberWords : number;
}

export function Winner({state, dispatch, numberWords} : Props) {
    const {points, errorCounter, skipCounter} = state;
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="w-full max-w-md mx-auto">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                        Palabras desordenadas
                    </h1>
                    <p className="text-gray-600">No hay palabras para jugar</p>
                    <br />
                    <div>Puntaje: {points}</div>
                    <br />
                    <div>Errores: {errorCounter}</div>
                    <br />
                    <div>Saltos: {skipCounter}</div>
                    <br />
                    <Button className='cursor-pointer' onClick={() => dispatch({ type: 'PLAY_AGAIN', payload: numberWords })}>Jugar de nuevo</Button>
                </div>
            </div>
        </>
    )
}