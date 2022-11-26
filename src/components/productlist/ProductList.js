import "./ProductList.css"
import Product from "../product/Product"
import {data} from "./data"
function ProductList()
{
    return(
    <>
     <section class="productList">
        <div class="container">
            <div class="head">
                <h2> Create & Inspire , It's SANA</h2>
                <p>
                SANA is a creative portfolio that your work has been waiting for.
                Beautiful homes, stunning portfolio styles & a whole lot more awaits
                inside.
                </p>
            </div>

            <div class="lists">

                {data.map((item) => (
                    <Product key={item.id}  link={item.link} image ={item.image} />
                ))
             }
            {/* <Product/>
            <Product/>
            <Product/>
            <Product/> */}
            </div>
        </div>
     </section>
    </>
    );
}
export default ProductList