import React from 'react';
import PropTypes from 'prop-types';
import { Container, Breadcrumb, BreadcrumbItem, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Home } from '../icons';
import styles from './breadcrumbs.module.scss';

/**
 * A container for breadcrumb items.
 *
 * Contains the home breadcrumb by default.
 *
 * @example
 * <BreadcrumbBar>
 *   <Crumb to="/antarctica">Antarctica</Crumb>
 *   <Crumb to="/penguins">Penguins</Crumb>
 *   <Crumb to="/penguins/emperor">Emperor Penguins</Crumb>
 * </BreadcrumbBar>
 */
export function BreadcrumbBar({ children, ...restProps }) {
  return (
    <div className="bg-gray-lighter">
      <Container>
        <Row>
          <Breadcrumb {...restProps} listClassName="mb-0">
            <Crumb to="/">
              <Home size="lg" className="mr-2" />
              Cell viewer
            </Crumb>
            {children}
          </Breadcrumb>
        </Row>
      </Container>
    </div>
  );
}

BreadcrumbBar.propTypes = Breadcrumb.propTypes;

/**
 * A breadcrumb link.
 *
 * To be rendered as a child of BreadcrumbBar.
 */
export function Crumb({ to, children, ...restProps }) {
  return (
    <BreadcrumbItem {...restProps} className={`${styles.item} d-inline-block text-nowrap`}>
      <Link to={to}>{children}</Link>
    </BreadcrumbItem>
  );
}

Crumb.propTypes = {
  ...BreadcrumbItem.propTypes,
  to: PropTypes.string
};
