import React, { Component } from "react";

export default class GiayDeitail extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="text-center ">
        <img
          className="w-75 "
          src={item.image}
          alt=" ảnh giày"
          type="button"
          data-bs-toggle="modal"
          data-bs-target={`#${item.alias}`}
        />

        <div className="">
          <h5 className="card-title">{item.name}</h5>
          <h6 className="card-text">{item.price} $</h6>
          <button className="btn btn-primary">
            add to carts
          </button>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id={item.alias}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header ">
                <h1 className="modal-title fs-5 " id="staticBackdropLabel">
                  Chi Tiết Sản Phẩm
                </h1>
                <button
                  type="button"
                  className="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <img
                  className="card-img-top btn w-75"
                  src={item.image}
                  alt=""
                />
                <div className="card-body">
                  <h3 className="card-title">{item.name}</h3>
                  <h4 className="card-text">{item.price} $</h4>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
