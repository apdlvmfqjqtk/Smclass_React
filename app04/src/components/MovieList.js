import React from 'react';

const MovieList = ({uBtn,dBtn}) => {
  //삼항식. prop가 없을 경우 '수정' 이 출력
  const upBtn = uBtn?uBtn:"수정";
  const deBtn = dBtn?dBtn:"삭제";
  
  return(
    <>
      <div className="card">
        <h5 className="card-header">영화정보</h5>
        <div className="card-body"> 
          <h5 className="card-title">해리포터</h5>
          <p className="card-text">2020-01-01</p>
          <a href="/" className="btn btn-primary mt">{upBtn}</a>
          <a href="/" className="btn btn-primary">{deBtn}</a>
        </div>
      </div>
    </>
  );  
}

export default MovieList;