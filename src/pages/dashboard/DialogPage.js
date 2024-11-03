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
import SimpleDialogDemo from './dialog/intro';
import AlertDialog from './dialog/alert';
import AlertDialogSlide from './dialog/transition';
import FormDialog from './dialog/form';
import CustomizedDialogs from './dialog/customization';
import FullScreenDialog from './dialog/full';
import MaxWidthDialog from './dialog/optional';
import ResponsiveDialog from './dialog/responsive';
import ConfirmationDialog from './dialog/confirmation';
import CookiesBanner from './dialog/non';
import ScrollDialog from './dialog/draggable';
import ToolpadDialogsNoSnap from './dialog/usedialog';

export default function DialogPage() {
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
              <h2>Dialog</h2>
              <p >Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.</p>
            
            </Grid>

          {/* Basic transfer list */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Introduction</h4>
            <p>Dialogs are implemented using a collection of related components:</p>
            <p style={{ padding:"12px" }}>
              <ul>
                <li>Dialog: the parent component that renders the modal.</li>
                <li>Dialog Title: a wrapper used for the title of a Dialog.</li>
                <li>Dialog Actions: an optional container for a Dialogs Buttons.</li>
                <li>Dialog Content: an optional container for displaying the Dialogs content.</li>
                <li>Dialog Content Text: a wrapper for text inside of {"<DialogContent />"}.</li>
                <li>Slide: optional <a href='https://mui.com/material-ui/transitions/#slide'>Transition</a> used to slide the Dialog in from the edge of the screen.</li>
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
                  <SimpleDialogDemo />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Basics</h4>
            <h4>Alerts</h4>
            <p>Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.</p>
            <p>Most alerts dont need titles. They summarize a decision in a sentence or two by either:</p>
            <p style={{ padding:"12px" }}>
              <ul>
                <li>Asking a question for example {`"Delete this conversation?"`}</li>
                <li>Making a statement related to the action buttons</li> </ul>
            </p>
            <p>Use title bar alerts only for high-risk situations, such as the potential loss of connectivity. Users should be able to understand the choices based on the title and button text alone.</p>
          <p>If a title is required:</p>
          <p style={{ padding:"12px" }}>
              <ul>
                <li>Use a clear question or statement with an explanation in the content area, such as {`"Erase USB storage?"`}.</li>
                <li>Avoid apologies, ambiguity, or questions, such as {`"Warning!"`} or {`"Are you sure?"`}</li> 
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
                  <AlertDialog />
            </Grid>
          </Grid>

            {/* Basic transfer list */}
            <Grid item  xs={12} md={12}  lg={12}>
            <h4>Transitions</h4>
            <p>You can also swap out the transition, the next example uses <code>Slide</code>.</p>
            
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
                  <AlertDialogSlide />
            </Grid>
          </Grid>

           {/* Basic transfer list */}
           <Grid item  xs={12} md={12}  lg={12}>
            <h4>Form dialogs</h4>
            <p>Form dialogs allow users to fill out form fields within a dialog. For example, if your site prompts for potential subscribers to fill in their email address, they can fill out the email field and touch {`'Submit'`}.</p>
            
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
                  <FormDialog />
            </Grid>
          </Grid>

          {/* Basic transfer list */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Customization</h4>
            <p>The dialog has a close button added to aid usability.</p>
            
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
                  <CustomizedDialogs />
            </Grid>
          </Grid>

           {/* Basic transfer list */}
           <Grid item  xs={12} md={12}  lg={12}>
            <h4>Full-screen dialogs</h4>
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
                  <FullScreenDialog />
            </Grid>
          </Grid>

          {/* Basic transfer list */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Optional sizes</h4>
            <p>You can set a dialog maximum width by using the <code>maxWidth</code> enumerable in combination with the <code>fullWidth</code> boolean. When the <code>fullWidth</code> prop is true, the dialog will adapt based on the <code>maxWidth</code> value.</p>
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
                  <MaxWidthDialog />
            </Grid>
          </Grid>

          {/* Basic transfer list */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Responsive full-screen</h4>
            <p>You may make a dialog responsively full screen using <code><a href='https://mui.com/material-ui/react-use-media-query/'>useMediaQuery</a></code>.</p>
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
                  <ResponsiveDialog />
            </Grid>
          </Grid>

          {/* Basic transfer list */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Confirmation dialogs</h4>
            <p>Confirmation dialogs require users to explicitly confirm their choice before an option is committed. For example, users can listen to multiple ringtones but only make a final selection upon touching {`"OK"`}.</p>
          <p>Touching {`"Cancel"`} in a confirmation dialog, cancels the action, discards any changes, and closes the dialog.</p>
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
                  <ConfirmationDialog />
            </Grid>
          </Grid>

          {/* Basic transfer list */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Non-modal dialog</h4>
            <p>Dialogs can also be non-modal, meaning they dont interrupt user interaction behind it. Visit the Nielsen Norman Group article for more in-depth guidance about modal vs. non-modal dialog usage.</p>
          <p>The demo below shows a persistent cookie banner, a common non-modal dialog use case.</p>
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
                  <CookiesBanner />
            </Grid>
          </Grid>

          {/* Basic transfer list */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Scrolling long content</h4>
            <p>When dialogs become too long for the users viewport or device, they scroll.</p> 
            <p style={{ padding:"12px" }}>
              <ul>
                <li><code>scroll=paper</code> the content of the dialog scrolls within the paper element.</li>
                <li><code>scroll=body</code> the content of the dialog scrolls within the body element.</li> 
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
                  <ScrollDialog />
            </Grid>
          </Grid>

          {/* Basic transfer list */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Toolpad (Beta)</h4>
            <h4>useDialogs</h4>
            <p>You can create and manipulate dialogs imperatively with the <code>useDialogs()</code> API in <code>@toolpad/core</code>. This hook handles</p> 
            <p style={{ padding:"12px" }}>
              <ul>
                <li>state management for opening and closing dialogs</li>
                <li>passing data to dialogs and receiving results back from them</li> 
                <li>stacking multiple dialogs</li>
                <li>themed, asynchronous versions of <code>window.alert()</code>, <code>window.confirm()</code> and <code>window.prompt()</code></li>
              </ul>
            </p>
            <p>The following example demonstrates some of these features:</p>
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
                  <ToolpadDialogsNoSnap />
            </Grid>
          </Grid>
          
        </Grid>
      </Container>
    </>
  );
}
