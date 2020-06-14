import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

export default function Checkboxes() {
  
    const [checked, setChecked] = React.useState(true);
    const [enabled, setEnabled] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleChangeForEvent = (event) => {
        setChecked(event.target.checked);
        setEnabled(event.target.checked)
    };

    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField enabled={enabled} id="outlined-basic-new" label="Outlined" variant="outlined" />
            </form>

            <Checkbox
                onChange={handleChangeForEvent}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />

            <Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
            <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
            <Checkbox
                defaultChecked
                indeterminate
                inputProps={{ 'aria-label': 'indeterminate checkbox' }}
            />
            <Checkbox
                defaultChecked
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
            <Checkbox
                defaultChecked
                size="small"
                inputProps={{ 'aria-label': 'checkbox with small size' }}
            />
        </div>
    );
}
