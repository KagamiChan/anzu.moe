if (typeof localStorage === 'undefined' || localStorage === null) {
  global.localStorage = {
    getItem: () => {},
  }
}

export { wrapRootElement } from './gatsby-browser'
