import * as React from 'react';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { WpfAlignleft } from '../buttons/buttons_icon/aling-left';
import { WpfAligncenter } from '../buttons/buttons_icon/align-center';
import { WpfAlignright } from '../buttons/buttons_icon/align-right';
import { IcOutlineLaptop } from '../buttons/buttons_icon/laptop';
import { MaterialSymbolsTvOutline } from '../buttons/buttons_icon/tv';
import { GridiconsPhone } from '../buttons/buttons_icon/phone';

export default function ToggleButtonNotEmpty() {
  const [alignment, setAlignment] = React.useState('left');
  const [devices, setDevices] = React.useState(() => ['phone']);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleDevices = (event, newDevices) => {
    if (newDevices.length) {
      setDevices(newDevices);
    }
  };

  return (
    <Stack direction="row" spacing={4}>
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
      </ToggleButtonGroup>

      <ToggleButtonGroup
        value={devices}
        onChange={handleDevices}
        aria-label="device"
      >
        <ToggleButton value="laptop" aria-label="laptop">
          <IcOutlineLaptop />
        </ToggleButton>
        <ToggleButton value="tv" aria-label="tv">
          <MaterialSymbolsTvOutline />
        </ToggleButton>
        <ToggleButton value="phone" aria-label="phone">
          <GridiconsPhone />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
