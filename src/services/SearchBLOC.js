import { Observable, from, BehaviorSubject } from 'rxjs'
import { switchMap, withLatestFrom } from 'rxjs/operators'

class API {
  request(user) {
    const endpoint = `https://api.github.com/users/${user}/repos?sort=true`
    return fetch(endpoint)
      .then(res => ('json' in res ? res.json() : []))
      .then(resJson => resJson)
  }

  search(query) {
    return this.request(query)
  }
}

export default class SearchBLOC {
  // private property
  #results$ = new Observable()
  #preamble$ = new Observable()
  #query$ = new BehaviorSubject('')

  api = new API()
  constructor(api) {
    this.api = api ? api : this.api

    this.#results$ = this.#query$.pipe(
      switchMap(query => {
        return from(this.api.search(query))
      }),
    )

    this.#preamble$ = this.#results$.pipe(
      withLatestFrom(this.#query$, (_, q) =>
        q ? `Results for ${q}` : `All Results`,
      ),
    )
  }

  get results$() {
    return this.#results$
  }

  get preamble$() {
    return this.#preamble$
  }

  get query() {
    return this.#query$
  }

  dispose() {
    this.#query$ && this.#query$.complete()
  }
}
