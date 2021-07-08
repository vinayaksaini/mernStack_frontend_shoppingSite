import React from 'react'
import { API } from '../backend';
import Base from "./Base";

export default function Home() {
    console.log("API is", API);
    return (
        <Base >
            <div className="row">
                <div className="col-4">
                    <button className="btn btn-success">TEST</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-success">TEST</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-success">TEST</button>
                </div>
            </div>
        </Base>
    )
}

