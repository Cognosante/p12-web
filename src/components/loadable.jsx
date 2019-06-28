import React from 'react';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'reactstrap';
import get from 'lodash/get';
import map from 'lodash/map';
import debug from 'debug';

const log = debug('cgs:sequoia:Loadable');

/**
 * A wrapper for components that get data asynchronously.
 *
 * Intended for use with GraphQL.
 * Requies a boolean `loading` prop.
 * Handles errors if you pass an 'error' prop.
 * Handles retry if you pass a 'retry' prop.
 */
export default function Loadable({
  children,
  error,
  retry,
  loading,
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
}) {
  if (error) return <ErrorComponent error={error} retry={retry} />;
  if (loading) return <LoadingComponent />;
  return children;
}

Loadable.defaultProps = {
  children: null,
  loadingComponent: DefaultLoadingComponent,
  errorComponent: DefaultErrorComponent,
};

Loadable.propTypes = {
  // The only requried props.
  children: PropTypes.node,
  loading: PropTypes.bool.isRequired,
  // To show something other than a spinner
  loadingComponent: PropTypes.elementType,
  // To handle error states so you don't need a separate Error component
  error: PropTypes.any,
  // To show something other than a default error message
  errorComponent: PropTypes.elementType,
  // If this function is provided, the user will see a 'retry' button when there
  // are errors, and clicking the button will call this function.
  retry: PropTypes.func,
};

function DefaultLoadingComponent() {
  return (
    <div className="w-100 text-center py-3">
      <Spinner color="primary" size="xl" />
    </div>
  );
}

function DefaultErrorComponent({ error, retry }) {
  const [loading, setLoading] = React.useState(false);
  const messages = [];
  if (error.message) messages.push(error.message);
  const netErrors = get(error, 'networkError.result.errors', []);
  const netMessages = map(netErrors, 'message');
  messages.push(...netMessages);

  return (
    <div>
      <p>An error has occurred.</p>
      {messages.length > 0 ? (
        <p className="bg-warning p-3 text-monospace">{messages.join('\n')}</p>
      ) : null}
      {retry ? (
        <Button
          type="button"
          disabled={loading}
          onClick={() => {
            log('Refetching data');
            setLoading(true);
            retry().catch(() => {
              setLoading(false);
            });
          }}
        >
          Retry
          {loading ? (
            <Spinner className="ml-2" color="light" size="sm" />
          ) : null}
        </Button>
      ) : null}
    </div>
  );
}

DefaultErrorComponent.propTypes = {
  error: Loadable.propTypes.error.isRequired,
  retry: Loadable.propTypes.retry,
};
