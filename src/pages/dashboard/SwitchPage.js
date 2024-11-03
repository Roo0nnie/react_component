import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// _mock_
import { _analyticPost, _analyticOrderTimeline, _analyticTraffic } from '../../_mock/arrays';
// components
import { useSettingsContext } from '../../components/settings';
// sections
import {
  AnalyticsTasks,
  AnalyticsNewsUpdate,
  AnalyticsOrderTimeline,
  AnalyticsCurrentVisits,
  AnalyticsWebsiteVisits,
  AnalyticsTrafficBySite,
  AnalyticsWidgetSummary,
  AnalyticsCurrentSubject,
  AnalyticsConversionRates,
} from '../../sections/@dashboard/general/analytics';

// ----------------------------------------------------------------------
import BasicButtonGroup from './button_groups/basic_button_groups';
import VariantButtonGroup from './button_groups/button_variant';
import GroupSizesColors from './button_groups/sizes_colors';
import GroupOrientation from './button_groups/vertical_groups';
import SplitButton from './button_groups/split_button';
import DisableElevation from './button_groups/disabled_elevation';
import LoadingButtons from './button_groups/loading_button';
import BasicSwitches from './switch/basic_switch';
import SwitchLabels from './switch/label';
import SwitchesSize from './switch/size';
import ColorSwitches from './switch/color';
import ControlledSwitches from './switch/controlled';
import SwitchesGroup from './switch/switches_group';
import FormControlLabelPosition from './switch/label_placement';
import CustomizedSwitches from './switch/customization';

export default function SwitchPage() {
  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> General: Analytics | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        
        <Grid container spacing={3}>
            {/* Loading Button */}
            <Grid item xs={12} md={12}>
              <h2>Switch</h2>
              <p >Switches toggle the state of a single setting on or off.</p>
              <p>Switches are the preferred way to adjust settings on mobile. The option that the switch controls, as well as the state its in, should be made clear from the corresponding inline label.</p>
            </Grid>

          {/* Basic switches */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Basic switches</h4>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
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
                  <BasicSwitches />
            </Grid>
          </Grid>

          {/* Basic switches */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Label</h4>
            <p>You can provide a label to the <code>Switch</code> thanks to the <code>FormControlLabel</code> component.</p>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
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
                  <SwitchLabels />
            </Grid>
          </Grid>

          {/* Basic switches */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Size</h4>
            <p>Use the <code>size</code> prop to change the size of the switch.</p>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
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
                  <SwitchesSize />
            </Grid>
          </Grid>

          {/* Color */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Color</h4>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
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
                  <ColorSwitches />
            </Grid>
          </Grid>

           {/* Controlled */}
           <Grid item  xs={12} md={12}  lg={12}>
            <h4>Controlled</h4>
            <p>You can control the switch with the <code>checked</code> and <code>onChange</code> props:</p>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
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
                  <ControlledSwitches />
            </Grid>
          </Grid>

           {/* Controlled */}
           <Grid item  xs={12} md={12}  lg={12}>
            <h4>Switches with FormGroup</h4>
            <p><code>FormGroup</code> is a helpful wrapper used to group selection controls components that provides an easier API. However, you are encouraged to use <a href='https://mui.com/material-ui/react-checkbox/'>Checkboxes</a> instead if multiple related controls are required.</p>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
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
                  <SwitchesGroup />
            </Grid>
          </Grid>


            {/* Customization */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Customization</h4>
            <p>Here are some examples of customizing the component. You can learn more about this in the <a href='https://mui.com/material-ui/customization/how-to-customize/'>overrides documentation page.</a></p>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
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
                  <CustomizedSwitches />
            </Grid>
          </Grid>

          {/* Label placement */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Label placement</h4>
            <p>You can change the placement of the label:</p>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
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
                  <FormControlLabelPosition />
            </Grid>
          </Grid>

         
          

          
         
         
          

        
        </Grid>
      </Container>
    </>
  );
}
