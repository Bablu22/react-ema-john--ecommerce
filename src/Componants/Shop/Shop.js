import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import '../Header/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const getFromLocalStorage = () => {
    let list = localStorage.getItem('cart');
    if (list) {
        return JSON.parse(localStorage.getItem('cart'))
    }
    else {
        return []
    }
}

const Shop = () => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const [products, setProducts] = useState([]);
    const [searchProduct, setSearchProduct] = useState([]);
    const [cart, setCart] = useState(getFromLocalStorage());

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSearchProduct(data)
            })
    }, [])

    const searchHandle = event => {
        const searchText = event.target.value;
        const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchProduct(matchProduct)

    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])




    let itemsPrice = 0;
    let shipping = 0;
    let total = 0;
    let tax = .10;
    const eventHandle = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    for (const items of cart) {
        itemsPrice = itemsPrice + items.price;
        shipping = shipping + items.shipping;
        total = itemsPrice + shipping;
        if (total > 1000) {
            tax = tax + 10;
            total = total + tax;
        }
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <div>
            <div className="search-bar">
                <form className="d-flex justify-content-center align-items-center m-auto">
                    <input className="form-control  w-75 py-1" onChange={searchHandle} type="search" placeholder="Search your product" aria-label="Search" />
                    <a href="/cart" className="ms-4 text-white fs-4">{element}</a>
                </form>
            </div>
            <div className="shop">
                <div className="product-container">
                    {
                        searchProduct.map(product => <Product
                            key={product.key}
                            product={product}
                            button={eventHandle}
                        >

                        </Product>)
                    }

                </div>
                <div className="cart-container">
                    <h4 className="text-center fw-bold">Order Summary</h4>
                    <h5 className="text-center fw-bold">Items orderd: {cart.length} </h5>
                    <p>Items Price: ${itemsPrice.toFixed(2)} </p>
                    <p>shipping: ${shipping.toFixed(2)}</p>
                    <p>Tax: ${tax.toFixed(2)}</p>
                    <p>Total: ${total.toFixed(2)}</p>
                    <button onClick={clearCart} className="btn btn-primary">Clear</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;