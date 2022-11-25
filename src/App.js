import React, { useTransition } from 'react';
import './App.css';
import data from './data';
import {useState} from 'react';
import ProductList from './Component/ProductList';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './Pages/Detail';

function App() {
  let [clothes]=useState(data); 
  let navigate=useNavigate();

  return (
    <div className="shop">
      <nav className="shop-nav">
        <ul className="nav-list">
          <li className="header">
            <h1 onClick={()=>{
              navigate('/');
            }}>예은쇼핑몰</h1></li>
          <li>outer</li>
          <li>top</li>
          <li>bottom</li>
          <li onClick={()=>{
            navigate('/detail');
          }}>Detail</li>

          <li onClick={()=>{
            navigate(-1);
          }}>뒤로가기</li>
          <li onClick={()=>{
            navigate(1);
          }}>앞으로가기</li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={
        <>
          <Link to="/detail">상세페이지</Link>
          <main className="shop-main">
            <img className='main-img' src={process.env.PUBLIC_URL+`/img/main_img.jpg`}></img>

            <section className="main-product">
            <ul className="product-listgroup">
            {
              clothes.map((a,i)=>{
                return(
                <ProductList clothes={clothes[i]} i={i}></ProductList>
                ) 
              })
            }
            
            </ul>
          </section>
        </main>
          
      </>}></Route>

        <Route path="/detail" element={<Detail clothes={clothes}  ></Detail>}></Route>
        <Route path="/detail/:id" element={<Detail clothes={clothes}></Detail>}></Route>
        <Route path="*" element={
          <div>없는 페이지입니다. 404 error</div>
        }></Route>

        <Route path="/event" element={<Event></Event>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일 기념 쿠폰 받기</div>}></Route>
        </Route>
      </Routes> 
    
    </div>

  );
}

function Event(){
  return(
  <div>오늘의 이벤트
    <Outlet></Outlet>
  </div>
  )
}




// function ProductList(props){
//   clothes.map((a,i)=>{
//     return(
//       <li className="product-list">
//           <img className='list' src={process.env.PUBLIC_URL+`/img/clothes_${props.i}.png`}></img>
//             <h2>{props.clothes[i].title}</h2>
//             <p>{props.clothes[i].content}</p>
//       </li>
//     )
//   })}
export default App;