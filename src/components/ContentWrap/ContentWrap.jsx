import React from "react";
import PropTypes from "prop-types";

export default function ContentWrap({ isFetching, isError, children, style }) {
  if (isError) {
    return <div className="ContentWrap">Something went wrong...</div>;
  }

  if (isFetching) {
    return (
      <div className="ContentWrap" style={style}>
        Loading...
      </div>
    );
  }
  return children;
}

ContentWrap.defaultProps = {
  isError: false,
  style: {},
};

ContentWrap.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
};
