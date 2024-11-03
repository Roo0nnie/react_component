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

export default function TypographyPage() {
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
              <h2>Typography</h2>
              <p >Use typography to present your design and content as clearly and efficiently as possible.</p>
            </Grid>

          {/* Basic transfer list */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Roboto font</h4>
            <p>Material UI uses the <a href='https://fonts.google.com/specimen/Roboto'>Roboto</a> font by default. Add it to your project via Fontsource, or with the Google Fonts CDN.</p>
          </Grid>

          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Component</h4>
            <h4>Usage</h4>
            <p>The Typography component follows the <a href='https://m2.material.io/design/typography/#type-scale'>Material Design typographic scale</a> that provides a limited set of type sizes that work well together for a consistent layout.</p>
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
                  <Types />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Theme keys</h4>
            <p>In some situations you might not be able to use the Typography component. Hopefully, you might be able to take advantage of the <code><a href='https://mui.com/material-ui/customization/default-theme/?expand-path=$.typography'>typography</a></code> keys of the theme.</p>
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
                  <TypographyTheme />
            </Grid>
          </Grid>
          
        </Grid>
      </Container>
    </>
  );
}
