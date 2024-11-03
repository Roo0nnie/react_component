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

export default function GeneralAnalyticsPage() {
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
              <h2>Button Group</h2>
              <p >The ButtonGroup component can be used to group related buttons.</p>
            </Grid>

          {/* Basic Button Group */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Basic Button Group</h4>
            <p>The buttons can be grouped by wrapping them with the ButtonGroup component. They need to be immediate children.</p>
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
                  <BasicButtonGroup />
            </Grid>
          </Grid>

          

          {/* Button variants */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Button variants</h4>
            <p>All the standard button variants are supported.</p>
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
                  <VariantButtonGroup />
            </Grid>
          </Grid>

          {/* Sizes And Colors */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Sizes and colors</h4>
            <p>The size and color props can be used to control the appearance of the button group.</p>
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
                  <GroupSizesColors />
            </Grid>
          </Grid>

          {/* Vertical Groups */}
          <Grid item sx={12} md={12} lg={12}>
            <h4>Vertical group</h4>
            <p>The button group can be displayed vertically using the orientation prop.</p>
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
                  <GroupOrientation />
            </Grid>
          </Grid>

          {/* Split button */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Split button</h4>
            <p>ButtonGroup can also be used to create a split button. The dropdown can change the button action or be used to immediately trigger a related action.</p>
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
                  <SplitButton />
            </Grid>
          </Grid>

          {/* Disabled elevation */}
          <Grid item xs={12} md={12}>
            <h4>Disabled elevation</h4>
            <p>You can remove the elevation with the disableElevation prop.</p>
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
                  <DisableElevation />
            </Grid>
          </Grid>

          {/* Loading button */}
          <Grid item xs={12} md={12}>
            <h4>Loading button</h4>
            <p>You can use the <a href='https://mui.com/material-ui/react-button/#loading-button'>LoadingButton</a> from <a href='https://mui.com/material-ui/about-the-lab/'>@mui/lab</a> in the button group.</p>
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
                  <LoadingButtons />
            </Grid>
          </Grid>

        
        </Grid>
      </Container>
    </>
  );
}
