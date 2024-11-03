import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';
import { MaterialSymbolsSave } from './buttons_icon/save';


export default function LoadingButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
        Fetch data
      </LoadingButton>
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<MaterialSymbolsSave />}
        variant="outlined"
      >
        Save
      </LoadingButton>
    </Stack>
  );
}
