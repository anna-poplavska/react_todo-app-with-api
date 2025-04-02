import React from 'react';
import classNames from 'classnames';
import { ErrorType } from '../types/ErrorType';

type Props = {
  errorMessage: ErrorType;
  setError: (title: ErrorType) => void;
};

export const ErrorInfo: React.FC<Props> = ({ errorMessage, setError }) => {
  return (
    <div
      data-cy="ErrorNotification"
      className={classNames(
        'notification',
        'is-danger',
        'is-light',
        'has-text-weight-normal',
        {
          // eslint-disable-next-line prettier/prettier
          'hidden': errorMessage === ErrorType.NoError,
        },
      )}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={() => setError(ErrorType.NoError)}
      />
      {errorMessage}
    </div>
  );
};
