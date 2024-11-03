import { Helmet } from 'react-helmet-async';
import { useState, useCallback } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Box, Stack, Typography } from '@mui/material';


// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useResponsive from '../../hooks/useResponsive';
// _mock
import { _folders, _files } from '../../_mock/arrays';
// components
import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar';
import { UploadBox } from '../../components/upload';
import { useSettingsContext } from '../../components/settings';
// sections

// ----------------------------------------------------------------------
import RadioButtonsGroup from './radio_group/radio_group';
import RowRadioButtonsGroup from './radio_group/direction';
import ControlledRadioButtonsGroup from './radio_group/controlled';
import RadioButtons from './radio_group/standalone';
import SizeRadioButtons from './radio_group/size';
import ColorRadioButtons from './radio_group/color';
import FormControlLabelPlacement from './radio_group/label_placement';
import ErrorRadios from './radio_group/show_error';
import CustomizedRadios from './radio_group/customization';

export default function GeneralFilePage() {

  const { themeStretch } = useSettingsContext();


  return (
    <>
      <Helmet>
        <title> General: File | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
            <h2>Radio Group</h2>
            <p >The Radio Group allows the user to select one option from a set.</p>
            <p>RadioGroup is a helpful wrapper used to group Radio components that provides an easier API, and proper keyboard accessibility to the group.</p>
        </Grid>

          {/* Radio Group */}
          <Grid item xs={12} md={6} lg={12}>
            <Grid item sx={{
                  p: 2,
                  border: '1px solid #ccc',
                  borderRadius: '16px',
                  boxShadow: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '100%',
                  backgroundColor: "#f2f2f0",
                }}>
                  <RadioButtonsGroup />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Direction</h4>
            <p >To lay out the buttons horizontally, set the row prop:</p>
          </Grid>
          {/* Direction Group */}
          <Grid item xs={12} md={6} lg={12}>
            <Grid item sx={{
                  p: 2,
                  border: '1px solid #ccc',
                  borderRadius: '16px',
                  boxShadow: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '100%',
                  backgroundColor: "#f2f2f0",
                }}>
                  <RowRadioButtonsGroup />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Controlled</h4>
            <p >You can control the radio with the value and onChange props:</p>
          </Grid>
          {/* Controlled Group */}
          <Grid item xs={12} md={6} lg={12}>
            <Grid item sx={{
                  p: 2,
                  border: '1px solid #ccc',
                  borderRadius: '16px',
                  boxShadow: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '100%',
                  backgroundColor: "#f2f2f0",
                }}>
                  <ControlledRadioButtonsGroup />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Standalone radio buttons</h4>
            <p >Radio can also be used standalone, without the RadioGroup wrapper.</p>
          </Grid>
          {/* Standalone radio buttons Group */}
          <Grid item xs={12} md={6} lg={12}>
            <Grid item sx={{
                  p: 2,
                  border: '1px solid #ccc',
                  borderRadius: '16px',
                  boxShadow: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '100%',
                  backgroundColor: "#f2f2f0",
                }}>
                  <RadioButtons />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Size</h4>
            <p >Use the size prop or customize the font size of the svg icons to change the size of the radios.</p>
          </Grid>
          {/* Size Group */}
          <Grid item xs={12} md={6} lg={12}>
            <Grid item sx={{
                  p: 2,
                  border: '1px solid #ccc',
                  borderRadius: '16px',
                  boxShadow: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '100%',
                  backgroundColor: "#f2f2f0",
                }}>
                  <SizeRadioButtons />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Color</h4>
          </Grid>
          {/* Color Group */}
          <Grid item xs={12} md={6} lg={12}>
            <Grid item sx={{
                  p: 2,
                  border: '1px solid #ccc',
                  borderRadius: '16px',
                  boxShadow: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '100%',
                  backgroundColor: "#f2f2f0",
                }}>
                  <ColorRadioButtons />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Label Placement</h4>
            <p>You can change the placement of the label with the FormControlLabel components labelPlacement prop:</p>
          </Grid>
          {/* Label placement Group */}
          <Grid item xs={12} md={6} lg={12}>
            <Grid item sx={{
                  p: 2,
                  border: '1px solid #ccc',
                  borderRadius: '16px',
                  boxShadow: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '100%',
                  backgroundColor: "#f2f2f0",
                }}>
                  <FormControlLabelPlacement />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Show Error</h4>
            <p>In general, radio buttons should have a value selected by default. If this is not the case, you can display an error if no value is selected when the form is submitted:</p>
          </Grid>
          {/* Show Group */}
          <Grid item xs={12} md={6} lg={12}>
            <Grid item sx={{
                  p: 2,
                  border: '1px solid #ccc',
                  borderRadius: '16px',
                  boxShadow: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '100%',
                  backgroundColor: "#f2f2f0",
                }}>
                  <ErrorRadios />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Customization</h4>
            <p>Here is an example of customizing the component. You can learn more about this in the <a href='https://mui.com/material-ui/customization/how-to-customize/'>overrides documentation page.</a></p>
          </Grid>
          {/* Show Group */}
          <Grid item xs={12} md={6} lg={12}>
            <Grid item sx={{
                  p: 2,
                  border: '1px solid #ccc',
                  borderRadius: '16px',
                  boxShadow: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '100%',
                  backgroundColor: "#f2f2f0",
                }}>
                  <CustomizedRadios />
            </Grid>
          </Grid>
        </Grid>
      </Container>

      
    </>
  );
}
