import React, { useCallback, useState,useRef,useEffect } from 'react';
function App() {
  //useRef를 DOM이 아닌 javascript에서도 유일한 값으로 사용할 수 있다.
  const nextId = useRef(1)
  const [form,setForm] = useState({username:"",password:""});
  const [data,setData] = useState({
    Array: [],
    uValue: null
  });

  const inputValChange = useCallback((e) => {
    //비구조항당으로 e.target(이벤트가 발생한 DOM태그)의 속성값 받기
    // name값은 username이나 password
    // value는 inputdml value
    const {name,value} = e.target;
    
    // console.log("e.targer=>"+e.target);
    // console.log("e.target.name=>"+ e.target.name);
    // console.log("e.target.name=>"+ e.target.value);

    setForm({
      // 원래있던 form의 값을 그대로 쓴다.
      // username:"",password:""
      ...form,
      // username:"",
      // password: ""
      [name]:value
      //password input의 값을 입력했다고 가정하면
      //username:""
      //password:입력한 값
    },[form]);
    // {
//  username:"",password:입력한 값
    // }
  });

  // useEffect(()=>{
  //   console.log("form======>"+form);

  // },[form])
  const handleSubmit = useCallback((e)=>{
    // e.preventDefault();
    e.preventDefault();
    const info = {
      username: form.username,
      password: form.password
    }

    setData({
      ...data,
      array: data.Array.concat(info)
    });
    setForm({
      username:"",
      password:""
    });

    nextId += 1;
  },[data,form.username,form.password]);
  const deleteUseInfo = useCallback((id) =>{

  },[data]);

  return (
      <form onSubmit={handleSubmit}>
        <input name="username"
              placeholder="id"
              value={form.username}
              onChange={inputValChange}
              ></input>
           <input name="password"
              placeholder="id"
              value={form.password}
              onChange={inputValChange}
              ></input> 
              <button type="submit">등록</button> 
              <ul>
            {data.Array && data.Array.map((number, index) => {
                return <li key={index}>{number.username}{number.password}</li>
            })}     
                </ul> 
      </form>
  );
}

export default App;
