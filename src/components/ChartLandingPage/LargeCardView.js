import React from "react";
import UpperNav from "./UpperNav";
import Subheader from './Subheader';

require("./LargeCardView.css");

const LargeCard = () => {
  return (
    <div className="large-card-div">
        <UpperNav />
        <Subheader />
            <div className="path-header">
                <h1 className="path-h1">EXAMPLE CARDS ></h1>
                <h2 className="path-h2">RUNNING TOTAL LINE</h2>
            </div>
            <div className="description-header">
                <h2 className="title-h2">Running Total Line</h2>
                <div className="description-glyphicon">
                    <span className="glyphicon glyphicon-filter"></span>
                </div>
                <div className="description-glyphicon">
                    <span className="glyphicon glyphicon-bell"></span>
                </div>
                <div className="description-glyphicon">
                    <span className="glyphicon glyphicon-star"></span>
                </div>
                <div className="description-glyphicon">
                    <span className="glyphicon glyphicon-resize-full"></span>
                </div>
            </div>
    </div>
  )
}

export default LargeCard;
