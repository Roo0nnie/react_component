import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, InputAdornment } from '@mui/material';
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

import BasicTextFields from './textfield/basic_textfield';
import FormPropsTextFields from './textfield/form_props';
import ValidationTextFields from './textfield/validation';
import MultilineTextFields from './textfield/multiline';
import SelectTextFields from './textfield/select';
import InputWithIcon from './textfield/icon';
import InputAdornments from './textfield/input_adornment';
import TextFieldSizes from './textfield/size';
import TextFieldHiddenLabel from './textfield/size_another';
import LayoutTextFields from './textfield/margin';
import FullWidthTextField from './textfield/fullwidth';
import StateTextFields from './textfield/controlled_uncontrolled';
import ComposedTextField from './textfield/conponent';
import Inputs from './textfield/input';
import ColorTextFields from './textfield/color';
import CustomizedInputsStyled from './textfield/customization';
import CustomizedInputsStyleOverrides from './textfield/overrides_api';
import CustomizedInputBase from './textfield/direction';
import UseFormControl from './textfield/useFormcontrol';
import HelperTextMisaligned from './textfield/helpertext';
import HelperTextAligned from './textfield/helperTextAdd';

export default function TextFieldPage() {
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
              <h2>Text Field</h2>
              <p >Text Fields let users enter and edit text.</p>
            </Grid>

          {/* Basic TextField */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Basic TextField</h4>
            <p>The <code>TextField</code> wrapper component is a complete form control including a label, input, and help text. It comes with three variants: outlined (default), filled, and standard.</p>
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
                  <BasicTextFields />
            </Grid>
          </Grid>

          {/* Form props */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Form props</h4>
            <p>Standard form attributes are supported, for example <code>required</code>, <code>disabled</code>, <code>type</code>, etc. as well as a <code>helperText</code> which is used to give context about a fields input, such as how the input will be used.</p>
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
                  <FormPropsTextFields />
            </Grid>
          </Grid>

          {/* Validation */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Validation</h4>
            <p>The <code>error</code> prop toggles the error state. The <code>helperText</code> prop can then be used to provide feedback to the user about the error.</p>
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
                  <ValidationTextFields />
            </Grid>
          </Grid>

          {/* Multiline */}
          <Grid item sx={12} md={12} lg={12}>
            <h4>Multiline</h4>
            <p>The <code>multiline</code> prop transforms the text field into a <a href='https://mui.com/material-ui/react-textarea-autosize/'>TextareaAutosize</a> element. Unless the <code>rows</code> prop is set, the height of the text field dynamically matches its content (using <a href='https://mui.com/material-ui/react-textarea-autosize/'>TextareaAutosize</a>). You can use the <code>minRows</code> and <code>maxRows</code> props to bound it.</p>
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
                  <MultilineTextFields />
            </Grid>
          </Grid>

          {/* Select */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Select</h4>
            <p>The <code>select</code> prop makes the text field use the <a href='https://mui.com/material-ui/react-select/'>Select</a> component internally.</p>
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
                  <SelectTextFields />
            </Grid>
          </Grid>

          {/* Icons */}
          <Grid item xs={12} md={12}>
            <h4>Icons</h4>
            <p>There are multiple ways to display an icon with a text field.</p>
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
                  <InputWithIcon />
            </Grid>
          </Grid>

          {/* Input Adornments */}
          <Grid item xs={12} md={12}>
            <h4>Input Adornments</h4>
            <p>The main way is with an <code>InputAdornment</code>. This can be used to add a prefix, a suffix, or an action to an input. For instance, you can use an icon button to hide or reveal the password.</p>
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
                  <InputAdornments />
            </Grid>
          </Grid>

          {/* Size */}
          <Grid item xs={12} md={12}>
            <h4>Size</h4>
            <p>Fancy smaller inputs? Use the <code>size</code> prop.</p>
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
                  <TextFieldSizes />
            </Grid>
          </Grid>

          {/* Size */}
          <Grid item xs={12} md={12}>
            <p>The <code>filled</code> variant input height can be further reduced by rendering the label outside of it.</p>
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
                  <TextFieldHiddenLabel />
            </Grid>
          </Grid>

          {/* Margin */}
          <Grid item xs={12} md={12}>
            <h4>Margin</h4>
            <p>The <code>margin</code> prop can be used to alter the vertical spacing of the text field. Using <code>none</code> (default) doesnt apply margins to the <code>FormControl</code> whereas <code>dense</code> and <code>normal</code> do.</p>
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
                  <LayoutTextFields />
            </Grid>
          </Grid>

          {/* Full width */}
          <Grid item xs={12} md={12}>
            <h4>Full width</h4>
            <p><code>fullWidth</code> can be used to make the input take up the full width of its container.</p>
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
                  <FullWidthTextField />
            </Grid>
          </Grid>

          {/* Uncontrolled vs. Controlled */}
          <Grid item xs={12} md={12}>
            <h4>Uncontrolled vs. Controlled</h4>
            <p>The component can be controlled or uncontrolled.</p>
            <p style={{ padding:"12px" }}>
              <ul>
                <li>A component is <strong>controlled</strong> when its managed by its parent using props.</li>
                <li>A component is <strong>uncontrolled</strong> when its managed by its own local state.</li>
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
                  <StateTextFields />
            </Grid>
          </Grid>

          {/* Components */}
          <Grid item xs={12} md={12}>
            <h4>Components</h4>
            <p><code>TextField</code> is composed of smaller components ( <code><a href='https://mui.com/material-ui/api/form-control/'>FormControl</a></code>, <code><a href='https://mui.com/material-ui/api/input/'>Input</a></code>, <code><a href='https://mui.com/material-ui/api/filled-input/'>FilledInput</a></code>, <code><a href='https://mui.com/material-ui/api/input-label/'>InputLabel</a></code>, <code><a href='https://mui.com/material-ui/api/outlined-input/'>OutlinedInput</a></code>, and <code><a href='https://mui.com/material-ui/api/form-helper-text/'>FormHelperText</a></code> ) that you can leverage directly to significantly customize your form inputs.</p>
            <p>You might also have noticed that some native HTML input properties are missing from the <code>TextField</code> component. This is on purpose. The component takes care of the most used properties. Then, its up to the user to use the underlying component shown in the following demo. Still, you can use <code>inputProps</code> (and <code>InputProps</code>, <code>InputLabelProps</code> properties) if you want to avoid some boilerplate.</p>
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
                  <ComposedTextField />
            </Grid>
          </Grid>

          {/* Inputs */}
          <Grid item xs={12} md={12}>
            <h4>Inputs</h4></Grid>
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
                  <Inputs />
            </Grid>
          </Grid>

          {/* Color */}
          <Grid item xs={12} md={12}>
            <h4>Color</h4>
            <p>The color prop changes the highlight color of the text field when focused.</p>
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
                  <ColorTextFields />
            </Grid>
          </Grid>

          {/* Customization */}
          <Grid item xs={12} md={12}>
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
                  <CustomizedInputsStyled />
            </Grid>
          </Grid>

          {/* Using the theme style overrides API */}
          <Grid item xs={12} md={12}>
            <h4>Using the theme style overrides API</h4>
            <p>Use the <code>styleOverrides</code> key to change any style injected by Material UI into the DOM. See the theme style <a href='https://mui.com/material-ui/customization/theme-components/#theme-style-overrides'>overrides documentation for further details.</a></p>
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
                  <CustomizedInputsStyleOverrides />
            </Grid>
          </Grid>

          {/* Using the theme style overrides API */}
          <Grid item xs={12} md={12}>
            <p>Use the <code>styleOverrides</code> key to change any style injected by Material UI into the DOM. See the theme style <a href='https://mui.com/material-ui/customization/theme-components/#theme-style-overrides'>overrides documentation for further details.</a></p>
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
                  <CustomizedInputBase />
            </Grid>
          </Grid>

          {/* useFormControl */}
          <Grid item xs={12} md={12}>
            <h4>useFormControl</h4>
            <p>For advanced customization use cases, a <code>useFormControl()</code> hook is exposed. This hook returns the context value of the parent <code>FormControl</code> component.</p>
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
                  <UseFormControl />
            </Grid>
          </Grid>

          {/* Helper text */}
          <Grid item xs={12} md={12}>
            <h4>Helper text</h4>
            <p>The helper text prop affects the height of the text field. If two text fields are placed side by side, one with a helper text and one without, they will have different heights. For example:</p>
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
                  <HelperTextMisaligned />
            </Grid>
          </Grid>

          {/* Helper text */}
          <Grid item xs={12} md={12}>
            <p>This can be fixed by passing a space character to the <code>helperText</code> prop:</p>
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
                  <HelperTextAligned />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
