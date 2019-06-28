import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledPopover, PopoverBody } from 'reactstrap';
import styles from './popover.module.scss';

export default function Popover({ id, placement, popover, ...restProps }) {
  return (
    <UncontrolledPopover
      {...restProps}
      placement={placement || 'top'}
      target={id}
      className={`${styles.popover} border-0 text-white`}
      boundariesElement="window"
    >
      <PopoverBody>{popover}</PopoverBody>
    </UncontrolledPopover>
  );
}

Popover.propTypes = {
  id: PropTypes.string.isRequired,
  placement: PropTypes.string,
  popover: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};
