import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { MaterialSymbolsLightBookmark } from '../buttons/buttons_icon/bookmarkedfull';
import { MaterialSymbolsLightBookmarkOutline } from '../buttons/buttons_icon/bookmarked';
import { MaterialSymbolsLightFavorite } from '../buttons/buttons_icon/favoritefull';
import { MaterialSymbolsLightFavoriteOutline } from '../buttons/buttons_icon/favorite';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function IconCheckboxes() {
  return (
    <div>
      <Checkbox {...label} icon={<MaterialSymbolsLightFavoriteOutline />} checkedIcon={<MaterialSymbolsLightFavorite />} />
      <Checkbox
        {...label}
        icon={<MaterialSymbolsLightBookmarkOutline />}
        checkedIcon={<MaterialSymbolsLightBookmark />}
      />
    </div>
  );
}
