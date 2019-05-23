// REACT.CONTEXT
import { createContext } from 'react'
import SearchBLOC from './services/SearchBLOC'
export const SearchContext = createContext(new SearchBLOC())
