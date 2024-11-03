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
import CircularIndeterminate from './progress/circular';
import CircularColor from './progress/color';
import CircularSize from './progress/size';
import CircularDeterminate from './progress/determine';
import CircularIntegration from './progress/interactive';
import CircularWithValueLabel from './progress/with_label';
import LinearIndeterminate from './progress/linear';
import LinearColor from './progress/line_color';
import LinearDeterminate from './progress/linear_determinate';
import LinearBuffer from './progress/linear_buffer';
import LinearWithValueLabel from './progress/linear_label';
import CustomizedProgressBars from './progress/customization';
import DelayingAppearance from './progress/delay';
import CircularUnderLoad from './progress/limitation';

export default function ProgressPage() {
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
              <h2>Progress</h2>
              <p >Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.</p>
              <p>Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.</p>
              <p style={{padding:"12px"}}>
              <ul>
                <li><strong>Determinate</strong> indicators display how long an operation will take.</li>
                <li><strong>Indeterminate</strong> indicators visualize an unspecified wait time.</li>
            </ul>
              </p>
              <p>The animations of the components rely on CSS as much as possible to work even before the JavaScript is loaded.</p>
            </Grid>

          {/* Basic transfer list */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Circular</h4>
            <h4>Circular indeterminate</h4>
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
                  <CircularIndeterminate />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Circular color</h4></Grid>
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
                  <CircularColor />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4>Circular size</h4></Grid>
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
                  <CircularSize />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4>Circular determinate</h4></Grid>
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
                  <CircularDeterminate />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4>Interactive integration</h4></Grid>
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
                  <CircularIntegration />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4>Circular with label</h4></Grid>
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
                  <CircularWithValueLabel />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
              <h4>Linear</h4>
              <h4>Linear indeterminate</h4>
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
                  <LinearIndeterminate />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
              <h4>Line Color</h4>
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
                  <LinearColor />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
              <h4>Linear determinate</h4>
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
                  <LinearDeterminate />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
              <h4>Linear buffer</h4>
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
                  <LinearBuffer />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
              <h4>Linear with label</h4>
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
                  <LinearWithValueLabel />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
              <h4>Customization</h4>
              <p>Here are some examples of customizing the component. <a href='https://mui.com/material-ui/customization/how-to-customize/'>Overrides documentation page.</a></p>
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
                  <CustomizedProgressBars />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
              <h4>Delaying appearance</h4>
              <p>There are 3 important limits to know around response time. The ripple effect of the ButtonBase component ensures that the user feels that the UI is reacting instantaneously. Normally, no special feedback is necessary during delays of more than 0.1 but less than 1.0 second. After 1.0 second, you can display a loader to keep users flow of thought uninterrupted.
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
                  <DelayingAppearance />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
              <h4>Limitations</h4>
              <h4>High CPU load</h4>
              <p>Under heavy load, you might lose the stroke dash animation or see random <code>CircularProgress</code> ring widths. You should run processor intensive operations in a web worker or by batch in order not to block the main rendering thread.</p>
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
                  <CircularUnderLoad />
            </Grid>
          </Grid>
          
        </Grid>
      </Container>
    </>
  );
}
