import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { MdiTrash } from '../buttons/buttons_icon/trash';

export default function BasicTooltip() {
  return (
    <Tooltip title="Delete">
      <IconButton>
        <MdiTrash />
      </IconButton>
    </Tooltip>
  );
}
