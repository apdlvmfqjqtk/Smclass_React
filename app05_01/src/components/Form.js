import React, { useState } from "react";

const Form = ({addMovie}) => {

  const [count,setCount] = useState(4);
  const [no,setNo] = useState();
  const [title,setTitle] = useState('');
  const [date,setDate] = useState('');


  const saveBtn = () => {
    alert("영화정보를 저장합니다.");
    console.log("번호 : "+ count);
    console.log("영화제목 : "+ title);
    console.log("날짜 : "+ date);
    
    addMovie({no:count,title:title,date:date});
    resetDate();
    setCount(count+1)
  }

  //데이터 삭제
  const resetDate =() =>{
    setTitle("");
    setDate("");
  }


  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">영화 제목</label>
          <input type="text" value={title} onChange={(e) =>e.target.value}
          className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">날짜</label>
          <input type="text" value={date} onChange={(e) =>e.target.value}
          className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="button" onClick={saveBtn} className="btn btn-primary">Submit</button>
      </form>

    </>
  );
}

export default Form;