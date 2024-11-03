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


import TransferList from './trasfer_list/basic_transfer';
import SelectAllTransferList from './trasfer_list/enchance_transfer';
import SvgIconChildren from './svg-icon/svg-icon';
import SvgIconsColor from './svg-icon/color';
import SvgIconsSize from './svg-icon/size';
import CreateSvgIcon from './svg-icon/createSvg';
import FontAwesomeSvgIconDemo from './svg-icon/fontawesome';
import Icons from './svg-icon/font_material';
import TwoToneIcons from './svg-icon/custom';

export default function IconsPage() {
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
              <h2>Icon</h2>
              <p >Guidance and suggestions for using icons with Material UI.</p>
              <p>Material UI provides icon support in three ways:</p>
              <p style={{ padding:"12px" }}>
                <ul>
                  <li>With Material Icons exported as React components (SVG icons).</li>
                  <li>With the SvgIcon component, a React wrapper for custom SVG icons.</li>
                  <li>With the Icon component, a React wrapper for custom font icons.</li>
                </ul>
              </p>
            </Grid>

          {/* SvgIcon */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>SvgIcon</h4>
            <p>If you need a custom SVG icon (not available in the <a href='https://mui.com/material-ui/material-icons/'>Material Icons</a>) you can use the SvgIcon wrapper. This component extends the native <code>svg</code> element:</p>
            <p style={{ padding:"12px" }}>
                <ul>
                  <li>It comes with built-in accessibility.</li>
                  <li>SVG elements should be scaled for a 24x24px viewport so that the resulting icon can be used as is, or included as a child for other Material UI components that use icons. This can be customized with the <code>viewBox</code> attribute. To inherit the <code>viewBox</code> value from the original image, the <code>inheritViewBox</code> prop can be used.</li>
                  <li>By default, the component inherits the current color. Optionally, you can apply one of the theme colors using the <code>color</code> prop.</li>
                  <li>It supports <code>svg</code> element as a child so you can copy and paste your SVG directly to <code>SvgIcon</code> component.</li>
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
                  <SvgIconChildren />
            </Grid>
          </Grid>

          {/* SvgIcon */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Color</h4></Grid>
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
                  
                  <SvgIconsColor />
            </Grid>
          </Grid>

          {/* SvgIcon */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Color</h4></Grid>
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
                  
                  <SvgIconsSize />
            </Grid>
          </Grid>

          {/* createSvgIcon */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>createSvgIcon</h4>
            <p>The <code>createSvgIcon</code> utility component is used to create the Material Icons. It can be used to wrap an <code>svg</code> element or an SVG path which is passed as a child to the <code>SvgIcon</code> component.</p>
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
                  <CreateSvgIcon />
            </Grid>
          </Grid>

          {/* Font Awesome */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Font Awesome</h4>
            <p>If you find that there are layout issues when using FontAwesomeIcon from <code>@fortawesome/react-fontawesome</code>, you can try passing the Font Awesome SVG data directly to SvgIcon.</p>
            <p>Below is a comparison of the <code>FontAwesomeIcon</code> component and a wrapped <code>SvgIcon</code> component.</p>
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
                  <FontAwesomeSvgIconDemo />
            </Grid>
          </Grid>

          {/* Font Material Icons */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Font Material Icons</h4>
            <p><code>Icon</code> will by default set the correct base class name for the Material Icons font (filled variant). All you need to do is load the font, for instance, via Google Web Fonts:</p>
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
                  <Icons />
            </Grid>
          </Grid>

          {/* Font Material Icons */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Custom font</h4>
            <p>For other fonts, you can customize the baseline class name using the <code>baseClassName</code> prop. For instance, you can display two-tone icons with Material Design:</p>
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
                  <TwoToneIcons />
            </Grid>
          </Grid>

          


          



        
        </Grid>
      </Container>
    </>
  );
}
