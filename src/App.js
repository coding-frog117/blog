import logo from './logo.svg';
import './App.css'; 
import { useState } from 'react';

function App() { 
  let [블로그제목,b]=useState('개굴공주의 블로그');
  let [title,setTitle]=useState(['겨울 아우터 추천','강남 맛집 추천','크리스마스 축제']);
  let [like, likeChange]=useState([0,0,0]);
  let [modal,setModal]=useState(false);
  // setModalTitle을 만드는 이유는 title 인덱스에 따라 스위치를 조절해주기 위해서임
  let [modalTitle,setModalTitle]=useState(0);
  let [inputValue,setInputValue]=useState('');

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

      {/* <div className="list">
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
      </div> */}

      {
        title.map((a,i)=>{
          let date=new Date(); 
          return (
          <div className="list">
            <h4 onClick={()=>{
              setModal(!modal);
              setModalTitle(i);
            }}> {a} <span onClick= {(e)=>{ 
              e.stopPropagation();           
              let copy=[...like];
              copy[i]=copy[i]+1;
              likeChange(copy);
            }}> 좋아요 </span>{like[i]}
            </h4>
            <p>
            {/* 날짜 글마다 실시간 반영하는거 모르겠음 */}
              {/* {date.getYear()}년 {date.getMonth()}월 {date.getDate()}일 {date.getTime()} 작성됨 */}
            </p>
            <button onClick={()=>{
              let titleCopy=[...title];
              titleCopy.splice(i,1);
              setTitle(titleCopy);
            }}>삭제</button>
          </div>
        )
        })
      }     
{/* 새로운 글 추가 */}
      <input onChange={(e)=>{
        setInputValue(e.target.value);
      }}></input>
      <button type="button" onClick={(e)=>{
          // 제목 배열 추가
          let titleCopy2=[...title];
          titleCopy2.unshift(inputValue);
          setTitle(titleCopy2);
          // 좋아요 배열추가
          let likeCopy=[...like];
          likeCopy.unshift(0);
          likeChange(likeCopy);
        }} >글발행</button>

      {
        modal == true ? <Modal title={title} setTitle={setTitle} color={'skyblue'} modalTitle={modalTitle}></Modal> :null
      }

    </div>
  );
}

function Modal(props){
  return (
    <>
      <div className="modal" style={{background:props.color}}>
        <h4>{props.title[props.modalTitle]}</h4>
        <h4>날짜</h4>
        <p>상세내용</p>
      </div>

      <Footer></Footer>
    </>
  )}


function Footer(){
  return(    
     <small>이 글의 저작권은 개굴공주에게 있습니다</small> 
  )
}

export default App;