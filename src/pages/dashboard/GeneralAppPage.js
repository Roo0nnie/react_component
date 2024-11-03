import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack, Button } from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// _mock_
import {
  _appFeatured,
  _appAuthors,
  _appInstalled,
  _appRelated,
  _appInvoices,
} from '../../_mock/arrays';
// components
import { useSettingsContext } from '../../components/settings';
// sections
import {
  AppWidget,
  AppWelcome,
  AppFeatured,
  AppNewInvoice,
  AppTopAuthors,
  AppTopRelated,
  AppAreaInstalled,
  AppWidgetSummary,
  AppCurrentDownload,
  AppTopInstalledCountries,
} from '../../sections/@dashboard/general/app';
// assets
import { SeoIllustration } from '../../assets/illustrations';
import OptionalStrucTitle from './general_app_page/combo_box/title';
import OptionalStruc from './general_app_page/combo_box/option_structure';
import CountrySelect from './general_app_page/combo_box/country_select';
import PlayGround from './general_app_page/combo_box/playground';
import ControllableStates from './general_app_page/combo_box/controlled_state';
import SearchInput from './general_app_page/free_solo/search_Input';
import Grouped from './general_app_page/general/group';
import DisabledOptions from './general_app_page/general/disabled_options';
import CustomizedHook from './general_app_page/use_autocomplete.js/customized_hook';
import UseAutocomplete from './general_app_page/use_autocomplete.js/useAutocomplete';
import Tags from './general_app_page/multiple_values/multiple_values';
import FixedTags from './general_app_page/multiple_values/fixed_options';
import LimitTags from './general_app_page/multiple_values/limit_tags';
import Sizes from './general_app_page/general/size';
import FreeSoloCreateOption from './general_app_page/creatable';
import Asynchronous from './general_app_page/use_autocomplete.js/load_onopen';
import CheckboxesTags from './general_app_page/multiple_values/checkbox';
import GloballyCustomizedOptions from './general_app_page/general/global_custom';
import GitHubLabel from './general_app_page/general/github_picker';
import AutocompleteHint from './general_app_page/general/hint';
import Highlights from './general_app_page/general/highlights';
import Filter from './general_app_page/general/custom_filter';

// ----------------------------------------------------------------------

export default function GeneralAppPage() {
  const { user } = useAuthContext();

  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> General: App | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <OptionalStrucTitle/>
          </Grid>
          {/* Combo Box */}

          {/* Loading button */}
          <Grid item xs={12} md={12}>
            <h4>Combo Box</h4>
            <p>The value must be chosen from a predefined set of allowed values.</p>
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
                  <OptionalStruc />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Country select</h4>
            <p>Choose one of the 3 countries.</p>
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
                  <CountrySelect />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Playground</h4>
            <p>Each of the following examples demonstrates one feature of the Autocomplete component.</p>
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
                  <PlayGround />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Controlled states</h4>
            <p>These two states are isolated, and should be controlled independently.</p>
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
                  <ControllableStates />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Free solo</h4>
            <p>Set freeSolo to true so the textbox can contain any arbitrary value.</p>
            <h4>Search input</h4>
            <p>The prop is designed to cover the primary use case of a search input with suggestions.</p>
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
                  <SearchInput />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Creatable</h4>
            <p>If you intend to use this mode for a combo box like experience (an enhanced version of a select element) we recommend setting:</p>
              <p style={{ padding:"12px" }}>
                <ul>
                  <li><code>selectOnFocus</code> to help the user clear the selected value.</li>
                  <li><code>clearOnBlur</code> to help the user enter a new value.</li>
                  <li><code>handleHomeEndKeys</code> to move focus inside the popup with the <code>Home</code> and <code>End</code> keys.</li>
                  <li>A last option, for instance: Add <code>{`"YOUR SEARCH"`}</code>.</li>
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
                  <FreeSoloCreateOption />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Grouped</h4>
            <p>You can group the options with the groupBy prop. If you do so, make sure that the options are also sorted with the same dimension that they are grouped by, otherwise, you will notice duplicate headers.</p>
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
                  <Grouped />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Disabled options</h4></Grid>
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
                  <DisabledOptions />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>UseAutocomplete</h4>
            <p>For advanced customization use cases, a headless <code>useAutocomplete()</code> hook is exposed. It accepts almost the same options as the Autocomplete component minus all the props related to the rendering of JSX. The Autocomplete component is built on this hook.</p>
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
                  <UseAutocomplete />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Customized hook</h4> 
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
                  <CustomizedHook />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Asynchronous requests</h4> 
            <p>The component supports two different asynchronous use-cases:</p>
            <p style={{ padding:"12px" }}>
                <ul>
                  <li><code>Load on open: </code> it waits for the component to be interacted with to load the options.</li>
                  <li><code>Search as you type:</code>  a new request is made for each keystroke.</li>
                </ul>
              </p>
          </Grid>
          <Grid item xs={12} md={12}>
            <h4>Load on open</h4> 
            <p>It displays a progress state as long as the network request is pending.</p>
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
                  <Asynchronous />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Search as you type</h4> 
            <p>If your logic is fetching new options on each keystroke and using the current value of the textbox to filter on the server, you may want to consider throttling requests.</p>
            <p>Additionally, you will need to disable the built-in filtering of the <code>Autocomplete</code> component by overriding the <code>filterOptions</code> prop:</p>
            </Grid>

          <Grid item xs={12} md={12}>
            <h4>Multiple values</h4>
            <p>Also known as tags, the user is allowed to enter more than one value.</p>
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
                  <Tags />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Multiple values</h4>
            <p>Also known as tags, the user is allowed to enter more than one value.</p>
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
                  <Tags />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Fixed options</h4> </Grid>
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
                  <FixedTags />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Checkboxes</h4> </Grid>
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
                  <CheckboxesTags />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <h4>Limit tags</h4> </Grid>
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
                  <LimitTags />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
          <h4>Sizes</h4>
          <p>Fancy smaller inputs? Use the size prop.</p> </Grid>
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
                  <Sizes />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
          <h4>Globally Customized Options</h4>
          <p>Custom input</p> 
          <p>To globally customize the Autocomplete options for all components in your app, you can use the theme default props and set the <code>renderOption</code> property in the <code>defaultProps</code> key. The <code>renderOption</code> property takes the <code>ownerState</code> as the fourth parameter, which includes props and internal component state. To display the label, you can use the <code>getOptionLabel</code> prop from the <code>ownerState</code>. This approach enables different options for each Autocomplete component while keeping the options styling consistent.</p>
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
                  <GloballyCustomizedOptions />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
          <h4>GitHubs picker</h4>
          <p>This demo reproduces GitHubs label picker:</p> 
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
                  <GitHubLabel />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
          <h4>Hint</h4>
          <p>The following demo shows how to add a hint feature to the Autocomplete:</p> 
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
                  <AutocompleteHint />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
          <h4>Highlights</h4>
          <p>The following demo relies on <a href='https://github.com/moroshko/autosuggest-highlight'>autosuggest-highlight</a>, a small (1 kB) utility for highlighting text in autosuggest and autocomplete components.</p> 
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
                  <Highlights />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
          <h4>Custom filter</h4>
          <p>The component exposes a factory to create a filter method that can be provided to the <code>filterOptions</code> prop. You can use it to change the default option filter behavior.</p> 
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
                  <Filter />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
          <h4>Virtualization</h4>
          <p>Search within 10,000 randomly generated options. The list is virtualized thanks to<a href='https://github.com/bvaughn/react-window'> react-window.</a></p> 
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
                  <Filter />
            </Grid>
          </Grid>





          

       

         


          









           

          

          

          

          


         


        </Grid>
      </Container>
    </>
  );
}
