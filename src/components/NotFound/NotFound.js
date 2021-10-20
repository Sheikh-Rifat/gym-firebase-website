import React from "react";
import { Button } from "react-bootstrap";
import Error from "../../images/404.png";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="text-center">
      <div className=" mt-3">
        <img src={Error} alt="notFound" />
      </div>
      <Button className="btn-lg custom-btn">Back</Button>
    </div>
  );
};

export default NotFound;
