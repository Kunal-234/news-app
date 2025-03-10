import React, { Component } from "react";


export default class NewsComponent extends Component {
  render() {
    let { title, description, imageUrl,url } = this.props;
    return (
      <div className="container">
        
        <div className="card  mx-4 p-2" style={{ width: "20rem" ,height:"26rem",overflow:""}}>
          <img style={{width:"100%",height:"170px",objectFit:"cover"}} src={imageUrl?imageUrl:"https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3cyUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <a href={url} target="__blank" className="btn btn-dark btn-sm ">
              Read more
            </a>
          </div>
          
        </div>
      </div>
    );
  }
}
