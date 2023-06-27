import React, { Component } from "react";
import GiayDeitail from "./GiayDeitail";

import data from "./../../data.json";

export default class GiayHome extends Component {
  
  arrGiay = data;

  render() {
    return (
      <div className="row">
        {this.arrGiay.map((item, index) => {
          return (
            <div className="card col-4 p-4   ">
              <GiayDeitail
                item={item}
                key={index}
                
              />
            </div>
          );
        })}
      </div>
    );
  }
}
