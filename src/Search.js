import React, { useState, useContext, useEffect } from 'react'
import { SearchContext } from './Context'

export function ResultList(props) {
  const searchBloc = useContext(SearchContext)
  const [results, setResults] = useState([])

  useEffect(() => {
    searchBloc.results$.subscribe(setResults)
  }, [searchBloc])

  return (
    <div>
      {results.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  )
}

export function Search(props) {
  const searchBloc = useContext(SearchContext)
  const [query, setQuery] = useState('ri7nz')

  useEffect(() => {
    searchBloc.query.next(query)
  }, [searchBloc, query])

  return (
    <input
      type="text"
      name="Search"
      value={query}
      onChange={({ target }) => setQuery(target.value)}
    />
  )
}
