import PropTypes from 'prop-types';

const Loader = ({msz}) => {
  return <div>{msz}</div>;
};

Loader.prototype = {
    msz : PropTypes.string,
}
export default Loader;
