import { useState } from "react";

export const useLocalStorage = (key, value) => {
  const [user, setUser] = useState(() => {
    try {
      const user = window.localStorage.getItem(key);
      if (user) {
        return JSON.parse(user)
      } else {
        window.localStorage.setItem(key, JSON.stringify(value))
        return value;
      }
    } catch (error) {
      return value;
    }
  })

  const setLocalStorageUser = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setUser(value)
    } catch (error) {
      return value
    }
  }

  return [user, setLocalStorageUser]
}