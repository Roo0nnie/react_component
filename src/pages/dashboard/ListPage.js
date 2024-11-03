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


import BasicList from './list/introduction';
import NestedList from './list/nested_list';
import FolderList from './list/folder_list';
import InteractiveList from './list/interactive';
import SelectedListItem from './list/selected_item';
import AlignItemsList from './list/align_item';
import CheckboxList from './list/checkbox';
import CheckboxListSecondary from './list/checkbox_another';
import SwitchListSecondary from './list/switch';
import PinnedSubheaderList from './list/sticky';
import InsetList from './list/inset_list';
import GutterlessList from './list/gutter';
import VirtualizedList from './list/virtualized';

export default function ListPage() {
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
              <h2>List</h2>
              <p >Lists are continuous, vertical indexes of text or images.</p>
              <p>Material UI Lists are implemented using a collection of related components:</p>
              <p style={{ padding:"12px" }}>
                <ul>
                  <li>ist: a wrapper for list items. Renders as a <code>li</code> by default.</li>
                  <li>List Item: a common list item. Renders as an <code>ul</code> by default.</li>
                  <li>List Item Button: an action element to be used inside a list item.</li>
                  <li>List Item Icon: an icon to be used inside of a list item.</li>
                  <li>List Item Avatar: an avatar to be used inside of a list item.</li>
                  <li>List Item Text: a container inside a list item, used to display text content.</li>
                  <li>List Divider: a separator between list items.</li>
                  <li>List Subheader: a label for a nested list.</li>
                </ul>
              </p>
            </Grid>

            <Grid item xs={12} md={12}>
              <h2>Introduction</h2>
              <p >Lists present information in a concise, easy-to-follow format through a continuous, vertical index of text or images.</p>
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
                  <BasicList />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Nested List</h4> </Grid>
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
                  <NestedList />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Folder List</h4> </Grid>
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
                  <FolderList />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
              <h2>Interactive</h2>
              <p >Below is an interactive demo that lets you explore the visual results of the different settings:</p>
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
                  <InteractiveList />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
              <h2>Selected ListItem</h2> </Grid>

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
                  <SelectedListItem />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
              <h2>Align list items</h2>
              <p >When displaying three lines or more, the avatar is not aligned at the top. You should set the <code>alignItems=flex-start</code> prop to align the avatar at the top, following the Material Design guidelines:</p>
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
                  <AlignItemsList />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
              <h2>List Controls</h2>
              <h2>Checkbox</h2>
              <p >A checkbox can either be a primary action or a secondary action.</p>
              <p>The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target.</p>
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
                  <CheckboxList />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
             <p>The checkbox is the secondary action for the list item and a separate target.</p>
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
                  <CheckboxListSecondary />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
              <h2>Switch</h2>
              <p >The switch is the secondary action and a separate target.</p> <p>The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target.</p>
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
                  <SwitchListSecondary />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
              <h2>Sticky subheader</h2>
              <p >Upon scrolling, subheaders remain pinned to the top of the screen until pushed off screen by the next subheader. This feature relies on CSS sticky positioning.</p>
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
                  <PinnedSubheaderList />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
              <h2>Inset List Item</h2>
              <p >The <code>inset</code> prop enables a list item that does not have a leading icon or avatar to align correctly with items that do.</p>
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
                  <InsetList />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
              <h2>Gutterless list</h2>
              <p >When rendering a list within a component that defines its own gutters, <code>ListItem</code> gutters can be disabled with <code>disableGutters</code>.</p>
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
                  <GutterlessList />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
              <h2>Virtualized List</h2>
              <p >In the following example, we demonstrate how to use react-window with the <code>List</code> component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.</p>
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
                  <VirtualizedList />
            </Grid>
          </Grid>
        
        </Grid>
      </Container>
    </>
  );
}
