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
import BasicButtonGroup from './button_groups/basic_button_groups';
import VariantButtonGroup from './button_groups/button_variant';
import GroupSizesColors from './button_groups/sizes_colors';
import GroupOrientation from './button_groups/vertical_groups';
import SplitButton from './button_groups/split_button';
import DisableElevation from './button_groups/disabled_elevation';
import LoadingButtons from './button_groups/loading_button';

import BasicSelect from './select/basic_select';
import SelectVariants from './select/filled_variant';
import SelectLabels from './select/labels_helper';
import SelectAutoWidth from './select/auto_width';
import SelectSmall from './select/small_size';
import SelectOtherProps from './select/other_props';
import NativeSelectDemo from './select/native_select';
import CustomizedSelects from './select/customization';
import MultipleSelect from './select/default';
import MultipleSelectCheckmarks from './select/checkmarks';
import MultipleSelectChip from './select/chips';
import MultipleSelectPlaceholder from './select/placeholder';
import MultipleSelectNative from './select/native';
import ControlledOpenSelect from './select/controlled_state';
import DialogSelect from './select/with_dialog';
import GroupedSelect from './select/grouping';

export default function SelectPage() {
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
              <h2>Select</h2>
              <p >Select components are used for collecting user provided information from a list of options.</p>
            </Grid>

          {/* Basic select Group */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Basic select</h4>
            <p>Menus are positioned under their emitting elements, unless they are close to the bottom of the viewport.</p>
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
                  <BasicSelect />
            </Grid>
          </Grid>

          {/* Advanced features */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Advanced features</h4>
            <p>The Select component is meant to be interchangeable with a native <code>select</code> element.</p>
            <p>If you are looking for more advanced features, like combobox, multiselect, autocomplete, async or creatable support, head to the <a href='https://mui.com/material-ui/react-autocomplete/'>Autocomplete component</a>. Its meant to be an improved version of the <code>react-select</code> and <code>downshift</code> packages.</p>
          </Grid>

          {/* Props features */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Props</h4>
            <p>The Select component is implemented as a custom <code>input</code> element of the <a href='https://mui.com/material-ui/api/input-base/'>InputBase</a>. It extends the <a href='https://mui.com/material-ui/react-text-field/'>text field components</a> subcomponents, either the <a href='https://mui.com/material-ui/api/outlined-input/'>OutlinedInput</a>, <a href='https://mui.com/material-ui/api/input/'>Input</a>, or <a href='https://mui.com/material-ui/api/filled-input/'>FilledInput</a>, depending on the variant selected. It shares the same styles and many of the same props. Refer to the respective components API page for details.</p>
          </Grid>

          {/* Filled and standard variants */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Filled and standard variants</h4>
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
                  <SelectVariants />
            </Grid>
          </Grid>

          {/* Labels and helper text */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Labels and helper text</h4>
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
                  <SelectLabels />
            </Grid>
          </Grid>

          {/* Auto width */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Auto width</h4>
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
                  <SelectAutoWidth />
            </Grid>
          </Grid>

         
           {/*  Small Size */}
           <Grid item xs={12} md={12} lg={12}>
            <h4>Small Size</h4>
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
                  <SelectSmall />
            </Grid>
          </Grid>
          
          {/*  Other props */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Other props</h4>
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
                  <SelectOtherProps />
            </Grid>
          </Grid>

          {/* Native select */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Native select</h4>
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
                  <NativeSelectDemo />
            </Grid>
          </Grid>

          {/* TextField */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>TextField</h4>
            <p>The <code>TextField</code> wrapper component is a complete form control including a label, input and help text. You can find an example with the select mode <a href='https://mui.com/material-ui/react-text-field/#select'>in this section.</a></p>
          </Grid>

          {/* Customization */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Customization</h4>
            <p>Here are some examples of customizing the component. You can learn more about this in the <a href='https://mui.com/material-ui/customization/how-to-customize'>overrides documentation page.</a></p>
            <p>The first step is to style the <code>InputBase</code> component. Once its styled, you can either use it directly as a text field or provide it to the select <code>input</code> prop to have a <code>select</code> field. Notice that the <code>standard</code> variant is easier to customize, since it does not wrap the contents in <code>fieldset</code>/<code>legend</code> a markup.</p>
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
                  <CustomizedSelects />
            </Grid>
          </Grid>

          {/* Multiple select */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Multiple select</h4>
            <p>The <code>Select</code> component can handle multiple selections. Its enabled with the <code>multiple</code> prop.</p>
            <p>Like with the single selection, you can pull out the new value by accessing <code>event.target.value</code> in the <code>onChange</code> callback. Its always an array.</p>
          </Grid>

          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Default</h4>
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
                  <MultipleSelect />
            </Grid>
          </Grid>

          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Checkmarks</h4>
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
                  <MultipleSelectCheckmarks />
            </Grid>
          </Grid>

          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Chips</h4>
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
                  <MultipleSelectChip />
            </Grid>
          </Grid>

          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Placeholder</h4>
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
                  <MultipleSelectPlaceholder />
            </Grid>
          </Grid>

          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Native</h4>
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
                  <MultipleSelectNative />
            </Grid>
          </Grid>

          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Controlling the open state</h4>
            <p>You can control the <code>open</code> state of the select with the open prop. Alternatively, it is also possible to set the initial (uncontrolled) open state of the component with the <code>defaultOpen</code> prop.</p>
            <p style={{ padding:"12px" }}>
              <ul>
                <li>A component is <strong>controlled</strong> when its managed by its parent using props.</li>
                <li>A component is <strong>uncontrolled</strong> when its not managed by its own local state</li>
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
                  <ControlledOpenSelect />
            </Grid>
          </Grid>

          {/* With a dialog */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>With a dialog</h4>
            <p>While its discouraged by the Material Design guidelines, you can use a select inside a dialog.</p>
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
                  <DialogSelect />
            </Grid>
          </Grid>

          {/* Grouping */}
          <Grid item xs={12} md={12}>
            <h4>Grouping</h4>
            <p>Display categories with the <code>ListSubheader</code> component or the native <code>optgroup</code> element.</p>
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
                  <GroupedSelect />
            </Grid>
          </Grid>

         
        </Grid>
      </Container>
    </>
  );
}
