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

import HorizontalLinearStepper from './stepper/basic';
import HorizontalNonLinearStepper from './stepper/non';
import HorizontalLinearAlternativeLabelStepper from './stepper/alternative';
import HorizontalStepperWithError from './stepper/error';
import CustomizedSteppers from './stepper/customized';
import VerticalLinearStepper from './stepper/vertical';
import TextMobileStepper from './stepper/text';
import DotsMobileStepper from './stepper/dot';
import ProgressMobileStepper from './stepper/progress';

export default function StepperPage() {
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
              <h2>Stepper</h2>
              <p >Steppers convey progress through numbered steps. It provides a wizard-like workflow.</p>
            </Grid>

          {/* Basic transfer list */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Introduction</h4>
            <p>The Stepper component displays progress through a sequence of logical and numbered steps. It supports horizontal and vertical orientation for desktop and mobile viewports.</p>
          <p>Steppers are implemented using a collection of related components:</p>
          <p style={{ padding:"12px" }}>
            <ul>
              <li>Stepper: the container for the steps.</li>
              <li>Step: an individual step in the sequence.</li>
              <li>Step Label: a label for a Step.</li>
              <li>Step Content: optional content for a Step.</li>
              <li>Step Button: optional button for a Step.</li>
              <li>Step Icon: optional icon for a Step.</li>
              <li>Step Connector: optional customized connector between Steps.</li>
            </ul>
          </p>
          </Grid>

          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Basics</h4>
            <h4>Horizontal stepper</h4>
            <p>Horizontal steppers are ideal when the contents of one step depend on an earlier step.</p>
            <p>Avoid using long step names in horizontal steppers.</p>
            <h4>Linear</h4>
            <h4>A linear stepper allows the user to complete the steps in sequence.</h4>
            <p>The <code>Stepper</code> can be controlled by passing the current step index (zero-based) as the <code>activeStep</code> prop. <code>Stepper</code> orientation is set using the <code>orientation</code> prop.</p>
            <p>This example also shows the use of an <code>optional</code> step by placing the optional prop on the second<code>Step</code> component. Note that its up to you to manage when an optional step is skipped. Once youve determined this for a particular step you must set <code>completed={`{false}`}</code> to signify that even though the active step index has gone beyond the optional step, its not actually complete.</p>
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
                  <HorizontalLinearStepper />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Non-linear</h4>
            <p>Non-linear steppers allow the user to enter a multi-step flow at any point.</p>
         <p>This example is similar to the regular horizontal stepper, except steps are no longer automatically set to <code>disabled={`{true}`}</code> based on the <code>activeStep</code> prop.</p>
          <p>The use of the <code>StepButton</code> here demonstrates clickable step labels, as well as setting the <code>completed</code> flag. However because steps can be accessed in a non-linear fashion, its up to your own implementation to determine when all steps are completed (or even if they need to be completed).</p>
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
                  <HorizontalNonLinearStepper />
            </Grid>
          </Grid>

           {/* Enhanced transfer list */}
           <Grid item xs={12} md={12} lg={12}>
            <h4>Alternative label</h4>
            <p>Labels can be placed below the step icon by setting the <code>alternativeLabel</code> prop on the <code>Stepper</code> component.</p>
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
                  <HorizontalLinearAlternativeLabelStepper />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Error step</h4>
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
                  <HorizontalStepperWithError />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Customized horizontal stepper</h4>
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
                  <CustomizedSteppers />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Vertical stepper</h4>
            <p>Vertical steppers are designed for narrow screen sizes. They are ideal for mobile. All the features of the horizontal stepper can be implemented.</p>
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
                  <VerticalLinearStepper />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Text</h4>
            <p>The current step and total number of steps are displayed as text.</p>
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
                  <TextMobileStepper />
            </Grid>
          </Grid>

           {/* Enhanced transfer list */}
           <Grid item xs={12} md={12} lg={12}>
            <h4>Dots</h4>
            <p>Use dots when the number of steps is small.</p>
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
                  <DotsMobileStepper />
            </Grid>
          </Grid>

           {/* Enhanced transfer list */}
           <Grid item xs={12} md={12} lg={12}>
            <h4>Progress</h4>
            <p>Use a progress bar when there are many steps, or if there are steps that need to be inserted during the process (based on responses to earlier steps).</p>
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
                  <ProgressMobileStepper />
            </Grid>
          </Grid>
          
        </Grid>
      </Container>
    </>
  );
}
