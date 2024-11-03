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

import Links from './link/basic';
import UnderlineLink from './link/underline';
import ButtonLink from './link/accessibility';

export default function LinkPage() {
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
              <h2>Links</h2>
              <p >The Link component allows you to easily customize anchor elements with your theme colors and typography styles</p>
            </Grid>

          {/* Basic transfer list */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Basic links</h4>
            <p>The Link component is built on top of the <a href='https://mui.com/material-ui/api/typography/'>Typography</a> component, meaning that you can use its props.</p>
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
                  <Links />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Underline</h4>
            <p>The underline prop can be used to set the <code>underline</code> behavior. The default is <code>always</code>.</p>
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
                  <UnderlineLink />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Accessibility</h4>
            <p><a href='(WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/patterns/link/)'>(WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/patterns/link/)</a></p>
          <p style={{ padding: "12px" }}>
            <ul>
              <li>When providing the content for the link, avoid generic descriptions like {`"click here"`} or {`"go to"`}. Instead, use specific descriptions.</li>
            <li>For the best user experience, links should stand out from the text on the page. For instance, you can keep the default <code>underline={`"always"`}</code> behavior.</li>
           <li>If a link doesnt have a meaningful href, it should be rendered using a {`<button>`} element. The demo below illustrates how to properly link with a <code>{`<button>`}</code>:</li>
            </ul>
          </p>
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
                  <ButtonLink />
            </Grid>
          </Grid>
          
        </Grid>
      </Container>
    </>
  );
}
