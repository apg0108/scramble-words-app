import type { ScrambleWordsState } from "@/interfaces"

interface Props {
    state: ScrambleWordsState;
    numberWords?: number;
    isPointerCounter?: boolean;
}
export function Stats({ state, numberWords, isPointerCounter = false }: Props) {
    const { points, errorCounter, maxAllowErrors } = state;

    return (
        <>
            {/* Stats */}
            {isPointerCounter && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 text-center border border-green-200">
                    <div className="text-2xl font-bold text-green-600">
                        {points}/{numberWords}
                    </div>
                    <div className="text-sm text-green-700 font-medium">Puntos</div>
                </div>
            )
            }
            {
                !isPointerCounter && (
                    <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-4 text-center border border-red-200">
                        <div className="text-2xl font-bold text-red-600">
                            {errorCounter}/{maxAllowErrors}
                        </div>
                        <div className="text-sm text-red-700 font-medium">Errores</div>
                    </div>
                )
            }
        </>
    )
}