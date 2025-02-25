
import PropTypes from 'prop-types';
import "../css/Button.css";

export default function Button(props) {
  return (
    <>
      <input
        type={props.type}
        name=""
        id=""
        value={props.value}
        className="btn"
      />
    </>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
};

