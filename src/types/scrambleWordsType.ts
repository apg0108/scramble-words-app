export type ScrambleWordsAction = 
{ type: 'CHECK_WORD', payload: string } | { type: 'SKIP' } | {type : 'CLUE'} | { type: 'PLAY_AGAIN', payload: number } | { type: 'SET_GUESS', payload: string };