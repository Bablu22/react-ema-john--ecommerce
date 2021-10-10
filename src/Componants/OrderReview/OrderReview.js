import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewProduct from './ReviewProduct/ReviewProduct';


const getFromLocalStorage = () => {
    let list = localStorage.getItem('cart');
    if (list) {
        return JSON.parse(localStorage.getItem('cart'))
    }
    else {
        return []
    }
}

const OrderReview = () => {

    const [cart, setCart] = useState(getFromLocalStorage());

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    let itemsPrice = 0;
    let shipping = 0;
    let total = 0;
    let tax = .10;

    for (const items of cart) {
        itemsPrice = itemsPrice + items.price;
        shipping = shipping + items.shipping;
        total = itemsPrice + shipping;
        if (total > 1000) {
            tax = tax + 10;
            total = total + tax;
        }
    }




    const removeOrder = item => {
        const remove = cart.filter(i => i.key !== item.key)
        setCart(remove)
        console.log(remove);
    }



    return (
        <div>
            <div className="shop">
                <div className="product-container">


                    {
                        cart.map(item => <ReviewProduct
                            key={item.key}
                            handle={removeOrder}
                            item={item}
                        ></ReviewProduct>)
                    }


                </div>
                <div className="cart-container">
                    <h4 className="text-center fw-bold">Order Summary</h4>
                    <h5 className="text-center fw-bold">Items orderd: {cart.length} </h5>
                    <p>Items Price: ${itemsPrice.toFixed(2)} </p>
                    <p>shipping: ${shipping.toFixed(2)}</p>
                    <p>Tax: ${tax.toFixed(2)}</p>
                    <p>Total: ${total.toFixed(2)}</p>

                    <Link className="btn btn-dark" to="/shipping">Proceed Shhipping</Link>

                </div>
            </div>
        </div>
    );
};

export default OrderReview;