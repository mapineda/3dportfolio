import PropTypes from "prop-types";

const Button = ({ onClick, children, as: Component = 'button', ...rest }) => {
  return (
    <Component onClick={onClick} className="button" {...rest}>
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
