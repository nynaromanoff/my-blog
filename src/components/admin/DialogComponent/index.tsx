import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import clsx from "clsx";

type DialodProps = {
  isVisible: boolean;
  content: React.ReactNode;
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function DialogComponent({ isVisible = false, content, title, onConfirm, onCancel }: DialodProps) {
  if (!isVisible) return null;


  return (
    <div
      className={clsx(
        'fixed z-50 top-0 bottom-0 left-0 right-0 bg-black/50 backdrop-blur-xs',
        'flex items-center justify-center'
      )}>
      {/* <div
        className={clsx(
          'bg-slate-100 p-6 rounded-lg max-w-2xl mx-6',
          'flex flex-col gap-6',
          'shadow-lg shadow-black/30 text-center',
        )}
        role='dialog'
        aria-modal={true}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
        >
        <h3 id='dialog-title' className='text-xl font-extrabold'>{title}</h3>
        <div>{content}</div>
        <div className='flex items-center justify-around mb-2 p-2'>
          <Button variant='contained' sx={{ marginRight: '4rem' }} onClick={onCancel}>Cancelar</Button>
          <Button variant='contained' sx={{ display: 'flex' }} color='success' onClick={onConfirm}>Ok</Button>
        </div>
      </div> */}
      <Dialog
        open
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <h3 id='dialog-title' className='text-xl font-extrabold'>{title}</h3>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onConfirm} variant='outlined' sx={{ marginRight: '0.5rem' }}>Confirmar</Button>
          <Button onClick={onCancel} variant='outlined'>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}