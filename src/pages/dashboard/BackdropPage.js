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

import SimpleBackdrop from './backdrop/example';

export default function BackdropPage() {
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
              <h2>Backdrop</h2>
              <p >The Backdrop component narrows the users focus to a particular element on the screen.</p>
            <p>The Backdrop signals a state change within the application and can be used for creating loaders, dialogs, and more. In its simplest form, the Backdrop component will add a dimmed layer over your application.</p>
            </Grid>

          {/* Basic transfer list */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Example</h4>
            <p>The demo below shows a basic Backdrop with a Circular Progress component in the foreground to indicate a loading state. After clicking <strong>Show Backdrop</strong>, you can click anywhere on the page to close it.</p>
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
                  <SimpleBackdrop />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
