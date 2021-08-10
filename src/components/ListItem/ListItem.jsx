import React, { useState } from "react";
import PropTypes from "prop-types";
import "./listItem.css";

function ListItem({ data, index }) {
  const [isDataVisible, setDataVisible] = useState(false);

  return (
    <div className="Components__ListItem">
      <div
        onClick={() => {
          setDataVisible(!isDataVisible);
        }}
        tabIndex={0}
        role="button"
        style={{ outline: "none" }}
      >
        <span className="ListItem__Index">{index}.</span>
        <span className="ListItem__Name">{data.name}</span>
        <span className="ListItem__UserName">@{data.username}</span>
      </div>
      {isDataVisible ? (
        <div className="List__Details">
          <div>
            <span className="List__Details__Heading">Email: </span>
            <span className="List__Details__Value">{data.email}</span>
          </div>
          <div>
            <span className="List__Details__Heading">Phone: </span>
            <span className="List__Details__Value">{data.phone}</span>
          </div>
          <div>
            <span className="List__Details__Heading">Website: </span>
            <span className="List__Details__Value">
              <a href="#">{data.website}</a>
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

ListItem.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
};

export default ListItem;
