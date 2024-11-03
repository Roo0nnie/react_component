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

import ContinuousSlider from './slider/continues_slider';
import SliderSizes from './slider/sizes';
import DiscreteSlider from './slider/discrete_slider';
import DiscreteSliderSteps from './slider/small_steps';
import DiscreteSliderMarks from './slider/custom_marks';
import DiscreteSliderValues from './slider/restricted_marks';
import DiscreteSliderLabel from './slider/label_visible';
import RangeSlider from './slider/range_slider';
import MinimumDistanceSlider from './slider/minimum_distance';
import InputSlider from './slider/slider_input';
import ColorSlider from './slider/color';
import CustomizedSlider from './slider/customization';
import VerticalSlider from './slider/vertical_slider';
import CustomMarks from './slider/mark_placement';
import TrackFalseSlider from './slider/remove_track';
import TrackInvertedSlider from './slider/inverted_track';
import NonLinearSlider from './slider/non_linear';

export default function SliderPage() {
  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> General: Analytics | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        
        <Grid container spacing={3}>
            {/* Slider */}
            <Grid item xs={12} md={12}>
              <h2>Slider</h2>
              <p>Sliders allow users to make selections from a range of values.</p>
              <p>Sliders reflect a range of values along a bar, from which users may select a single value. They are ideal for adjusting settings such as volume, brightness, or applying image filters.</p>
            </Grid>

          {/* Continuous sliders */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Continuous sliders</h4>
            <p>Continuous sliders allow users to select a value along a subjective range.</p>
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
                  <ContinuousSlider />
            </Grid>
          </Grid>

          {/* Sizes */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Sizes</h4>
            <p>For smaller slider, use the prop <code>size=small</code></p>
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
                  <SliderSizes />
            </Grid>
          </Grid>

          {/* Discrete sliders */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Discrete sliders</h4>
            <p>Discrete sliders can be adjusted to a specific value by referencing its value indicator. You can generate a mark for each step with <code>marks=true.</code></p>
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
                  <DiscreteSlider />
            </Grid>
          </Grid>

          {/* Small steps */}
          <Grid item sx={12} md={12} lg={12}>
            <h4>Small steps</h4>
            <p>You can change the default step increment. Make sure to adjust the shiftStep prop (the granularity with which the slider can step when using Page Up/Down or Shift + Arrow Up/Down) to a value divadable with the <code>step</code>.</p>
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
                  <DiscreteSliderSteps />
            </Grid>
          </Grid>

          {/* Custom marks */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Custom marks</h4>
            <p>You can have custom marks by providing a rich array to the <code>marks</code> prop.</p>
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
                  <DiscreteSliderMarks />
            </Grid>
          </Grid>

          {/* Restricted values */}
          <Grid item xs={12} md={12}>
            <h4>Restricted values</h4>
            <p>You can restrict the selectable values to those provided with the <code>marks</code> prop with <code>step=null</code>.</p>
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
                  <DiscreteSliderValues />
            </Grid>
          </Grid>

          {/* Label always visible */}
          <Grid item xs={12} md={12}>
            <h4>Label always visible</h4>
            <p>You can force the thumb label to be always visible with <code>valueLabelDisplay=on</code>.</p>
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
                  <DiscreteSliderLabel />
            </Grid>
          </Grid>

          {/* Range Slider */}
          <Grid item xs={12} md={12}>
            <h4>Range Slider</h4>
            <p>The slider can be used to set the start and end of a range by supplying an array of values to the <code>value</code> prop.</p>
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
                  <RangeSlider />
            </Grid>
          </Grid>

          {/* Minimum distance */}
          <Grid item xs={12} md={12}>
            <h4>Minimum distance</h4>
            <p>You can enforce a minimum distance between values in the <code>onChange</code> event handler. By default, when you move the pointer over a thumb while dragging another thumb, the active thumb will swap to the hovered thumb. You can disable this behavior with the <code>disableSwap</code> prop. If you want the range to shift when reaching minimum distance, you can utilize the <code>activeThumb</code> parameter in <code>onChange</code>.</p>
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
                  <MinimumDistanceSlider />
            </Grid>
          </Grid>

          {/* Slider with input field */}
          <Grid item xs={12} md={12}>
            <h4>Slider with input field</h4>
            <p>In this example, an input allows a discrete value to be set.</p>
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
                  <InputSlider />
            </Grid>
          </Grid>

          {/* Color */}
          <Grid item xs={12} md={12}>
            <h4>Color</h4>
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
                  <ColorSlider />
            </Grid>
          </Grid>

          {/* Customization */}
          <Grid item xs={12} md={12}>
            <h4>Slider with input field</h4>
            <p>Here are some examples of customizing the component. You can learn more about this in the <a href='https://mui.com/material-ui/customization/how-to-customize/'>overrides documentation page</a>.</p>
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
                  <CustomizedSlider />
            </Grid>
          </Grid>

          {/* Vertical sliders */}
          <Grid item xs={12} md={12}>
            <h4>Vertical sliders</h4>
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
                  <VerticalSlider />
            </Grid>
          </Grid>

          {/* Marks placement */}
          <Grid item xs={12} md={12}>
            <h4>Marks placement</h4>
            <p>You can customize your slider by adding and repositioning marks for minimum and maximum values.</p>
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
                  <CustomMarks />
            </Grid>
          </Grid>

          {/* Track */}
          <Grid item xs={12} md={12}>
            <h4>Track</h4>
            <p>The track shows the range available for user selection.</p>
          </Grid>

          {/* Removed track */}
          <Grid item xs={12} md={12}>
            <h4>Removed track</h4>
            <p>The track can be turned off with <code>track=false</code>.</p>
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
                  <TrackFalseSlider />
            </Grid>
          </Grid>

          {/* Inverted track */}
          <Grid item xs={12} md={12}>
            <h4>Inverted track</h4>
            <p>The track can be inverted with <code>track=inverted</code>.</p>
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
                  <TrackInvertedSlider />
            </Grid>
          </Grid>

          {/* Inverted track */}
          <Grid item xs={12} md={12}>
            <h4>Non-linear scale</h4>
            <p>You can use the <code>scale</code> prop to represent the <code>value</code> on a different scale.</p>
            <p>In the following demo, the value x represents the value 2^x. Increasing x by one increases the represented value by factor 2.</p>
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
                  <NonLinearSlider />
            </Grid>
          </Grid>

        
        </Grid>
      </Container>
    </>
  );
}
