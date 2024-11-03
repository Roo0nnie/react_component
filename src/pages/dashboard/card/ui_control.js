import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { MaterialSymbolsSkipNext } from '../buttons/buttons_icon/next';
import { LineMdPlayFilled } from '../buttons/buttons_icon/play';
import { MaterialSymbolsSkipPrevious } from '../buttons/buttons_icon/previous';



export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Die With A Smile
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            Bruno Mars & Lady Gaga
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <MaterialSymbolsSkipNext /> : <MaterialSymbolsSkipPrevious />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <LineMdPlayFilled sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <MaterialSymbolsSkipPrevious /> : <MaterialSymbolsSkipNext />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/assets/images/avatars/song_1.jpg"
        alt="Die With A Smile"
      />
    </Card>
  );
}
