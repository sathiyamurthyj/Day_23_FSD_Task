import products from "../data";
import Card from "./card";
const ProductList = (props) => {

    return (
        <>
            <div className="container px-4 py-5">
                <div className="row gx-2 row-cols-md-2 row-cols-lg-4 justify-content-center align-content-center">
                    {products.map((product) => (
                        <div className="col mb-5" key={product.id}>
                            <Card product={product} handleAddToCart={props.handleAddToCart} handleRemoveFromCart={props.handleRemoveFromCart}/>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
};

export default ProductList;