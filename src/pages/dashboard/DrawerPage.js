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

import Types from './typography/component';
import TypographyTheme from './typography/theme';
import TemporaryDrawer from './drawer/temporary';
import AnchorTemporaryDrawer from './drawer/anchor';
import SwipeableTemporaryDrawer from './drawer/Swipeable';
import SwipeableEdgeDrawer from './drawer/edge';
import ResponsiveDrawer from './drawer/responsive';

export default function DrawerPage() {
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
              <h2>Drawer</h2>
              <p >The navigation drawers {`(or "sidebars")`} provide ergonomic access to destinations in a site or app functionality such as switching accounts.</p>
            <p>A navigation drawer can either be permanently on-screen or controlled by a navigation menu icon.</p>
            </Grid>

          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Temporary drawer</h4>
            <p>Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected.</p>
            <p>The Drawer can be cancelled by clicking the overlay or pressing the Esc key. It closes when an item is selected, handled by controlling the <code>open</code> prop.</p>
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
                  <TemporaryDrawer />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Anchor</h4>
            <p>Use the <code>anchor</code> prop to specify which side of the screen the Drawer should originate from.</p>
          <p>The default value is <code>left</code>.</p>
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
                  <AnchorTemporaryDrawer />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Swipeable</h4>
            <p>You can make the drawer swipeable with the <code>SwipeableDrawer</code> component.</p>
          <p>This component comes with a 2 kB gzipped payload overhead. Some low-end mobile devices wont be able to follow the fingers at 60 FPS. You can use the <code>disableBackdropTransition</code> prop to help.</p>
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
                  <SwipeableTemporaryDrawer />
            </Grid>
          </Grid>

          
          
          
        </Grid>
      </Container>
    </>
  );
}
