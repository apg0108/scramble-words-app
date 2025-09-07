import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ScrambleWordsApp } from './ScrambleWordsApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrambleWordsApp />
  </StrictMode>,
)
