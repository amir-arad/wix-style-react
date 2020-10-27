import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Button from '../Button';
import { st, classes } from './SkeletonCircle.st.css';
import { dataHooks } from './constants';

/** SkeletonCircle */
class SkeletonCircle extends React.PureComponent {
  state = {
    count: 0,
  };

  _handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  render() {
    const { count } = this.state;
    const { dataHook, buttonText, className } = this.props;
    const isEven = count % 2 === 0;

    return (
      <div
        className={st(classes.root, { even: isEven, odd: !isEven }, className)}
        data-hook={dataHook}
      >
        <Text dataHook={dataHooks.skeletonCircleCount}>
          You clicked this button {isEven ? 'even' : 'odd'} number (
          <span className={classes.number}>{count}</span>) of times
        </Text>

        <div className={classes.button}>
          <Button
            onClick={this._handleClick}
            dataHook={dataHooks.skeletonCircleButton}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    );
  }
}

SkeletonCircle.displayName = 'SkeletonCircle';

SkeletonCircle.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Text for the button */
  buttonText: PropTypes.string,
};

SkeletonCircle.defaultProps = {};

export default SkeletonCircle;
