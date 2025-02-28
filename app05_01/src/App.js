import React,{useState} from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Form from './components/Form';
function App() {
  //json데이터, 배열객체, 일반변수는 새로고침을 해야 화면에 적용이 됨.
  // useState변수는 자동으로 화면에 적용
  // useEffect 사용해서 db에서 데이터를 가져와서 movies에 저장ㄴ
  const [movies,setMovies] = useState(
    [
      {no:1,title:"해리포터 1",date:"2020-01-01"},
      {no:2,title:"해리포터 2",date:"2021-01-01"},
      {no:3,title:"해리포터 3",date:"2022-01-01"},
    ]
  );

  // 데이터 추가 (insert - post 방식)
  const addMovie = (movie) => {
    setMovies([movie,...movies,]); // 3개데이터 -> 3개 데이터 모두 지우고, 최종 데이터마 저장
  }

  // 데이터 삭제 (delete - delete 방식)
  const delMovie = (no) => {
    console.log("삭제번호 : "+no)
    // 데이터 삭제 : filter해당하는 데이터를 리턴해서 돌려줌
    setMovies(
      movies.filter((movie)=>{
        return(
          movie.no != no
        );
      })
    )

  }

  // 데이터 수정 (update - put 방식)



  // 반복문 map함수는 return해서 값을 돌려줌. for문 반복만 함. return없음.
  // 최초 스프링에서 데이터를 useEffect로 가져와서 map으로 리스트를 출력하는 형태구성
  const mlist =
  movies.length?
  movies.map((movie)=>{
    return(
      <MovieList movie={movie} key={movie.no} delMovie={delMovie}/>
    );
  }):"영화정보 데이터가 없습니다."
  ;
  
  //추가, 삭제, 수정
  return (
    <div className="main">
      <h2>영화정보리스트</h2>
      <Form addMovie={addMovie} />
      <div>
        {mlist}
      </div>
    </div>
  );
}
export default App;