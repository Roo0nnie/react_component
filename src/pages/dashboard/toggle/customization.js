import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import { WpfAlignleft } from '../buttons/buttons_icon/aling-left';
import { WpfAligncenter } from '../buttons/buttons_icon/align-center';
import { WpfAlignright } from '../buttons/buttons_icon/align-right';
import { WpfAlignjustify } from '../buttons/buttons_icon/align-justify';
import { OouiBoldB } from '../buttons/buttons_icon/bold';
import { TablerItalic } from '../buttons/buttons_icon/italic';
import { MaterialSymbolsFormatUnderlined } from '../buttons/buttons_icon/underline';
import { BxsColorFill } from '../buttons/buttons_icon/color_fill';
import { BxsDownArrow } from '../buttons/buttons_icon/dropdown';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
      marginLeft: -1,
      borderLeft: '1px solid transparent',
    },
}));

export default function CustomizedDividers() {
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <Paper
        elevation={0}
        sx={(theme) => ({
          display: 'flex',
          border: `1px solid ${theme.palette.divider}`,
          flexWrap: 'wrap',
        })}
      >
        <StyledToggleButtonGroup
          size="small"
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
          <ToggleButton value="justify" aria-label="justified" disabled>
            <WpfAlignjustify />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
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
        </StyledToggleButtonGroup>
      </Paper>
    </div>
  );
}
