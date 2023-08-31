import React from "react";

let Jumbotron = () => {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center text-white">
            <div className="jumbotron mx-1 p-5 bg-secondary">
                <h1 className="display-4 fw-bold">Welcome to react</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit corrupti commodi reprehenderit ab accusamus maxime eius dicta ducimus, tenetur quisquam ea eum saepe totam labore. Quidem cupiditate ut maxime.</p>
                <a className="btn btn-primary btn-lg" href="https://reactjs.org/" role="button">Call to Action</a>
            </div>
        </div>

    )
}

export default Jumbotron;