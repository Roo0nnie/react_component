import * as React from 'react';
import Box from '@mui/material/Box';
import Divider, { dividerClasses } from '@mui/material/Divider';
import { WpfAlignleft } from '../buttons/buttons_icon/aling-left';
import { WpfAligncenter } from '../buttons/buttons_icon/align-center';
import { WpfAlignright } from '../buttons/buttons_icon/align-right';
import { OouiBoldB } from '../buttons/buttons_icon/bold';

export default function VerticalDividers() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        bgcolor: 'background.paper',
        color: 'text.secondary',
        '& svg': {
          m: 1,
        },
        [`& .${dividerClasses.root}`]: {
          mx: 0.5,
        },
      }}
    >
      <WpfAlignleft />
      <WpfAligncenter />
      <WpfAlignright />
      <Divider orientation="vertical" flexItem />
      <OouiBoldB />

    </Box>
  );
}
