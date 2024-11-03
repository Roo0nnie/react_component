import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Stack } from '@mui/material';
// _mock_
import {
  _bankingContacts,
  _bankingCreditCard,
  _bankingRecentTransitions,
} from '../../_mock/arrays';
import { useSettingsContext } from '../../components/settings';
// sections
import {
  BankingContacts,
  BankingWidgetSummary,
  BankingInviteFriends,
  BankingQuickTransfer,
  BankingCurrentBalance,
  BankingBalanceStatistics,
  BankingRecentTransitions,
  BankingExpensesCategories,
} from '../../sections/@dashboard/general/banking';

// ----------------------------------------------------------------------
import Checkboxes from './checkbox/basic_checkbox';
import CheckboxLabels from './checkbox/label';
import SizeCheckboxes from './checkbox/size';
import ColorCheckboxes from './checkbox/color';
import IconCheckboxes from './checkbox/icon';
import ControlledCheckbox from './button_groups/controlled';
import IndeterminateCheckbox from './checkbox/indetermine';
import CheckboxesGroup from './checkbox/formgroup';
import FormControlLabelPosition from './checkbox/label_replacement';
import CustomizedCheckbox from './checkbox/customization';


export default function GeneralBankingPage() {
  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> General: Banking | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          {/* Loading Button */}
          <Grid item xs={12} md={12}>
              <h2>Checkbox</h2>
              <p >Checkboxes allow the user to select one or more items from a set.</p>
              <p >Checkboxes can be used to turn an option on or off.</p>
              <p >If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead.</p>
          </Grid>

          {/* Basic checkboxes */}
          <Grid item xs={12} md={12}>
              <h4>Checkbox</h4>
          </Grid>
          <Grid item xs={12} lg={12}>
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
                  <Checkboxes />
            </Grid>
          </Grid>

          {/* Label */}
          <Grid item xs={12} md={12}>
              <h4>Label</h4>
              <p>You can provide a label to the Checkbox thanks to the FormControlLabel component.</p>
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
                  <CheckboxLabels />
            </Grid>
          </Grid>

          {/* Size */}
          <Grid item  xs={12} md={12}>
                <h4>Size</h4>
                <p>Use the size prop or customize the font size of the svg icons to change the size of the checkboxes.</p>
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
                  <SizeCheckboxes />
            </Grid>
          </Grid>

          {/* Color */}
          <Grid item sx={12} md={12}  lg={12}>
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
                  <ColorCheckboxes />
            </Grid>
          </Grid>

          {/* Icon */}
          <Grid item sx={12} md={12}  lg={12}>
                <h4>Icon</h4>
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
                  <IconCheckboxes />
            </Grid>
          </Grid>

          {/* Controller checkbox */}
          <Grid item sx={12} md={12}  lg={12}>
                <h4>Controlled</h4>
                <p>You can control the checkbox with the checked and onChange props:</p>
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
                  <ControlledCheckbox />
            </Grid>
          </Grid>

          {/* Indetermine checkbox */}
          <Grid item sx={12} md={12}  lg={12}>
            <h4>Indeterminate</h4>
            <p>Indeterminate checkboxes allow the user to indicate that multiple options are selectable, but the exact number of selected options is unknown.</p>
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
                  <IndeterminateCheckbox />
            </Grid>
          </Grid>

          {/* CheckboxesGroup */}
          <Grid item sx={12} md={12}  lg={12}>
            <h4>FormGroup</h4>
            <p>FormGroup is a helpful wrapper used to group selection control components.</p>
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
                  <CheckboxesGroup />
            </Grid>
          </Grid>

          {/* Label placement */}
          <Grid item sx={12} md={12}  lg={12}>
            <h4>FLabel placement</h4>
            <p>You can change the placement of the label:</p>
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
                  <FormControlLabelPosition />
            </Grid>
          </Grid>

          {/* Customization placement */}
          <Grid item sx={12} md={12}  lg={12}>
            <h4>Customization</h4>
            <p>Here is an example of customizing the component. You can learn more about this in the <a href='https://mui.com/material-ui/customization/how-to-customize/'>overrides documentation page.</a></p>
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
                  <CustomizedCheckbox />
            </Grid>
          </Grid>

          


        </Grid>
      </Container>
    </>
  );
}
