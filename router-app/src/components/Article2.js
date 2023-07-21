import React from 'react'
import { useParams } from 'react-router-dom'



const Article2 = () => {
    //url 파라미터 받아주기
    // id 값만 받아온 객체에서 받아오기
    const {id} = useParams();


  return (
    <div>
    <h1>article</h1>
    <div>게시글 {id}</div>
  </div>
  )
}

export default Article2;