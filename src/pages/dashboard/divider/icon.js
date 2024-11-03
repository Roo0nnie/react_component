import * as React from 'react';
import Card from '@mui/material/Card';
import Divider, { dividerClasses } from '@mui/material/Divider';
import { WpfAlignleft } from '../buttons/buttons_icon/aling-left';
import { WpfAligncenter } from '../buttons/buttons_icon/align-center';
import { WpfAlignright } from '../buttons/buttons_icon/align-right';
import { OouiBoldB } from '../buttons/buttons_icon/bold';

export default function VerticalDividerMiddle() {
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
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
      <Divider orientation="vertical" variant="middle" flexItem />
      <OouiBoldB />
    </Card>
  );
}
