import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// _mock_
import { _bookings, _bookingNew, _bookingsOverview, _bookingReview } from '../../_mock/arrays';
// components
import { useSettingsContext } from '../../components/settings';
// sections
import {
  BookingDetails,
  BookingBookedRoom,
  BookingTotalIncomes,
  BookingRoomAvailable,
  BookingNewestBooking,
  BookingWidgetSummary,
  BookingCheckInWidgets,
  BookingCustomerReviews,
  BookingReservationStats,
} from '../../sections/@dashboard/general/booking';
// assets
import {
  BookingIllustration,
  CheckInIllustration,
  CheckOutIllustration,
} from '../../assets/illustrations';

// ----------------------------------------------------------------------
import FloatingActionButtons from './floating_action_buttons/basic_fab';
import FloatingActionButtonSize from './floating_action_buttons/size';
import FloatingActionButtonZoom from './floating_action_buttons/animation';
import FloatingActionButtonExtendedSize from './floating_action_buttons/size_1';

export default function GeneralBookingPage() {
  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> General: Booking | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
              <h2>Floating Action Button</h2>
              <p >A Floating Action Button (FAB) performs the primary, or most common, action on a screen.</p>
              <p>A floating action button appears in front of all screen content, typically as a circular shape with an icon in its center. FABs come in two types: regular, and extended.</p>
              <p>Only use a FAB if it is the most suitable way to present a screens primary action. Only one component is recommended per screen to represent the most common action.</p>
          </Grid>

          {/* Basic */}
          <Grid item xs={12} md={12}>
              <h4>Basic FAB</h4>
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
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
                  <FloatingActionButtons />
            </Grid>
          </Grid>

          {/* Size */}
          <Grid item xs={12} md={12}>
              <h4>Size</h4>
              <p>By default, the size is large. Use the size prop for smaller floating action buttons.</p>
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
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
                  <FloatingActionButtonSize />
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
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
                  <FloatingActionButtonExtendedSize />
            </Grid>
          </Grid>

         

          {/* Animation */}
          <Grid item xs={12} md={12}>
              <h4>Animation</h4>
              <p>The floating action button animates onto the screen as an expanding piece of material, by default.</p>
              <p>A floating action button that spans multiple lateral screens (such as tabbed screens) should briefly disappear, then reappear if its action changes.</p>
              <p>The Zoom transition can be used to achieve this. Note that since both the exiting and entering animations are triggered at the same time, we use enterDelay to allow the outgoing Floating Action Buttons animation to finish before the new one enters.</p>
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
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
                  <FloatingActionButtonZoom />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
