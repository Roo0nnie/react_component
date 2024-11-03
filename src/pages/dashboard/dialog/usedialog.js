import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

// Custom dialog for error handling
function MyCustomDialog({ open, onClose, payload }) {
  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle>Custom Error Handler</DialogTitle>
      <DialogContent>
        <Alert severity="error">
          {`An error occurred while deleting item "${payload.id}":`}
          <pre>{payload.error}</pre>
        </Alert>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close me</Button>
      </DialogActions>
    </Dialog>
  );
}

// Prop validation for MyCustomDialog
MyCustomDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  payload: PropTypes.shape({
    error: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

// Mock API deletion function
const mockApiDelete = async (id) => 
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject(new Error('ID is required'));
      } else if (parseInt(id, 10) % 2 === 0) {
        resolve(true);
      } else {
        reject(new Error('Can not delete odd numbered elements'));
      }
    }, 1000);
  });

// Main content component for handling delete actions
function DemoContent() {
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogPayload, setDialogPayload] = React.useState({ id: '', error: '' });

  const handleDelete = async () => {
    const id = prompt('Enter the ID to delete'); // Replaced dialogs.prompt with prompt for simplicity
    if (id) {
      const deleteConfirmed = window.confirm(`Are you sure you want to delete "${id}"?`); // Simple confirmation
      if (deleteConfirmed) {
        try {
          setIsDeleting(true);
          await mockApiDelete(id);
          alert('Deleted!'); // Simple alert for success
        } catch (error) {
          const message = error instanceof Error ? error.message : 'Unknown error';
          setDialogPayload({ id, error: message });
          setDialogOpen(true); // Open the custom dialog on error
        } finally {
          setIsDeleting(false);
        }
      }
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false); // Close custom dialog
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <LoadingButton
        variant="contained"
        loading={isDeleting}
        onClick={handleDelete}
      >
        Delete
      </LoadingButton>

      <MyCustomDialog 
        open={dialogOpen} 
        onClose={handleCloseDialog} 
        payload={dialogPayload} 
      />
    </div>
  );
}

// Main export
export default function ToolpadDialogsNoSnap() {
  return <DemoContent />;
}
