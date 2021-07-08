import React from 'react'
import Menu from './Menu';
import "../styles.css"

const Base = ({
    title = "My eStore",
    description = "Enjoy Shopping",
    className = "bg-dark text-white p-4",
    children
}) => (
    <div>
        <Menu></Menu>
        {/* <div className="container-fluid"><header className="jumbotron bg-dark text-white text-center"><h2 className="display-4">{title}</h2></header></div> */}
        <div className="container-fluid">
            <div className="jumbotron bg-dark text-white text-center ">
                <h2 className="display-4">{title}</h2>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
        </div>
        <footer className="foooter bg-dark mt-auto py-3">
            <div className="container-fluid bg-success text-white text-center">
                <h4>If you have any query feel free to reach out!!!</h4>
                <button className="btn btn-warning btn-lg rounded">Contact Us</button>
            </div>
            <div className="container text-center">
                <span className="text-muted ">
                    An Amazing <span className="text-white">MERN</span> Bootcamp
                </span>
            </div>
        </footer>
    </div>
)


export default Base;