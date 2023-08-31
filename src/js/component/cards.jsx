import React from "react";

let Cartas = () => {
  return (
    <div className="card m-3" style={{ width: "25%" }}>
      <img src="https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8MzAwcHglMjBpbWFnZSUyMHJlbmRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">Card title</h5>
        <p className="card-text text-center">
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </p>
        <div className="bg-secondary">
          <a href="#" className="btn btn-primary rounded-2">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  )
}


export default Cartas;