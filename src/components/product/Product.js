import "./product.css"

function Product(props) {
    return (
<>
<div class="product">
<div class="p-top">
    <span class="p-circle"></span>
    <span class="p-circle"></span>
    <span class="p-circle"></span>
</div>

{/* <div class="product-image"> */}
<a href={props.link}>
       <img src={props.image}/>
</a>
{/* </div> */}


</div>

</>
    );
}
export default Product;