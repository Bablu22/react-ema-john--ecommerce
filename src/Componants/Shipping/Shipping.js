import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Context/useAutht';
import './Shipping.css'
const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { user } = useAuth();
    return (

        <form className="shipping-form bg-white shadow p-3 mb-5 bg-white rounded w-50 mx-auto mt-5" onSubmit={handleSubmit(onSubmit)}>
            <h5 className="text-center fst-italic">Your Shipping Information</h5>
            <input defaultValue={user.displayName} placeholder="Your Name" {...register("name")} />

            <input defaultValue={user.email} placeholder="Your Email" {...register("email", { required: true })} />
            {errors.email && <span className="error">This field is required</span>}
            <input placeholder="Phone Number" defaultValue="" {...register("phone")} />
            <input placeholder="Your Address" defaultValue="" {...register("address")} />
            <input type="submit" />
        </form>
    );
};

export default Shipping;