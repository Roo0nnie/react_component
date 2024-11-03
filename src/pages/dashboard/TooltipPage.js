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


import BasicTooltip from './tooltip/basic';
import PositionedTooltips from './tooltip/position';
import CustomizedTooltips from './tooltip/customization';
import ArrowTooltips from './tooltip/arrow';
import TooltipOffset from './tooltip/distance_anchor';
import TooltipMargin from './tooltip/anchor';
import TriggersTooltips from './tooltip/trigger';
import ControlledTooltips from './tooltip/controlled';
import VariableWidth from './tooltip/variable';
import NonInteractiveTooltips from './tooltip/interactive';
import DisabledTooltips from './tooltip/disabled';
import TransitionsTooltips from './tooltip/transition';
import FollowCursorTooltips from './tooltip/follow';
import AnchorElTooltips from './tooltip/virtual';
import DelayTooltips from './tooltip/show_hide';

export default function TooltipPage() {
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
              <h2>Tooltip</h2>
              <p >Tooltips display informative text when users hover over, focus on, or tap an element.</p>
            </Grid>

          {/* Basic transfer list */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Basic tooltip</h4></Grid>
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
                  <BasicTooltip />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Positioned tooltips</h4>
            <p>The <code>Tooltip</code>  has 12 placement choices. They dont have directional arrows; instead, they rely on motion emanating from the source to convey direction. checkbox and adds a counter.</p>
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
                  <PositionedTooltips />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Customization</h4>
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
                  <CustomizedTooltips />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Arrow tooltips</h4>
            <p>You can use the <code>arrow</code> prop to give your tooltip an arrow indicating which element it refers to.</p>
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
                  <ArrowTooltips />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Distance from anchor</h4>
            <p>To adjust the distance between the tooltip and its anchor, you can use the <code>slotProps</code> prop to modify the <a href='https://popper.js.org/docs/v2/modifiers/offset/'>offset</a> of the popper.</p>
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
                  <TooltipOffset />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
             <p>Alternatively, you can use the <code>slotProps</code> prop to customize the margin of the popper.</p>
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
                  <TooltipMargin />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Triggers</h4>
            <p>You can define the types of events that cause a tooltip to show.</p>
            <p>The touch action requires a long press due to the <code>enterTouchDelay</code> prop being set to 700ms by default.</p>
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
                  <TriggersTooltips />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Controlled tooltips</h4>
            <p>You can use the <code>open</code>, <code>onOpen</code> and <code>onClose</code> props to control the behavior of the tooltip.</p> </Grid>
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
                  <ControlledTooltips />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Variable width</h4>
            <p>The <code>Tooltip</code> wraps long text by default to make it readable.</p></Grid>
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
                  <VariableWidth />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Interactive</h4>
            <p>Tooltips are interactive by default (to pass <a href='https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus'>WCAG 2.1 success criterion 1.4.13</a>). It wont close when the user hovers over the tooltip before the <code>leaveDelay</code> is expired. You can disable this behavior (thus failing the success criterion which is required to reach level AA) by passing <code>disableInteractive</code>.</p>
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
                  <NonInteractiveTooltips />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Disabled elements</h4>
            <p>By default disabled elements like <code>button</code> do not trigger user interactions so a <code>Tooltip</code> will not activate on normal events like hover. To accommodate disabled elements, add a simple wrapper element, such as a <code>span</code>.</p>
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
                  <DisabledTooltips />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Transitions</h4>
            <p>Use a different transition.</p>
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
                  <TransitionsTooltips />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Follow cursor</h4>
            <p>You can enable the tooltip to follow the cursor by setting <code>followCursor=true</code>.</p>
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
                  <FollowCursorTooltips />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Virtual element</h4>
            <p>In the event you need to implement a custom placement, you can use the <code>anchorEl</code> prop: The value of the <code>anchorEl</code> prop can be a reference to a fake DOM element. You need to create an object shaped like the <a href='https://popper.js.org/docs/v2/virtual-elements/'>VirtualElement</a>.</p>
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
                  <AnchorElTooltips />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Showing and hiding</h4>
            <p>The tooltip is normally shown immediately when the users mouse hovers over the element, and hides immediately when the users mouse leaves. A delay in showing or hiding the tooltip can be added through the <code>enterDelay</code> and <code>leaveDelay</code> props.</p>
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
                  <DelayTooltips />
            </Grid>
          </Grid>
        
        </Grid>
      </Container>
    </>
  );
}
