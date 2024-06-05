import {useState} from "react";

const Card = ({product,handleAddToCart, handleRemoveFromCart}) => {
    const [isCardInCart, setIsCardInCart] = useState(false);

    const toggleCartButton = () => {
        setIsCardInCart(!isCardInCart);
    }

    const handleAdd = () => {
        const arrayEl = product.id;
        toggleCartButton();
        handleAddToCart(arrayEl);
    }

    const handleRemove = () => {
        const arrayEl = product.id;
        toggleCartButton();
        handleRemoveFromCart(arrayEl);
    }



    return (
        <>
            <div className="card h-100" style={{width:"18rem"}}>
                <img className="card-img-top h-50" src={product.imageUrl} alt="..." />
                <div className="card-body p-4 h-30">
                    <div className="text-center">
                        <h5 className="fw-bolder">{product.name}</h5>
                        <p className="card-text">${product.price}</p>
                        <p className="card-text">{product.description}</p>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent h-20">
                    <div className="text-center">
                    {isCardInCart?<button className="btn btn-outline-dark mt-auto" onClick={handleRemove}>Remove from Cart</button>:<button className="btn btn-outline-dark mt-auto" onClick={handleAdd}>Add to Cart</button>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;