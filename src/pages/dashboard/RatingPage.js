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

import BasicRating from './rating/basic_rating';
import HalfRating from './rating/rating_precision';
import HoverRating from './rating/hover_feedback';
import RatingSize from './rating/sizes';
import CustomizedRating from './rating/customization';
import RadioGroupRating from './rating/radio_group';
import TextRating from './rating/accessibility';

export default function RatingPage() {
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
              <h2>Rating</h2>
              <p >Ratings provide insight regarding others opinions and experiences, and can allow the user to submit a rating of their own.</p>
            </Grid>

          {/* Basic Ratin */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Basic rating</h4>
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
                  <BasicRating />
            </Grid>
          </Grid>

          {/* Button variants */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Rating precision</h4>
            <p>The rating can display any float number with the value prop. Use the precision prop to define the minimum increment value change allowed.</p>
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
                  <HalfRating />
            </Grid>
          </Grid>

          {/* Hover feedback */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Hover feedback</h4>
            <p>You can display a label on hover to help the user pick the correct rating value. The demo uses the onChangeActive prop.</p>
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
                  <HoverRating />
            </Grid>
          </Grid>

          {/* Sizes */}
          <Grid item sx={12} md={12} lg={12}>
            <h4>Sizes</h4>
            <p>For larger or smaller ratings use the size prop.</p>
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
                  <RatingSize />
            </Grid>
          </Grid>

          {/* Customization */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Customization</h4>
            <p>Here are some examples of customizing the component. You can learn more about this in the <a href='https://mui.com/material-ui/customization/how-to-customize/'>overrides documentation page.</a></p>
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
                  <CustomizedRating />
            </Grid>
          </Grid>

          {/* Radio group */}
          <Grid item xs={12} md={12}>
            <h4>Radio group</h4>
            <p>The rating is implemented with a radio group, set highlightSelectedOnly to restore the natural behavior.</p>
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
                  <RadioGroupRating />
            </Grid>
          </Grid>

          {/* Loading button */}
          <Grid item xs={12} md={12}>
            <h4>Accessibility</h4>
            <p>The accessibility of this component relies on:</p>
            
            <ul style={{padding:"12px"}}>
              <li>A radio group with its fields visually hidden. It contains six radio buttons, one for each star, and another for 0 stars that is checked by default. Be sure to provide a value for the name prop that is unique to the parent form.</li>
              <li>A visually distinct appearance for the rating icons. By default, the rating component uses both a difference of color and shape (filled and empty icons) to indicate the value. In the event that you are using color as the only means to indicate the value, the information should also be also displayed as text, as in this demo. This is important to match success Criterion 1.4.1 of WCAG2.1.</li>
            </ul>
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
                  <TextRating />
            </Grid>
          </Grid>

        
        </Grid>
      </Container>
    </>
  );
}
