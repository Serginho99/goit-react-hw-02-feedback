import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonWrapper } from './FeedBackOptions.styled';

export default function FeedBackOptions({ onClick }) {
  return (
    <ButtonWrapper>
      <Button onClick={() => onClick('good')} type="button">
        Good
      </Button>
      <Button onClick={() => onClick('neutral')} type="button">
        Neutral
      </Button>
      <Button onClick={() => onClick('bad')} type="button">
        Bad
      </Button>
    </ButtonWrapper>
  );
}

FeedBackOptions.propTypes = {
  onClick: PropTypes.func,
};
