import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md';
import '../scss/TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo,removeTodos,changeChecked}) => {

  // todo에 text 값과 checked 값만 따로 분리해서 가져올수있다.
  // 비구조 할당으로 props의 내용 분리
const {id,text,checked} = todo;



  return (
    <div className='TodoListItem'>
      {/* 'checkbox 을 가져가는데 check가 클릭되었을떄 
      classnames 라이브러리를 이용한 조건부 스타일 적용.*/}
      {/* checked  클래스 로 정의된다. */}
        <div className={cn('checkbox',{checked})} onClick={()=> changeChecked(id)}>
            {
              checked ? <MdCheckBox></MdCheckBox> : <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
              }
            <div className='text'>{text}</div>
        </div>
        {/* 매개변수가 있는 프록스를 호출할때는 항상 함수형으로 */}
        <div className='remove' onClick={() => removeTodos(id)}>
            <MdRemoveCircleOutline></MdRemoveCircleOutline>
        </div>
    </div>
  );
};

export default TodoListItem;