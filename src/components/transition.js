import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';
import { motion } from "framer-motion"

import { timeout } from 'constants/transition';

class Transition extends PureComponent {
  render() {
    const { children, location } = this.props;

    const RoutesContainer = motion.div({
      enter: { opacity: 1, delay: timeout, delayChildren: timeout },
      exit: { opacity: 0 },
    });

    return (
      <PoseGroup animateOnMount>
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    );
  }
}

Transition.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Transition;