import { atom, AtomEffect } from 'recoil'

const localStorageEffect =
  (key: string): AtomEffect<boolean> =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue))
    })
  }

export const isDarkModeState = atom({
  key: 'isDarkModeState',
  default: false,
  effects: [localStorageEffect('isDarkMode')],
})
