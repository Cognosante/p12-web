import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import { Container, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import logo from './images/logo.png';
import { routes } from '../../app/routes';
import styles from './header.module.scss';

export function Header({ location }) {
  const [handleNavbarOpen] = React.useState(false);
  const navItems = routes.filter(r => r.inNav);
  return (
    <header
      id="header"
      className={classnames({
        [styles.header]: true,
        [styles.publicHeader]: true
      })}
    >
      <Container className="px-0 px-md-3">
        <Navbar dark expand="md" className="p-0">
          <NavbarBrand tag={Link} to="/" id="AgAGDgwLDAwHCA4OBAALBA" className="d-block mx-3 my-2 ml-md-0">
            <img src={logo} alt="eHealth Exchange logo" className={styles.logo} />
          </NavbarBrand>
          <NavbarToggler onClick={() => handleNavbarOpen(isOpen => !isOpen)} className="mr-3" />
          {!!navItems.length && (
            <Nav navbar>
              {navItems.map(n => (
                <NavItem key={n.name} active={location.pathname.includes(n.path)} className={styles.navItem}>
                  <NavLink
                    tag={Link}
                    to={n.path}
                    id={`nav-${n.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`${styles.navLink} px-3 py-2 py-md-4 text-uppercase`}
                  >
                    <span>{n.name}</span>
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          )}
        </Navbar>
      </Container>
    </header>
  );
}

Header.propTypes = {
  location: PropTypes.object
};

export default flowRight(withRouter)(Header);
