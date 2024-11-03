import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, BadgeMark } from '@mui/material';
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

import SimpleBadge from './badge/basic_badge';
import ColorBadge from './badge/color';
import CustomizedBadges from './badge/customization';
import BadgeVisibility from './badge/badge_visibility';
import ShowZeroBadge from './badge/badge_another';
import BadgeMax from './badge/maximum';
import DotBadge from './badge/dot';
import BadgeOverlap from './badge/badge_overlap';
import AccessibleBadges from './badge/accessibility';

export default function BadgePage() {
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
              <h2>Badge</h2>
              <p >Badge generates a small badge to the top-right of its child(ren).</p>
            </Grid>

          {/* Simple */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Basic badge</h4>
            <p>Examples of badges containing text, using primary and secondary colors. The badge is applied to its children.</p>
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
                  <SimpleBadge />
            </Grid>
          </Grid>

          {/* color */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Color</h4>
            <p>Use <code>color</code> prop to apply theme palette to component.</p>
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
                  <ColorBadge />
            </Grid>
          </Grid>

          {/* Customization */}
          <Grid item xs={12} md={12} lg={12}>
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
                  <CustomizedBadges />
            </Grid>
          </Grid>

          {/* Badge visibility */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Badge visibility</h4>
            <p>The visibility of badges can be controlled using the <code>invisible</code> prop.</p>
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
                  <BadgeVisibility />
            </Grid>
          </Grid>

          {/* Badge visibility */}
          <Grid item xs={12} md={12} lg={12}>
            <p>The badge hides automatically when <code>badgeContent</code> is zero. You can override this with the <code>showZero</code> prop.</p>
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
                  <ShowZeroBadge />
            </Grid>
          </Grid>

          {/* Maximum value */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Maximum value</h4>
            <p>You can use the <code>max</code> prop to cap the value of the badge content.</p>
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
                  <BadgeMax />
            </Grid>
          </Grid>

          {/* Dot badge */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Dot badge</h4>
            <p>The dot prop changes a badge into a small <code>dot</code>. This can be used as a notification that something has changed without giving a count.</p>
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
                  <DotBadge />
            </Grid>
          </Grid>

          {/* Badge overlap */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Badge overlap</h4>
            <p>You can use the <code>overlap</code> prop to place the badge relative to the corner of the wrapped element.</p>
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
                  <BadgeOverlap />
            </Grid>
          </Grid>

          {/* Accessibility */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Accessibility</h4>
            <p>You cant rely on the content of the badge to be announced correctly. You should provide a full description, for instance, with <code>aria-label</code>:</p>
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
                  <AccessibleBadges />
            </Grid>
          </Grid>



          

          



        
        </Grid>
      </Container>
    </>
  );
}
