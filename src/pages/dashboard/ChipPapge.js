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

import BasicChips from './chip/basic';
import ClickableChips from './chip/clickable';
import DeletableChips from './chip/deletable';
import ClickableAndDeletableChips from './chip/clickable_deletable';
import ClickableLinkChips from './chip/clickable_link';
import CustomDeleteIconChips from './chip/custom_delete';
import AvatarChips from './chip/avatar_chip';
import IconChips from './chip/icon_chip';
import ColorChips from './chip/color_chip';
import SizesChips from './chip/size_chip';
import MultilineChips from './chip/multiline';
import ChipsArray from './chip/chip_array';

export default function ChipPage() {
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
              <h2>Chip</h2>
              <p >Chips are compact elements that represent an input, attribute, or action.</p>
              <p>Chips allow users to enter information, make selections, filter content, or trigger actions.</p>
              <p>While included here as a standalone component, the most common use will be in some form of input, so some of the behavior demonstrated here is not shown in context.</p>
            </Grid>

          {/* Basic */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Basic chip</h4>
            <p>The <code>Chip</code> component supports outlined and filled styling.</p>
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
                  <BasicChips />
            </Grid>
          </Grid>

          {/* Chip actions */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Chip actions</h4>
            <p>You can use the following actions.</p>
            <p style={{ padding:"12px" }}>
                <ul>
                  <li>Chips with the <code>onClick</code> prop defined change appearance on focus, hover, and click.</li>
                  <li>Chips with the <code>onDelete</code> prop defined will display a delete icon which changes appearance on hover.</li>
                </ul>
            </p>
          </Grid>

          {/* Basic */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Clickable</h4>
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
                  <ClickableChips />
            </Grid>
          </Grid>

          {/* Basic */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Deletable</h4>
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
                  <DeletableChips />
            </Grid>
          </Grid>

          {/* Basic */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Clickable and deletable</h4>
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
                  <ClickableAndDeletableChips />
            </Grid>
          </Grid>

          {/* Basic */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Clickable link</h4>
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
                  <ClickableLinkChips />
            </Grid>
          </Grid>

          {/* Basic */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Custom delete icon</h4>
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
                  <CustomDeleteIconChips />
            </Grid>
          </Grid>

          {/* Basic */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Chip adornments</h4>
            <p>You can add ornaments to the beginning of the component.</p>
            <p>Use the <code>avatar</code> prop to add an avatar or use the <code>icon</code> prop to add an icon.</p>
          </Grid>
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Avatar chip</h4></Grid>
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
                  <AvatarChips />
            </Grid>
          </Grid>

          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Icon chip</h4></Grid>
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
                  <IconChips />
            </Grid>
          </Grid>

          {/* Basic */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Color chip</h4>
            <p>You can use the <code>color</code> prop to define a color from theme palette.</p> </Grid>
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
                  <ColorChips />
            </Grid>
          </Grid>

          {/* Basic */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Size chip</h4>
            <p>You can use the <code>size</code> prop to define a small Chip.</p> </Grid>
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
                  <SizesChips />
            </Grid>
          </Grid>

          {/* Basic */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Multiline chip</h4>
            <p>By default, Chips displays labels only in a single line. To have them support multiline content, use the <code>sx</code> prop to add <code>height:auto</code> to the Chip component, and <code>whiteSpace:</code> normal to the <code>label</code> styles.</p>
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
                  <MultilineChips />
            </Grid>
          </Grid>

          {/* Basic */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Chip array</h4>
            <p>An example of rendering multiple chips from an array of values. Deleting a chip removes it from the array. Note that since no <code>onClick</code> prop is defined, the <code>Chip</code> can be focused, but does not gain depth while clicked or touched.</p>
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
                  <ChipsArray />
            </Grid>
          </Grid>

          



        
        </Grid>
      </Container>
    </>
  );
}
