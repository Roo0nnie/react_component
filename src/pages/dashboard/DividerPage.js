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

import IntroDivider from './divider/introduction';
import DividerVariants from './divider/variant';
import VerticalDividers from './divider/orientation';
import FlexDivider from './divider/flex';
import DividerText from './divider/with_children';
import ListDividers from './divider/customization';
import VerticalDividerMiddle from './divider/icon';

export default function DividerPage() {
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
              <h2>Divider</h2>
              <p >The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy.</p>
            </Grid>

          {/* Basic transfer list */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Introduction</h4>
            <p>The Material UI Divider component renders as a dark gray <code>hr</code> by default, and features several useful props for quick style adjustments.</p>
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
                  <IntroDivider />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Variants</h4>
            <p>The Divider component supports three variants: <code>fullWidth</code> (default), <code>inset</code>, and <code>middle</code>.</p>
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
                  <DividerVariants />
            </Grid>
          </Grid>

          {/* Orientation */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Orientation</h4>
            <p>Use the <code>orientation</code> prop to change the Divider from horizontal to vertical. When using vertical orientation, the Divider renders a <code>div</code> with the corresponding accessibility attributes instead of <code>hr</code> to adhere to the WAI-ARIA <a href='https://www.w3.org/TR/wai-aria-1.2/#separator'>spec</a>.</p>
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
                  <VerticalDividers />
            </Grid>
          </Grid>

          {/* Flex item */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Flex item</h4>
            <p>Use the <code>flexItem</code> prop to display the Divider when its being used in a flex container.</p>
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
                  <FlexDivider />
            </Grid>
          </Grid>

          {/* With children */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>With children</h4>
            <p>Use the <code>textAlign</code> prop to align elements that are wrapped by the Divider.</p>
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
                  <DividerText />
            </Grid>
          </Grid>

          {/* Customization */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Customization</h4>
            <p>When using the Divider to separate items in a List, use the <code>component</code> prop to render it as an <code>li</code>—otherwise it wont be a valid HTML element.</p>
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
                  <ListDividers />
            </Grid>
          </Grid>

          {/* Icon grouping */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Icon grouping</h4>
            <p>The demo below shows how to combine the props <code>variant=middle</code> and <code>orientation=vertical</code>.</p>
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
                  <VerticalDividerMiddle />
            </Grid>
          </Grid>
        
        </Grid>
      </Container>
    </>
  );
}
