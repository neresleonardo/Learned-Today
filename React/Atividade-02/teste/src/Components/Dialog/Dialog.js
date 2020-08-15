import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

export default function DraggableDialog() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen}>
        Click em Mim
      </button>
      <Dialog
         fullWidth={fullWidth}
         maxWidth={maxWidth}
         open={open}
         onClose={handleClose}
        
      >
        
        <DialogContent>
        
        </DialogContent>
        <DialogActions>
          
          <button onClick={handleClose} >
            Sair
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}