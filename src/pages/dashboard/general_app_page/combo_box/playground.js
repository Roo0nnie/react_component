import React, { useState } from 'react';
import { Autocomplete, TextField, Stack } from '@mui/material';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Dark Knight', year: 2008 },
];

const defaultProps = {
  options: top100Films,
  getOptionLabel: (option) => option.title,
};

const flatProps = {
  options: top100Films.map((option) => option.title),
};

function PlayGround() {
  const [value, setValue] = useState(null);

  return (
    <div>
      <Stack spacing={1} sx={{ width: 300 }}>
        <Autocomplete
          {...defaultProps}
          id="disable-close-on-select"
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField {...params} label="Disable Close on Select" variant="standard" />
          )}
        />
        <Autocomplete
          {...defaultProps}
          id="clear-on-escape"
          clearOnEscape
          renderInput={(params) => (
            <TextField {...params} label="Clear on Escape" variant="standard" />
          )}
        />
        <Autocomplete
          {...defaultProps}
          id="disable-clearable"
          disableClearable
          renderInput={(params) => (
            <TextField {...params} label="Disable Clearable" variant="standard" />
          )}
        />
        <Autocomplete
          {...defaultProps}
          id="include-input-in-list"
          includeInputInList
          renderInput={(params) => (
            <TextField {...params} label="Include Input in List" variant="standard" />
          )}
        />
        <Autocomplete
          {...flatProps}
          id="flat-demo"
          renderInput={(params) => <TextField {...params} label="Flat" variant="standard" />}
        />
        <Autocomplete
          {...defaultProps}
          id="controlled-demo"
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          renderInput={(params) => (
            <TextField {...params} label="Controlled" variant="standard" />
          )}
        />
        <Autocomplete
          {...defaultProps}
          id="auto-complete"
          autoComplete
          includeInputInList
          renderInput={(params) => (
            <TextField {...params} label="Auto Complete" variant="standard" />
          )}
        />
        <Autocomplete
          {...defaultProps}
          id="disable-list-wrap"
          disableListWrap
          renderInput={(params) => (
            <TextField {...params} label="disableListWrap" variant="standard" />
          )}
        />
        <Autocomplete
          {...defaultProps}
          id="open-on-focus"
          openOnFocus
          renderInput={(params) => (
            <TextField {...params} label="openOnFocus" variant="standard" />
          )}
        />
        <Autocomplete
          {...defaultProps}
          id="auto-highlight"
          autoHighlight
          renderInput={(params) => (
            <TextField {...params} label="autoHighlight" variant="standard" />
          )}
        />
        <Autocomplete
          {...defaultProps}
          id="auto-select"
          autoSelect
          renderInput={(params) => (
            <TextField {...params} label="autoSelect" variant="standard" />
          )}
        />
        <Autocomplete
          {...defaultProps}
          id="disabled"
          disabled
          renderInput={(params) => (
            <TextField {...params} label="disabled" variant="standard" />
          )}
        />
        <Autocomplete
          {...defaultProps}
          id="disable-portal"
          disablePortal
          renderInput={(params) => (
            <TextField {...params} label="disablePortal" variant="standard" />
          )}
        />
        <Autocomplete
          {...defaultProps}
          id="blur-on-select"
          blurOnSelect
          renderInput={(params) => (
            <TextField {...params} label="blurOnSelect" variant="standard" />
          )}
        />
        <Autocomplete
          {...defaultProps}
          id="clear-on-blur"
          clearOnBlur
          renderInput={(params) => (
            <TextField {...params} label="clearOnBlur" variant="standard" />
          )}
        />
        <Autocomplete
          {...defaultProps}
          id="select-on-focus"
          selectOnFocus
          renderInput={(params) => (
            <TextField {...params} label="selectOnFocus" variant="standard" />
          )}
        />
        <Autocomplete
          {...flatProps}
          id="readOnly"
          disabled
          defaultValue={flatProps.options[1]}
          renderInput={(params) => (
            <TextField {...params} label="Read Only" variant="standard" />
          )}
        />
      </Stack>
    </div>
  );
}

export default PlayGround;
