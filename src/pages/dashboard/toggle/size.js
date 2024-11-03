import * as React from 'react';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { WpfAlignleft } from '../buttons/buttons_icon/aling-left';
import { WpfAligncenter } from '../buttons/buttons_icon/align-center';
import { WpfAlignright } from '../buttons/buttons_icon/align-right';
import { WpfAlignjustify } from '../buttons/buttons_icon/align-justify';

export default function ToggleButtonSizes() {
  const [alignment, setAlignment] = React.useState('left');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="left" key="left">
      <WpfAlignleft />
    </ToggleButton>,
    <ToggleButton value="center" key="center">
      <WpfAligncenter />
    </ToggleButton>,
    <ToggleButton value="right" key="right">
      <WpfAlignright />
    </ToggleButton>,
    <ToggleButton value="justify" key="justify">
      <WpfAlignjustify />
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
        {children}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control} aria-label="Medium sizes">
        {children}
      </ToggleButtonGroup>
      <ToggleButtonGroup size="large" {...control} aria-label="Large sizes">
        {children}
      </ToggleButtonGroup>
    </Stack>
  );
}
