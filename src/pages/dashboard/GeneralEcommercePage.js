import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button } from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// _mock_
import {
  _ecommerceNewProducts,
  _ecommerceSalesOverview,
  _ecommerceBestSalesman,
  _ecommerceLatestProducts,
} from '../../_mock/arrays';
// components
import { useSettingsContext } from '../../components/settings';
// sections
import {
  EcommerceNewProducts,
  EcommerceYearlySales,
  EcommerceBestSalesman,
  EcommerceSaleByGender,
  EcommerceWidgetSummary,
  EcommerceSalesOverview,
  EcommerceLatestProducts,
  EcommerceCurrentBalance,
} from '../../sections/@dashboard/general/e-commerce';
import { AppWelcome } from '../../sections/@dashboard/general/app';
// assets
import { MotivationIllustration } from '../../assets/illustrations';

// ----------------------------------------------------------------------
import BasicButtons from './buttons/basic_buttons';
import TextButtons from './buttons/text_buttons';
import ContainedButtons from './buttons/contained_button';
import OutlinedButtons from './buttons/outlined_buttons';
import ColorButtons from './buttons/colors';
import ButtonSizes from './buttons/sizes';
import IconLabelButtons from './buttons/buttons_with_icons';
import IconButtons from './buttons/icons_button';
import IconButtonSizes from './buttons/button_sizes';
import IconButtonColors from './buttons/fingerprints';
import InputFileUpload from './buttons/file_upload';
import ButtonBaseDemo from './buttons/complex_button';
import LoadingButtons from './buttons/loading_button';
import LoadingButtonsTransition from './buttons/toggle_buttons';

export default function GeneralEcommercePage() {
  const { user } = useAuthContext();

  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> General: E-commerce | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <h2>Button</h2>
            <p>Buttons allow users to take actions, and make choices, with a single tap.</p>
            <p>Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:</p>
            <ol>
              <li>Modal windows</li>
              <li>Forms</li>
              <li>Cards</li>
              <li>Toolbars</li>
            </ol>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4>Basic Button</h4>
            <p>The Button comes with three variants: text (default), contained, and outlined.</p>
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
              <BasicButtons />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4>Text Button</h4>
            <p><a href='https://m2.material.io/components/buttons#text-button'>Text buttons</a> are typically used for less-pronounced actions, including those located: in dialogs, in cards. In cards, text buttons help maintain an emphasis on card content.</p>
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
              <TextButtons />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4>Contained Button</h4>
            <p><a href='https://m2.material.io/components/buttons#contained-button'>Contained buttons</a> are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.</p>
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
              <ContainedButtons />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4>Outlined Button</h4>
            <p><a href='https://m2.material.io/components/buttons#outlined-button'>Outlined buttons</a> are medium-emphasis, distinguished by their use of elevation and fill. They contain actions that are secondary to your app.</p>
            <p>Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons.</p>
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
              <OutlinedButtons />
            </Grid>
          </Grid>


          {/* Handling Clicks */}
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
              <ColorButtons />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Sizes</h4>
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
              <ButtonSizes />
            </Grid>
          </Grid>


          {/* Buttons with icons and label */}
          <Grid item xs={12} md={12}>
            <h4>Buttons with icons and label</h4>
            <p>Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.</p>
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
                  <IconLabelButtons />
            </Grid>
          </Grid>

         
          <Grid item xs={12} md={12}>
            <h4>Icon button</h4>
            <p>Icon buttons are commonly found in app bars and toolbars.</p>
            <p>Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item.</p>
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
                  <IconButtons />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Sizes</h4>
            <p>For larger or smaller icon buttons, use the size prop.</p>
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
                  <IconButtonSizes />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Color</h4>
            <p>Use color prop to apply theme color palette to component.</p>
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
                  <IconButtonColors />
            </Grid>
          </Grid>

          {/* File Upload */}
          <Grid item xs={12} md={12}>
            <h4>File Upload</h4>
            <p>To create a file upload button, turn the button into a label using component=label and then create a visually-hidden input with type file.</p>
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
                  <InputFileUpload />
            </Grid>
          </Grid>

          {/* File Upload */}
          <Grid item xs={12} md={12}>
            <h4>Complex Button</h4>
            <p>The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the ButtonBase. You can take advantage of this lower-level component to build custom interactions.</p>
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
                  <ButtonBaseDemo />
            </Grid>
          </Grid>

                {/* Loading Button */}
          <Grid item xs={12} md={12}>
            <h4>Loading Buttons</h4>
            <p><a href='https://mui.com/material-ui/about-the-lab/'>@mui/lab</a> offers loading buttons that can show loading state and disable interactions.</p>
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
                  <LoadingButtons />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
          <h4>Toggle Buttons</h4>
            <p> Toggle the loading switch to see the transition between the different states.</p>
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
                  <LoadingButtonsTransition />
            </Grid>
          </Grid>



        

         

          

         

          

          

         

         
         

         
        </Grid>
      </Container>
    </>
  );
}
