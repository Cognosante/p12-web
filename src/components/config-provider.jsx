import React from 'react';
import debug from 'debug';
import axios from 'axios';
import PropTypes from 'prop-types';
import { isString, isFunction } from './utils';

const log = debug('app:config');

const ConfigContext = React.createContext(null);

export class ConfigProvider extends React.Component {
  static propTypes = {
    config: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    children: PropTypes.element
  };

  state = {};

  componentDidMount() {
    const { config } = this.props;
    if (isString(config)) {
      log('Loading remote configuration from url %s', config);
      axios.get(config).then(({ data }) => {
        log('Remote configuration: %o', data);
        this.setState({ initialized: true, config: data });
      });
    } else {
      log('Local configuration: %s', config);
      this.setState({ initialized: true, config });
    }
  }

  render() {
    return this.state.initialized ? (
      <ConfigContext.Provider value={this.state.config}>
        {React.Children.only(this.props.children)}
      </ConfigContext.Provider>
    ) : null;
  }
}

export function withConfig(Component, transform) {
  return props => {
    return (
      <ConfigContext.Consumer>
        {config => {
          const cfg = isFunction(transform) ? transform(config) : config;
          return <Component {...props} config={{ ...(cfg || {}) }} />;
        }}
      </ConfigContext.Consumer>
    );
  };
}
