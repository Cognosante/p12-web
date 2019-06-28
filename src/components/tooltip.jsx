import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'reactstrap';
import styles from './tooltip.module.scss';

export default class TooltipComponent extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    delay: PropTypes.number,
    id: PropTypes.string.isRequired,
    placement: PropTypes.string,
    tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
  };

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.hide) {
      return {
        tooltipOpen: false
      };
    }
    return null;
  }

  state = {
    tooltipOpen: false
  };

  _isMounted = true;

  componentWillUnmount() {
    this._isMounted = false;
  }

  _handleToggle() {
    if (this._isMounted) this.setState(({ tooltipOpen }) => ({ tooltipOpen: !tooltipOpen }));
  }

  render() {
    return (
      <div className="d-inline-block">
        <div id={this.props.id} className="d-inline-block">
          {this.props.children}
        </div>
        <Tooltip
          placement={this.props.placement || 'top'}
          target={this.props.id}
          delay={{ show: this.props.delay || 500, hide: 0 }}
          className={styles.tooltip}
          boundariesElement="window"
          isOpen={this.state.tooltipOpen}
          toggle={() => this._handleToggle()}
        >
          {this.props.tooltip}
        </Tooltip>
      </div>
    );
  }
}
