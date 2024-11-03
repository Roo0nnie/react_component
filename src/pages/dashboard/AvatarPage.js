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

import ImageAvatars from './avatar/image_avatar';
import LetterAvatars from './avatar/letter_avatar';
import BackgroundLetterAvatars from './avatar/letter_avatar-another';
import SizeAvatars from './avatar/size';
import IconAvatars from './avatar/icon_avatar';
import VariantAvatars from './avatar/variant';
import FallbackAvatars from './avatar/fallback';
import GroupAvatars from './avatar/group';
import TotalAvatars from './avatar/total';
import CustomSurplusAvatars from './avatar/custom';
import BadgeAvatars from './avatar/with_badge';

export default function AvatarPage() {
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
              <h2>Avatar</h2>
              <p >Avatars are found throughout material design with uses in everything from tables to dialog menus.</p>
            </Grid>

          {/* Image avatars */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Image avatars</h4>
            <p>Image avatars can be created by passing standard <code>img</code> props <code>src</code> or <code>srcSet</code> to the component.</p>
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
                  <ImageAvatars />
            </Grid>
          </Grid>

          {/* Letter avatars */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Letter avatars</h4>
            <p>Avatars containing simple characters can be created by passing a string as <code>children</code>.</p>
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
                  <LetterAvatars />
            </Grid>
          </Grid>

          {/* Letter avatars */}
          <Grid item xs={12} md={12} lg={12}>
            <p>You can use different background colors for the avatar. The following demo generates the color based on the name of the person.</p>
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
                  <BackgroundLetterAvatars />
            </Grid>
          </Grid>

          {/* Size */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Size</h4>
            <p>You can change the size of the avatar with the <code>height</code> and <code>width</code> CSS properties.</p>
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
                  <SizeAvatars />
            </Grid>
          </Grid>

           {/* Icon avatar */}
           <Grid item xs={12} md={12} lg={12}>
            <h4>Icon Avatar</h4>
            <p>Icon avatars are created by passing an icon as <code>children</code>.</p>
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
                  <IconAvatars />
            </Grid>
          </Grid>

          {/* variant */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Variant</h4>
            <p>If you need square or rounded avatars, use the <code>variant</code> prop.</p>
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
                  <VariantAvatars />
            </Grid>
          </Grid>

           {/* Fallbacks */}
           <Grid item xs={12} md={12} lg={12}>
            <h4>Fallbacks</h4>
            <p>If there is an error loading the avatar image, the component falls back to an alternative in the following order:</p>
            <p style={{ padding:"12px" }}>
              <ul>
                <li>the provided children</li>
                <li>the first letter of the <code>alt</code> text</li>
                <li>a generic avatar icon</li>
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
                  <FallbackAvatars />
            </Grid>
          </Grid>

          {/* Group */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Group</h4>
            <p><code>AvatarGroup</code> renders its children as a stack. Use the <code>max</code> prop to limit the number of avatars.</p>
            
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
                  <GroupAvatars />
            </Grid>
          </Grid>

          {/* Total Avatar */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Total Avatars</h4>
            <p>If you need to control the total number of avatars not shown, you can use the <code>total</code> prop.</p>
            
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
                  <TotalAvatars />
            </Grid>
          </Grid>

          {/* Custom surplus */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Custom surplus</h4>
            <p>Set the <code>renderSurplus</code> prop as a callback to customize the surplus avatar. The callback will receive the surplus number as an argument based on the children and the <code>max</code> prop, and should return a <code>React.ReactNode</code>.</p>
            <p>The <code>renderSurplus</code> prop is useful when you need to render the surplus based on the data sent from the server.</p>
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
                  <CustomSurplusAvatars />
            </Grid>
          </Grid>

          {/* With badge */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>With badge</h4> </Grid>
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
                  <BadgeAvatars />
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
