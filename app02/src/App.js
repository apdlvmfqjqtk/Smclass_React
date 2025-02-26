import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

function App() {

  let name = '홍길동';
  const[ename, setEname] = useState('유관순');
  const[a, setA] = useState('');
  const[id, setId] = useState('');
  const[pw, setPw] = useState('');
  const btn = ()=>{
    alert("함수버튼 클릭");
    name='이순신';
    //document.getElementById("d01").innerText=name;
    console.log(name);

    setEname('신사임당');

  }
  const loginBtn = ()=>{
    alert("로그인버튼 클릭");
  }
  const pwBtn=(e)=>{
    console.log("pw inputbox에 글 입력 ")
    if(e.keyCede==13){
      loginBtn();
    }
  }
  return (
    <div className='main'>
      <h2>게시판</h2>
      <div id="d01">{name}</div>
      <div>{ename}</div>
      <br/>
        {/*자바 스크립트 : onclick, 리액트 : onClick*/}       

      <input type='text' name='id' className='id' onChange={(event)=>setId(event.target.value)} value={id} placeholder='아이디를 입력하세요'></input>
      <br/>
      <input type='text' name='pw' className='pw' onChange={(event)=>setPw(event.target.value)}  onKeyUp={pwBtn} placeholder='비밀번호를 입력하세요'></input>
      <br/>
      <button onClick={loginBtn}>로그인</button> 
      <br/>
      <button onClick={btn}>변경</button>

      {/*if문 사용 불가; 삼항식 사용*/} 
      {/*<div>{name=='홍길동'?(<h3>홍길동입니다</h3>) :(<h3>홍길동이 아닙니다.</h3>) }</div>*/}
    </div>
  );
}

export default App;
