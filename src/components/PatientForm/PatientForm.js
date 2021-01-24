import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {makeStyles} from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const {email, uid} = props;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
   setAge(event.target.value);
 };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        DOCTOR'S APPOINTMENT
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Doctor's Appointment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To take a Doctor's appointment, please describe your symptoms here and choose the specialist you want to consult to.
          </DialogContentText>
          <DialogContentText>Email: {email}</DialogContentText>
          <DialogContentText>
          Unique ID: {uid}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Describe your problem here"
            type="text"
            fullWidth
          />
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          /><br />
          <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Choose Specialist</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Cardiologist</MenuItem>
            <MenuItem value={20}>Opthalmologist</MenuItem>
            <MenuItem value={30}>Dermatologist</MenuItem>
            <MenuItem value={40}>Dentist</MenuItem>
            <MenuItem value={50}>Gynaecologist</MenuItem>
            <MenuItem value={60}>Orthopaedic Surgeon</MenuItem>
            <MenuItem value={70}>Neurologist</MenuItem>
            <MenuItem value={80}>Endocrinologist</MenuItem>
            <MenuItem value={90}>Paediatrician</MenuItem>
          </Select>
        </FormControl><br />
        <Button
         variant="contained"
         color="default"
         className={classes.button}
         startIcon={<CloudUploadIcon />}
       >
         Upload
       </Button>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
 formControl: {
   margin: theme.spacing(1),
   minWidth: 200,
 },
 selectEmpty: {
   marginTop: theme.spacing(2),
 },
}));