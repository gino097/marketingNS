import React, { useEffect, useState } from 'react'

function UseDarkMode() {
  const [theme, setTheme] = useState('light')
  const colorTheme = theme === 'light' ? 'dark' : 'light'

  useEffect (() => {
    const root = window.document.documentElement;
    root.classList.add(theme);
    root.classList.remove(colorTheme);
  }, [setTheme, colorTheme]);
  return [setTheme, colorTheme]
}

export default UseDarkMode