import { Helmet } from 'react-helmet-async';
// @mui
import { Box, Container, Typography } from '@mui/material';
// sections
import { FaqsHero, FaqsCategory, FaqsList, FaqsForm } from '../sections/faqs';

// ----------------------------------------------------------------------

export default function qm() {
  return (
    <>
      <Helmet>
        <title> Hi Pogi</title>
      </Helmet>

      <h1>POGI</h1>
    </>
  );
}