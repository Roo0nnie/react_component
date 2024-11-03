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

import SimpleAlert from './alert/intro';
import BasicAlerts from './alert/severity';
import FilledAlerts from './alert/filled';
import OutlinedAlerts from './alert/outline';
import ColorAlerts from './alert/color';
import ActionAlerts from './alert/action';
import IconAlerts from './alert/icon';
import DescriptionAlerts from './alert/title';
import TransitionAlerts from './alert/transition';

export default function AlertPage() {
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
              <h2>Alert</h2>
              <p >Alerts display brief messages for the user without interrupting their use of the app.</p>
            </Grid>

          {/* Basic transfer list */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Introduction</h4>
            <p>Alerts give users brief and potentially time-sensitive information in an unobtrusive manner.</p>
            <p>The Material UI Alert component includes several props for quickly customizing its styles to provide immediate visual cues about its contents.</p>
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
                  <SimpleAlert />
            </Grid>
          </Grid>

          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Usage</h4>
            <p>A key trait of the alert pattern is that <a href='https://www.w3.org/WAI/ARIA/apg/patterns/alert/'>it should not interrupt the users experience</a> of the app. Alerts should not be confused with alert dialogs (ARIA), which are intended to interrupt the user to obtain a response. Use the Material UI Dialog component if you need this behavior.</p>
          </Grid>

          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Severity</h4>
            <p>The <code>severity</code> prop accepts four values representing different states—<code>success</code> (the default), <code>info</code>, <code>warning</code>, and <code>error</code> with corresponding icon and color combinations for each:</p>
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
                  <BasicAlerts />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Variants</h4>
            <p>The Alert component comes with two alternative style options—<code>filled</code> and outlined—which you can set using the <code>variant</code> prop.Filled</p>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <h4>Filled</h4>
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
                  <FilledAlerts />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4>Outlined</h4>
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
                  <OutlinedAlerts />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4>Color</h4>
            <p>Use the <code>color</code> prop to override the default color for the specified <code>severity</code>-for instance, to apply <code>warning</code> colors to a <code>success</code> Alert:</p>
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
                  <ColorAlerts />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4>Actions</h4>
            <p>Add an <code>action</code> to your Alert with the action prop. This lets you insert any element—an HTML tag, an SVG icon, or a React component such as a Material UI Button—after the Alerts message, justified to the right.</p>
            <p> you provide an <code>onClose</code> callback to the Alert without setting the <code>action</code> prop, the component will display a close icon (✕) by default.</p>
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
                  <ActionAlerts />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4>Icons</h4>
            <p>Use the <code>icon</code> prop to override an Alerts icon. As with the <code>action</code> prop, your <code>icon</code> can be an HTML element, an SVG icon, or a React component. Set this prop to <code>false</code> to remove the icon altogether.</p>
            <p>If you need to override all instances of an icon for a given <code>severity</code>, you can use the <code>iconMapping</code> prop instead. You can define this prop globally by customizing your apps theme.</p>
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
                  <IconAlerts />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4>Customization</h4>
            <h4>Titles</h4>
            <p>To add a title to an Alert, import the Alert Title component:</p>
            <p>You can nest this component above the message in your Alert for a neatly styled and properly aligned title, as shown below:</p>
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
                  <DescriptionAlerts />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4>Transitions</h4>
            <p>You can use <code><a href='https://mui.com/material-ui/transitions/'>Transition</a></code> components like <code> <a href='https://mui.com/material-ui/transitions/#collapse'>Collapse</a></code> to add motion to an Alerts entrance and exit.</p>
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
                  <TransitionAlerts />
            </Grid>
          </Grid>
          
        </Grid>
      </Container>
    </>
  );
}
