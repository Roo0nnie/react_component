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

import BasicTabs from './tab/basic';
import LabTabs from './tab/api';
import TabsWrappedLabel from './tab/wrapper';
import ColorTabs from './tab/color';
import DisabledTabs from './tab/diabled';
import FullWidthTabs from './tab/fixed';
import CenteredTabs from './tab/centered';
import ScrollableTabsButtonAuto from './tab/scrollable';
import ScrollableTabsButtonForce from './tab/force';
import ScrollableTabsButtonVisible from './tab/force_another';
import ScrollableTabsButtonPrevent from './tab/prevent';
import CustomizedTabs from './tab/customize';
import VerticalTabs from './tab/vertical';
import NavTabs from './tab/nav';
import IconTabs from './tab/icon';
import IconLabelTabs from './tab/icon_with';
import IconPositionTabs from './tab/icon_position';
import AccessibleTabs1 from './tab/demo';
import AccessibleTabs2 from './tab/demo_another';

export default function TabPage() {
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
              <h2>Tabs</h2>
              <p >Tabs make it easy to explore and switch between different views.</p>
            </Grid>

          {/* Basic transfer list */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Introduction</h4>
            <p>Tabs are implemented using a collection of related components:</p>
            <p style={{ padding:"12px" }}>
            <ul>
              <li><code>{`<Tab />`}</code> - the tab element itself. Clicking on a tab displays its corresponding panel.</li>
              <li><code>{`<Tabs />`}</code> - the container that houses the tabs. Responsible for handling focus and keyboard navigation between tabs.</li>
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
                  <BasicTabs />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Experimental API</h4>
            <p>@mui/lab offers utility components that inject props to implement accessible tabs following</p>
            <p style={{ padding:"12px" }}>
            <ul>
              <li><code>{`<TabList />`}</code> -  the card that hosts the content associated with a tab.</li>
              <li><code>{`<TabPanel />`}</code> - the container that houses the tabs. Responsible for handling focus and keyboard navigation between tabs.</li>
              <li><code>{`<TabContext />`}</code> -  the top-level component that wraps the Tab List and Tab Panel components.</li>
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
                  <LabTabs />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Wrapped labels</h4>
            <p>Long labels will automatically wrap on tabs. If the label is too long for the tab, it will overflow, and the text will not be visible.</p>
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
                  <TabsWrappedLabel />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Colored tab</h4> 
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
                  <ColorTabs />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Disabled tab</h4> 
            <p>A tab can be disabled by setting the <code>disabled</code> prop.</p>
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
                  <DisabledTabs />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Fixed tabs</h4> 
            <p>Fixed tabs should be used with a limited number of tabs, and when a consistent placement will aid muscle memory.</p>
            <h4>Full width</h4> 
            <p>The {`variant="fullWidth"`} prop should be used for smaller views.</p>
            
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
                  <FullWidthTabs />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
          <h4>Centered</h4> 
            <p>The <code>centered</code> prop should be used for larger views.</p>
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
                  <CenteredTabs />
            </Grid>
          </Grid>

           {/* Enhanced transfer list */}
           <Grid item xs={12} md={12} lg={12}>
          <h4>Scrollable tabs</h4> 
          <h4>Automatic scroll buttons</h4>
          <p>Use the {`variant="scrollable"`} and {`scrollButtons="auto"`} props to display left and right scroll buttons on desktop that are hidden on mobile:</p>
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
                  <ScrollableTabsButtonAuto />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
          <h4>Forced scroll buttons</h4> 
          <p>Apply <code>{`scrollButtons={true}`}</code> and the <code>allowScrollButtonsMobile</code> prop to display the left and right scroll buttons on all viewports:</p>
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
                  <ScrollableTabsButtonForce />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
          <p>If you want to make sure the buttons are always visible, you should customize the opacity.</p>
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
                  <ScrollableTabsButtonVisible />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4>Prevent scroll buttons</h4>
          <p>Left and right scroll buttons are never be presented with <code>{`scrollButtons={false}`}</code>. All scrolling must be initiated through user agent scrolling mechanisms (for example left/right swipe, shift mouse wheel, etc.)</p>
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
                  <ScrollableTabsButtonPrevent />
            </Grid>
          </Grid>

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
                  <CustomizedTabs />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4>Vertical tabs</h4>
          <p>To make vertical tabs instead of default horizontal ones, there is <code>{`orientation="vertical"`}:</code></p>
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
                  <VerticalTabs />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4>Nav tabs</h4>
          <p>By default, tabs use a <code>button</code> element, but you can provide your custom tag or component. Heres an example of implementing tabbed navigation:</p>
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
                  <NavTabs />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4>Icon tabs</h4>
          <p>Tab labels may be either all icons or all text.</p>
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
                  <IconTabs />
            </Grid>
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
                  <IconLabelTabs />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4>Icon position</h4>
          <p>By default, the icon is positioned at the <code>top</code> of a tab. Other supported positions are <code>start, end, bottom</code>.</p>
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
                  <IconPositionTabs />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4>Demo</h4>
          <p>The following two demos only differ in their keyboard navigation behavior. Focus a tab and navigate with arrow keys to notice the difference, for example <code>Arrow Left </code>.</p>
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
                  <AccessibleTabs1 />
            </Grid>
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
                  <AccessibleTabs2 />
            </Grid>
          </Grid>
          
          


          
        </Grid>
      </Container>
    </>
  );
}
