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


import TransferList from './trasfer_list/basic_transfer';
import SelectAllTransferList from './trasfer_list/enchance_transfer';

export default function TransferListPage() {
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
              <h2>Transfer List</h2>
              <p >A Transfer List (or <code>shuttle</code>) enables the user to move one or more list items between lists.</p>
            </Grid>

          {/* Basic transfer list */}
          <Grid item  xs={12} md={12}  lg={12}>
            <h4>Basic transfer list</h4>
            <p>For completeness, this example includes buttons for <code>move all</code>, but not every transfer list needs these.</p>
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
                  <TransferList />
            </Grid>
          </Grid>

          {/* Enhanced transfer list */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Enhanced transfer list</h4>
            <p>This example exchanges the <code>move all</code> buttons for a <code>select all</code> / <code>select none</code> checkbox and adds a counter.</p>
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
                  <SelectAllTransferList />
            </Grid>
          </Grid>

          {/* Limitations */}
          <Grid item xs={12} md={12} lg={12}>
            <h4>Limitations</h4>
            <p>The component comes with a couple of limitations:</p>
            <p style={{ padding:"12px" }}>
                <ul>
                  <li>It only works on desktop. If you have a limited amount of options to select, prefer the <a href='https://mui.com/material-ui/react-autocomplete/#multiple-values'>Autocomplete</a> component. If mobile support is important for you, have a look at <a href='https://github.com/mui/material-ui/issues/27579'>#27579</a>.</li>
                  <li>There are no high-level components exported from npm. The demos are based on composition. If this is important for you, have a look at <a href='https://github.com/mui/material-ui/issues/27579'>#27579</a>.</li>
                </ul>
            </p>
          </Grid>

          



        
        </Grid>
      </Container>
    </>
  );
}
