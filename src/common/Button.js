import React from "react";
import "../styles/commons/Buttons.css";
import PropTypes from "prop-types";

const Button = ({ value, title, onClick, type, className, disabled, children }) => {
  return (
    <button
      type={type || "button"}
      className={`btn ${className} ${disabled ? "btn-disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
      value={value}
      title={title}
    >
      {title||children}
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  value: PropTypes.string,
  title: PropTypes.string
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  className: '',
  disabled: false,
  value: '',
  title: ''
};



export default Button;
