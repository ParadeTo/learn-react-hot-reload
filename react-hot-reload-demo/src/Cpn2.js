import React from 'react'

import {useState} from 'react'

export function Cpn2() {
  const [count, setCount] = useState(0)
  return (
    <button
      onClick={() => {
        setCount((p) => p + 1)
      }}>
      Click Cpn23 {count}
    </button>
  )
}
