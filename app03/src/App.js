import React,{useEffect, useState} from 'react';
import './App.css';
// import 사용할 이름 from '위치점';
import Form from './components/Form';

function App() {


  const [count,setCount] = useState(0);
  const [count2,setCount2] = useState(0);

  // 화면이 리로드되면 실행되는 함수
  // useEffet : 최초 데이터를 가져와서 화면에 출력할때
  // 특정변수가 변경될 때 명령어를 실행해야 할 때 사용
  useEffect(
    () =>{
      console.log("useState변수 상관없이 실행");
    }
  );
  useEffect(
    () =>{
      console.log("useEffect count : " + count);
    },[count]
  );
  useEffect(
    () =>{
      console.log("useEffect count2 : " + count2);
    },[count2]
  );
  useEffect(
    () =>{
      console.log("처음 한번만 실행");
    },[]
  );

  const countBtn = () => {
    setCount(count+1);
  }
  const countBtn2 = () => {
    setCount2(count2+1);
  }

  return (
    <div className="main">
      <h2>게시판</h2>
      <div className="idTxt">카운트 : {count} </div>
      <button onClick={countBtn}>카운트 증가</button>
      <br />
      <div className="idTxt">카운트 : {count2} </div>
      <button onClick={countBtn2}>카운트 증가</button>

      {/* 함수는 중괄호, 컴퍼넌트는 태그로 선언 */}
      <Form/>


    </div>
  );
}

export default App;
