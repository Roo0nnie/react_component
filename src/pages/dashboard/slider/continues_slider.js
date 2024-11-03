import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { ProiconsVolume1 } from '../buttons/buttons_icon/volumeDown';
import { HumbleiconsVolume2 } from '../buttons/buttons_icon/volumeUp';

export default function ContinuousSlider() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
        <ProiconsVolume1 />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <HumbleiconsVolume2 />
      </Stack>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
    </Box>
  );
}
