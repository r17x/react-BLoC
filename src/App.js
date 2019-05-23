import React, { useContext, useEffect } from 'react'
import './App.css'
import { SearchContext } from './Context'
import { Search, ResultList } from './Search'

export default function App() {
  const searchBloc = useContext(SearchContext)

  useEffect(() => searchBloc.dispose, [searchBloc])

  return (
    <div className="App">
      <header className="App-header" />
      <Search />
      <ResultList />
    </div>
  )
}
