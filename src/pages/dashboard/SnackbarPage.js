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

import SimpleSnackbar from './snackbar/intro';
import PositionedSnackbar from './snackbar/position';
import LongTextSnackbar from './snackbar/content';
import AutohideSnackbar from './snackbar/automatic';
import TransitionsSnackbar from './snackbar/transition';
import CustomizedSnackbars from './snackbar/customization';
import FabIntegrationSnackbar from './snackbar/floating';
import ConsecutiveSnackbars from './snackbar/common';
import IntegrationNotistack from './snackbar/third_party';

export default function SnackbarPage() {
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
              <h2>Snackbar</h2>
              <p >Snackbars (also known as toasts) are used for brief notifications of processes that have been or will be performed.</p>
            </Grid>

          {/* Basic transfer list */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Introduction</h4>
            <p>The Snackbar component appears temporarily and floats above the UI to provide users with (non-critical) updates on an apps processes. The demo below, inspired by Google Keep, shows a basic Snackbar with a text element and two actions:</p>
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
                  <SimpleSnackbar />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Basics</h4>
            <h4>Position</h4>
            <p>Use the <code>anchorOrigin</code> prop to control the Snackbars position on the screen.</p>
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
                  <PositionedSnackbar />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Content</h4>
            <p>Use the Snackbar Content component to add text and actions to the Snackbar.</p>
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
                  <LongTextSnackbar />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Automatic dismiss</h4>
            <p>Use the <code>autoHideDuration</code> prop to automatically trigger the Snackbars <code>onClose</code> function after a set period of time (in milliseconds).</p>
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
                  <AutohideSnackbar />
            </Grid>
          </Grid>
          
          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Transitions</h4>
            <p>You can use the <code>TransitionComponent</code> prop to change the transition of the Snackbar from Grow (the default) to others such as Slide.</p>
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
                  <TransitionsSnackbar />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Customization</h4>
            <h4>Use with Alerts</h4>
            <p>Use an Alert inside a Snackbar for messages that communicate a certain severity.</p>
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
                  <CustomizedSnackbars />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Use with Floating Action Buttons</h4>
            <p>If youre using a <code>Floating Action Button</code> on mobile, Material Design recommends positioning snackbars directly above it, as shown in the demo below:</p>
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
                  <FabIntegrationSnackbar />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Use with Floating Action Buttons</h4>
            <h4>Consecutive Snackbars</h4>
            <p>This demo shows how to display multiple Snackbars without stacking them by using a consecutive animation.</p>
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
                  <ConsecutiveSnackbars />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Third-party integrations</h4>
            <h4>notistack</h4>
            <p>With an imperative API, <a href='https://github.com/iamhosseindhv/notistack'>notistack</a> lets you vertically stack multiple Snackbars without having to handle their open and close states. Even though this is discouraged in the Material Design guidelines, it is still a common pattern.</p>
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
                  <IntegrationNotistack />
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
