import React, { useEffect } from 'react'
import Filter from './Filter'
import Katas from './Katas'
import {Wrapper} from './style'
import { useRouter } from "next/router";
import { removeEmpty, isEmptyObject } from '../../utils/helpers';

const  Exercises= () => {
  const router = useRouter()
  const {pathname,  query} = router
  const [data, setData] = React.useState({
    difficulty: '',
    tags:''
   })


   useEffect(() => {
    if(!isEmptyObject(data)){
      router.push({
        pathname,
        query: {
          ...removeEmpty(data),
          ...query
        }
      })
    }
   },[data])

  return (
    <Wrapper>
        <Katas data={data}/>
        <Filter data={data} setData={setData}/>
    </Wrapper>
  )
}

export default Exercises