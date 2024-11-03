import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { OouiBoldB } from '../buttons/buttons_icon/bold';
import { TablerItalic } from '../buttons/buttons_icon/italic';
import { MaterialSymbolsFormatUnderlined } from '../buttons/buttons_icon/underline';
import { BxsColorFill } from '../buttons/buttons_icon/color_fill';
import { BxsDownArrow } from '../buttons/buttons_icon/dropdown';

export default function ToggleButtonsMultiple() {
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value="bold" aria-label="bold">
        <OouiBoldB />
      </ToggleButton>
      <ToggleButton value="italic" aria-label="italic">
        <TablerItalic />
      </ToggleButton>
      <ToggleButton value="underlined" aria-label="underlined">
        <MaterialSymbolsFormatUnderlined />
      </ToggleButton>
      <ToggleButton value="color" aria-label="color" disabled>
        <BxsColorFill />
        <BxsDownArrow />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
