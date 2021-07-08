import React, { useState } from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";
import { signup } from "../auth/helper/index.js"

const Signup = () => {



    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    });


    const { name, email, password, error, success } = values;


    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }


    const onSubmit = event => {
        event.preventDefault()
        setValues({ ...values, error: false })
        signup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                } else {
                    setValues({
                        ...values,
                        name: "",
                        email: "",
                        password: "",
                        error: "",
                        success: true
                    })
                }
            })
            .catch(console.log("Error in signup"));

    }

    const successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-4 offset-sm-4 text-left">
                    <div className="alert alert-success"
                        style={{ display: success ? "" : "none" }}>
                        New Account was created Successfully {" "} <Link to="/signin">Login here</Link>
                    </div>
                </div>
            </div>
        )
    }

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-4 offset-sm-4 text-left">
                    <div className="alert alert-danger"
                        style={{ display: error ? "" : "none" }}>
                        {error}
                    </div>
                </div>
            </div>
        )
    }

    const signupForm = () => {
        return (
            <div className="row">
                <div className="col-md-4 offset-sm-4 text-left">
                    <form >
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input type="text"
                                onChange={handleChange("name")}
                                className="form-control"
                                value={name} />
                        </div>
                        <div className="form-group">
                            <lable className="text-light">Email</lable>
                            <input type="Email"
                                onChange={handleChange("email")}
                                className="form-control"
                                value={email} />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input type="password"
                                onChange={handleChange("password")}
                                className="form-control"
                                value={password} />
                        </div>
                        <div onClick={onSubmit} className="form-group mt-4 text-center"><button className="btn btn-success btn-block rounded">Submit</button></div>
                    </form>
                </div>
            </div>
        );
    }
    return (
        <Base title="Signup Page" description="This is the SignUp Page!">

            {errorMessage()}
            {successMessage()}
            {signupForm()}
            <p className="text-white text-center">{JSON.stringify(values)}</p>
        </Base>
    );

}



export default Signup;