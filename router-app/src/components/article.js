import React from 'react'
import { NavLink,Outlet} from 'react-router-dom';

const ArticleItem = (id) => {
    // style을 변수로 정의하고 inline style로 지정
    const activedStyle = {
        color:'green',
        fontSize:21
    };

    return(
        <li>
            <NavLink to={`/articles/${id}`}
            style={(isActive)=>(isActive ? activedStyle:undefined)}>
                게시글{id}
            </NavLink>
        </li>
    )
}

const article = () => {
  return (
    <>
    <div>article</div>
    <div>
          {/* Outlet: 중첩된 Route를 표출해주는 컴포넌트 */}
          <Outlet></Outlet>
    <ArticleItem id={1}></ArticleItem>
    <ArticleItem id={2}></ArticleItem>
    <ArticleItem id={3}></ArticleItem>
    </div>
    </>
  )
}

export default article