import React from "react";

const Jumbotron = () => {
	return (
		<div className="p-5 mb-4 rounded-3 col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-3 float-md-center">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
        <p className="col fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <button className="btn btn-primary btn-lg" type="button">Example button</button>
      </div>
    </div>
	);
};

export default Jumbotron;