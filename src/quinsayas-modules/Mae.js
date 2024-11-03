import { Helmet } from 'react-helmet-async';
// @mui
import { Box, Container, Typography, Grid, Paper, Dialog, DialogContent } from '@mui/material';
import { useState } from 'react';

// ----------------------------------------------------------------------

const images = [
    { src: '/pictures/japanesedenim.jpg', alt: 'JAPANESE DENIM' },
    { src: '/pictures/cig.jpg', alt: 'CIGARETES AFTER SEX' },
    { src: '/pictures/gooddays.jpg', alt: 'GOOD DAYS' },
    { src: '/pictures/feather.jpg', alt: 'BIRDS OF A FEATHER' },
    { src: '/pictures/yellow.jpg', alt: 'YELLOW' },
    { src: '/pictures/smile.jpg', alt: 'DIE WITH A SMILE' },
    { src: '/pictures/malibunights.jpg', alt: 'MALIBU NIGHTS' },
    { src: '/pictures/parachutes.jpg', alt: 'PARACHUTES' },
    { src: '/pictures/dream.jpg', alt: 'WILDEST DREAM' },
    { src: '/pictures/older.jpg', alt: 'OLDER' },
    { src: '/pictures/mr.jpg', alt: 'MR.PREFECTLY FINE' },
    { src: '/pictures/all.jpg', alt: 'ALL TOO WELL' }
];

export default function Mae() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>Favorite Songs!</title>
      </Helmet>

      <Container>
        <Box sx={{ bgcolor: '#d3d3d3', p: 2, textAlign: 'center' }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontFamily: 'Lucida, sans-serif', 
              fontWeight: 'bold', 
              fontSize: '3rem',
              transition: 'color 0.3s, transform 0.3s',
              '&:hover': {
                color: 'black', 
                transform: 'scale(1.05)' 
              }
            }}
          >
            FAVORITE SONGS
          </Typography>
        </Box>
      </Container>

      <Grid container spacing={2} sx={{ mt: 4 }}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper 
              sx={{ 
                padding: 2, 
                textAlign: 'center', 
                cursor: 'pointer', 
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                }
              }} 
              onClick={() => handleClickOpen(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                style={{ width: '100%', height: 'auto' }} 
              />
              <Typography variant="caption" sx={{ mt: 1, textAlign: 'center' }}>
                {image.alt}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Zoomed" 
              style={{ width: '100%', height: 'auto' }} 
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}