import React from "react";
import { Cabecera, PieDePagina } from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cartas from "./cards.jsx";

//include images into your bundle
// import logo from "http://www.w3.org/2000/svg";

//create your first component
const Home = () => {
    return (
        <>
            <Cabecera />
            <Jumbotron />
            <div className="container-fluid d-flex justify-content-space-evenly">
                <Cartas /><Cartas /><Cartas /><Cartas />
            </div>
            <PieDePagina />

        </>


        // <div className="text-center">
        // 	<h1 className="text-center mt-5">Hello Rigo!</h1>
        // 	<p>
        // 		<img src={rigoImage} />
        // 	</p>
        // 	<a href="#" className="btn btn-success">
        // 		If you see this green button... bootstrap is working...
        // 	</a>
        // 	<p>
        // 		Made by{" "}
        // 		<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
        // 		love!
        // 	</p>
        // </div>
    );
};
export default Home;
