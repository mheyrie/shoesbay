import React from "react";
import "../styles/commons/Buttons.css";
import PropTypes from "prop-types";

const Button = ({ onClick, type, className, disabled, children }) => {
  return (
    <button
      type={type || "button"}
      className={`btn ${className} ${disabled ? "btn-disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  className: '',
  disabled: false,
};



export default Button;
