import React from 'react';
import Rating from 'react-rating';

const ReviewProduct = (props) => {
    const { img, name, seller, stock, star, price, shipping } = props.item
    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-1">

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
                                onClick={() => props.handle(props.item)}
                                className="btn btn-danger fw-bold">Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewProduct;