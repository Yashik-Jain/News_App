import React, { Component } from "react";

export class Newsitem extends Component {

  render() {
    let { title, description,imageurl,url } = this.props;
    return (
      <div className="col-md-3 my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer"  href={url} target="_blank" className="btn btn-primary btm-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
