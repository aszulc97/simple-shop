function Product(props) {
  return (
    <div>
      <img src={`https://kea-alt-del.dk/t7/images/webp/640/${props.id}.webp`} alt="t-shirt"></img>
      <h2>{props.productdisplayname}</h2>
      <p>{props.price}"kr."</p>
    </div>
  );
}

export default Product;

//clone.querySelector("a").href = "product.html?id=" + product.id;
