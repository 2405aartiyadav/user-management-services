import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import './style.css';
import axios from "axios";


let UserForm = () => {
    const { register, watch, handleSubmit, formState: { errors }, resetField } = useForm();

    let onSubmit = (data) => {

        axios.post('http://localhost:8080/addUser', {

            "uName": data.name,
            "uEmail": data.email,
            "uMobile": data.mobile,
            "uLocation": data.location
        })
            .then((response) => {
                console.log(response)

            })
            .catch((errors) => {
                throw errors;
            })
            resetField('name')
            resetField('email')
            resetField('mobile')
            resetField('location')


    }
   

    return (
        <div className="Formcontainer">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-label">Name</label>
                <input type="text" className="form-control form-control-sm" name="name" {...register("name", { required: true })} /><br />
                <label className="form-label ">Email</label>
                <input type="email" className="form-control form-control-sm" name="email" {...register("email")} /> <br />
                <label className="form-label ">Mobile</label>
                <input type="number" className="form-control form-control-sm" name="mobile" {...register("mobile")} /><br />
                <label className="form-label">Location</label>
                <input type="text" className="form-control form-control-sm " name="location" {...register("location")} />
                <br />
                <input type="submit"  className="btn btn-sm btn-primary" />

            </form>

        </div>

    )

}
export default UserForm;