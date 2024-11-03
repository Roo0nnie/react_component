import * as React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import { UimEllipsisV } from '../buttons/buttons_icon/ellipse';
import { PrimeInfo } from '../buttons/buttons_icon/info';

const FontAwesomeSvgIcon = React.forwardRef((props, ref) => {
  const { icon } = props;

  const {
    icon: [width, height, , , svgPathData],
  } = icon;

  return (
    <SvgIcon ref={ref} viewBox={`0 0 ${width} ${height}`}>
      {typeof svgPathData === 'string' ? (
        <path d={svgPathData} />
      ) : (
        /**
         * A multi-path Font Awesome icon seems to imply a duotune icon. The 0th path seems to
         * be the faded element (referred to as the "secondary" path in the Font Awesome docs)
         * of a duotone icon. 40% is the default opacity.
         *
         * @see https://fontawesome.com/how-to-use/on-the-web/styling/duotone-icons#changing-opacity
         */
        svgPathData.map((d, i) => (
          <path style={{ opacity: i === 0 ? 0.4 : 1 }} d={d} />
        ))
      )}
    </SvgIcon>
  );
});

FontAwesomeSvgIcon.propTypes = {
  icon: PropTypes.any.isRequired,
};

export default function FontAwesomeSvgIconDemo() {
  return (
    <Stack direction="row" spacing={2}>
      <IconButton aria-label="Example">
        <UimEllipsisV />
      </IconButton>
      <IconButton aria-label="Example">
        <UimEllipsisV />
      </IconButton>
      <Button variant="contained" startIcon={<PrimeInfo />}>
        Example
      </Button>
      <Button variant="contained" startIcon={<PrimeInfo />}>
        Example
      </Button>
    </Stack>
  );
}
