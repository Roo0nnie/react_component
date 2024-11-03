import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { MaterialSymbolsCheck } from '../buttons/buttons_icon/check';
import { MaterialSymbolsDelete } from '../buttons/buttons_icon/delete';

export default function CustomDeleteIconChips() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<MaterialSymbolsCheck />}
      />
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<MaterialSymbolsDelete />}
        variant="outlined"
      />
    </Stack>
  );
}
