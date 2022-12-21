import React from 'react'
import FirstGrid from './FirstGrid'
import LastGrid from './LastGrid'
import SecondGrid from './SecondGrid'
import { Wrapper } from './style'
import ThirdGrid from './ThirdGrid'

const Top = () => {
  return (
    <Wrapper>
        <FirstGrid/>
        <SecondGrid/>
        <ThirdGrid/>
        <LastGrid/>
    </Wrapper>
  )
}

export default Top