import React, { useState } from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";

const Signin = () => {
    const signinForm = () => {
        return (
            <div className="row">
                <div className="col-md-4 offset-sm-4 text-left">
                    <form >
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group mt-4 text-center"><button className="btn btn-success btn-block rounded">Submit</button></div>
                    </form>
                </div>
            </div>
        );
    }

    return (

        <Base title="Signin Page" description="This is the SignIn Page!">
            {signinForm()}
        </Base>
    );
}

export default Signin;