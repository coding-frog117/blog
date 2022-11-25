const ProductList=function ProductList(props){
    return(
      <li className="product-list">
            <img className='list' src={process.env.PUBLIC_URL+`/img/clothes_${props.i}.png`}></img>
              <h2>{props.clothes.title}</h2>
              <p>{props.clothes.content}</p>
        </li>
    );
  }

export default ProductList;
