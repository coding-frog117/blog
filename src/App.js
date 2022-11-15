import logo from './logo.svg';
import './App.css'; 
import { useState } from 'react';

function App() { 
  let [블로그제목,b]=useState('개굴공주의 블로그');
  let [title,setTitle]=useState(['겨울 아우터 추천','강남 맛집 추천','크리스마스 축제']);
  let [like, likeChange]=useState(0);

  return ( 
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'white',fontSize:'25px'}}>{블로그제목}
        <button onClick={()=>{
          let titleCopy=[...title].sort();
          setTitle(titleCopy)
          }}>
            글정렬 버튼
            </button></h4>
        
      </div>

      <div className="list">
        <h4>{title[0]} 
        <span onClick={()=>{
          likeChange(like+1)}}>
            좋아요</span>
            {like}</h4>
        <p>11월 11일 발행 빼빼로데이!</p>
        <button onClick={()=>{
          let copy=[...title];
          copy[0]='여자코트추천';
          setTitle(copy);
          }}>
            여성</button>
      </div>


      <div className="list">
        <h4>{title[1]}</h4>
        <p>11월 11일 발행 빼빼로데이!</p>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <p>11월 11일 발행 빼빼로데이!</p>
      </div>
    </div>
  );
}

export default App;
