import React from 'react';
import PropTypes from 'prop-types';
import { TitleBtn, Button, ButtonWrapper } from './FeedBackOptions.styled';

export default function FeedBackOptions({
  onClickGood,
  onClickNeutral,
  onClickBad,
}) {
  return (
    <>
      <TitleBtn>Please leave feedback</TitleBtn>
      <ButtonWrapper>
        <Button type="button" onClick={onClickGood}>
          Good
        </Button>
        <Button type="button" onClick={onClickNeutral}>
          Neutral
        </Button>
        <Button type="button" onClick={onClickBad}>
          Bad
        </Button>
      </ButtonWrapper>
    </>
  );
}

FeedBackOptions.propTypes = {
  onClickGood: PropTypes.func,
  onClickNeutral: PropTypes.func,
  onClickBad: PropTypes.func,
};
