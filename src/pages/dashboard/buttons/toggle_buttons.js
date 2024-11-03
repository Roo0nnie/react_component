import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { MaterialSymbolsSave } from './buttons_icon/save';
import { MaterialSymbolsSend } from './buttons_icon/send';

export default function LoadingButtonsTransition() {
  const [loading, setLoading] = React.useState(true);

  // Move handleClick function definition outside of the JSX
  const handleLoadingToggle = () => setLoading(!loading);
  const handleButtonClick = () => setLoading(true);

  return (
    <div>
      <FormControlLabel
        sx={{ display: 'block' }}
        control={
          <Switch
            checked={loading}
            onChange={handleLoadingToggle}
            name="loading"
            color="primary"
          />
        }
        label="Loading"
      />
      <Box sx={{ '& > button': { m: 1 } }}>
        <LoadingButton
          size="small"
          onClick={handleButtonClick}
          loading={loading}
          variant="outlined"
          disabled
        >
          Disabled
        </LoadingButton>
        <LoadingButton
          size="small"
          onClick={handleButtonClick}
          loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
        >
          Fetch data
        </LoadingButton>
        <LoadingButton
          size="small"
          onClick={handleButtonClick}
          endIcon={<MaterialSymbolsSend />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          Send
        </LoadingButton>
        <LoadingButton
          size="small"
          color="secondary"
          onClick={handleButtonClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<MaterialSymbolsSave />}
          variant="contained"
        >
          Save
        </LoadingButton>
      </Box>
      <Box sx={{ '& > button': { m: 1 } }}>
        <LoadingButton
          onClick={handleButtonClick}
          loading={loading}
          variant="outlined"
          disabled
        >
          Disabled
        </LoadingButton>
        <LoadingButton
          onClick={handleButtonClick}
          loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
        >
          Fetch data
        </LoadingButton>
        <LoadingButton
          onClick={handleButtonClick}
          endIcon={<MaterialSymbolsSend />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          Send
        </LoadingButton>
        <LoadingButton
          color="secondary"
          onClick={handleButtonClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<MaterialSymbolsSave />}
          variant="contained"
        >
          Save
        </LoadingButton>
      </Box>
    </div>
  );
}
