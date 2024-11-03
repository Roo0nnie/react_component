import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { WpfAlignleft } from '../buttons/buttons_icon/aling-left';
import { WpfAligncenter } from '../buttons/buttons_icon/align-center';
import { WpfAlignright } from '../buttons/buttons_icon/align-right';
import { WpfAlignjustify } from '../buttons/buttons_icon/align-justify';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <WpfAlignleft />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <WpfAligncenter />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <WpfAlignright />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        <WpfAlignjustify />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
