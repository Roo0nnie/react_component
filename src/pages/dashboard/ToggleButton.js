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
import ToggleButtons from './toggle/exclusive';
import ToggleButtonsMultiple from './toggle/multiple';
import ToggleButtonSizes from './toggle/size';
import ColorToggleButton from './toggle/color';
import VerticalToggleButtons from './toggle/vertical_buttons';
import ToggleButtonNotEmpty from './toggle/enforce';
import StandaloneToggleButton from './toggle/standalone';
import CustomizedDividers from './toggle/customization';

export default function ToggleButtonPage() {
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
              <h2>Toggle Button</h2>
              <p >A Toggle Button can be used to group related options.</p>
              <p>To emphasize groups of related Toggle buttons, a group should share a common container. The <code>ToggleButtonGroup</code> controls the selected state of its child buttons when given its own value prop.</p>
            </Grid>

          {/* Exclusive selection */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Exclusive selection</h4>
            <p>With exclusive selection, selecting one option deselects any other.</p>
            <p>In this example, text justification toggle buttons present options for left, center, right, and fully justified text (disabled), with only one item available for selection at a time.</p>
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
                  <ToggleButtons />
            </Grid>
          </Grid>

          {/* Multiple selection */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Multiple selection</h4>
            <p>Multiple selection allows for logically-grouped options, like bold, italic, and underline, to have multiple options selected.</p>
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
                  <ToggleButtonsMultiple />
            </Grid>
          </Grid>

          {/* Size */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Size</h4>
            <p>For larger or smaller buttons, use the <code>size</code> prop.</p>
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
                  <ToggleButtonSizes />
            </Grid>
          </Grid>

          {/* Color */}
          <Grid item sx={12} md={12} lg={12}>
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
                  <ColorToggleButton />
            </Grid>
          </Grid>

          {/* Vertical buttons */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Vertical buttons</h4>
            <p>The buttons can be stacked vertically with the <code>orientation</code> prop set to <code>vertical</code>.</p>
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
                  <VerticalToggleButtons />
            </Grid>
          </Grid>

          {/* Enforce value set */}
          <Grid item xs={12} md={12}>
            <h4>Enforce value set</h4>
            <p>If you want to enforce that at least one button must be active, you can adapt your handleChange function.</p>
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
                  <ToggleButtonNotEmpty />
            </Grid>
          </Grid>

          {/* Standalone toggle button */}
          <Grid item xs={12} md={12}>
            <h4>Standalone toggle button</h4></Grid>
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
                  <StandaloneToggleButton />
            </Grid>
          </Grid>
          
          {/* Customization */}
          <Grid item xs={12} md={12}>
            <h4>Customization</h4>
            <p>Here is an example of customizing the component. You can learn more about this in the <a href='https://mui.com/material-ui/customization/how-to-customize/'>overrides documentation page</a>.</p>
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
                  <CustomizedDividers />
            </Grid>
          </Grid>

        
        </Grid>
      </Container>
    </>
  );
}
