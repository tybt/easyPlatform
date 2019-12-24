import pathToRegexp from 'path-to-regexp'

export function pathMatchRegexp(regexp, pathname) {
  return pathToRegexp(regexp).exec(pathname)
}

