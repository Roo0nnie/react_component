import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import { CarbonFaceDissatisfied } from '../buttons/buttons_icon/very_dissatisfied';
import { IcOutlineSentimentSlightlyDissatisfied } from '../buttons/buttons_icon/dissatisfied';
import { IcBaselineSentimentSatisfied } from '../buttons/buttons_icon/satisfied';
import { IcOutlineSentimentSatisfied } from '../buttons/buttons_icon/satisfiedmedyo';
import { MaterialSymbolsSentimentVerySatisfiedOutline } from '../buttons/buttons_icon/very_satisfied';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <CarbonFaceDissatisfied color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <IcOutlineSentimentSlightlyDissatisfied color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <IcBaselineSentimentSatisfied color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <IcOutlineSentimentSatisfied color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <MaterialSymbolsSentimentVerySatisfiedOutline color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function RadioGroupRating() {
  return (
    <StyledRating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
    />
  );
}
