import React from "react";
import PropTypes from "prop-types";
import "./.searchBox.css";

export default function SearchBox({ placeholder, ...restProps }) {
  return (
    <>
      <input
        className="Components__SearchBox"
        {...restProps}
        placeholder={placeholder}
      />
    </>
  );
}

SearchBox.defaultProps = {
  placeholder: "Search by user name or email...",
};

SearchBox.propTypes = {
  placeholder: PropTypes.string,
};
