import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { OouiBoldB } from '../buttons/buttons_icon/bold';
import { TablerItalic } from '../buttons/buttons_icon/italic';

export default function FlexDivider() {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        bgcolor: 'background.paper',
        color: 'text.secondary',
        '& svg': {
          m: 1,
        },
      }}
    >
      <OouiBoldB />
      <Divider orientation="vertical" variant="middle" flexItem />
      <TablerItalic />
    </Box>
  );
}
