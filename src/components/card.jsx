import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';
import classNames from 'classnames';

export default function CardComponent({ className, children, ...rest }) {
  return (
    <Card className={classNames('shadow-sm', className)} {...rest}>
      {children}
    </Card>
  );
}

CardComponent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
