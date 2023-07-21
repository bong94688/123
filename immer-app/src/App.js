//중괄호 없이 export 되는 애들은 default 은 {} 임포트를 해줘야한다.!
import React, {useState, useCallback, useRef} from 'react';
//불변성을 유지하기 위한 produce 메소드 임포트
import { produce } from 'immer';
function App() {
  //useRef를 DOM이 아닌 javascript에서도 유일한 값으로 사용할 수 있다.
 const nextId = useRef(1);

  const [form, setForm] = useState({username: "", password: ""});
  const [data, setData] = useState({
    array: [],
    uValue: null
  });

  //input의 value가 변경됐을 때 실행될 메소드
  const inputValChange = useCallback((e) => {
    //비구조할당으로 e.target(이벤트가 발생한 DOM 태그)의 속성값 받기
    //name값은 username이나 password
    //value는 input의 value
    const {name, value} = e.target;

    // console.log("e.target===========> " + e.target);

    // console.log("e.target.name=======> " + name);
    // console.log("e.target.value======> " + value);

    setForm(
    //produce 메소드 호출
    //매개변수로는 현재 form의 값이 들어간다.
    //화살표 함수를 넘겨주는데 화살표 함수의 매개변수로는 form의 현재값이 들어간다.
      //setForm이 될때 draft 값이들어가고 
    produce((draft) => {

      draft[name] = value;
    })
    );
    /*form => {
      username: "",
      password: 입력한 값
    }*/
  }, [form]);

  // useEffect(() => {
  //   console.log(form);
  // }, [form]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    const info = {
      id: nextId.current,
      username: form.username,
      password: form.password
    }

    setData(
     produce((draft)=>{
      draft.array.push(info);
     })
    );

    setForm({
      username: "",
      password: ""
    });
    // setnextId += 1 ;
    nextId.current += 1;
  }, [data, form.username, form.password]);

  const deleteUserInfo = useCallback((id) => {
    console.log(id);
    setData({
    
      ...data,
      //array의 filter 메소드 사용해서 삭제 기능 만들기
      array: data.array.filter(info => info.id !== id
        // setData(info.filter((id)=>{
        //   ...data, 
        // }
        // data.array.id !==  info.id        
      )
    });
  }, [data]);

  return (
    <form onSubmit={handleSubmit}>
      <input name="username"
             placeholder="id"
             value={form.username}
             onChange={inputValChange}></input>
      <input name="password"
             placeholder="pw"
             value={form.password}
             onChange={inputValChange}></input>
      <button type="submit">등록</button>
      <ul>
        {/*data에 추가되는 username과 password li 태그로 출력, array의 map메소드 사용해서 */}
        {data.array && data.array.map((info) => (
          <li key={info.id} onClick={() => deleteUserInfo(info.id)}>
            username: {info.username}, password: {info.password}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default App;
