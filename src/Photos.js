import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photos, index) {
            return (
              <div className="col-4" key={index}>
                <img src={photos.src.tiny} className="img-fluid" alt="" />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
