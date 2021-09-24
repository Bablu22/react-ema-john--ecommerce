import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
const Product = (props) => {
    const { img, name, seller, stock, star, price, shipping } = props.product
    const element = <FontAwesomeIcon className="me-2" icon={faShoppingCart} />

    return (
        <div>
            <div className="card mb-4" style={{ maxWidth: "100%" }}>
                <div className="row g-0">
                    <div className="col-md-4 p-2">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text"><small className="text-muted">by: {seller}</small></p>
                            <p>Price: {price}</p>
                            <p>Shipping : {shipping}</p>
                            <p>only {stock} left in stock - order soon</p>
                            <p>Ratting:  
                                <Rating
                                    emptySymbol="far fa-star star-icon"
                                    fullSymbol="fas fa-star star-icon"
                                    initialRating={star}
                                    readonly
                                >

                                </Rating>
                            </p>
                            <button
                                onClick={() => props.button(props.product)}
                                className="btn btn-warning fw-bold">{element}Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;

