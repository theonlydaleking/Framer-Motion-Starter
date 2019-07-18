import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Refresh = () => {
  return
}

const ScaleContainer = styled.div`
  width: 200px;
  height: 200px;
  background: linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%);
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;

  & div {
    background: white;
    border-radius: 30px;
    width: 100px;
    height: 100px;
  }
`

export const ScaleExample = () => {
  let [count, setCount] = React.useState(0)
  return (
    <ScaleContainer>
      <motion.div
        animate={{ scale: [1.5, 1.8, 1.5] }}
        key={count}
        onClick={() => {
          setCount(count + 1)
        }}
      />
    </ScaleContainer>
  )
}
