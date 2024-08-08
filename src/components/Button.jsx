import PropTypes from "prop-types";

const Button = ({ onClick, children, as: Component = 'button', className='' ,...rest }) => {
  return (
    <Component onClick={onClick} className={`button ${className}`}  {...rest}>
      {children}
    </Component>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType
  ]).isRequired,
};

export default Button;
