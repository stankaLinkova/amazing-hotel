
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

let value = "";
function handleChange() {

}

function DateChecker() {
    return (
        <div className="date-checker">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
         </LocalizationProvider>
         <p className="availability-message">
         Quis et dictumst, porta enim, nec per lacus etiam dolor tempus. 
         Per vitae tempus, ad nec habitant mollis varius. Himenaeos quam per, fringilla vehicula, risus eleifend class 
         ornare morbi vivamus sagittis. Pulvinar malesuada dictumst, integer tellus, per donec velit condimentum litora. 
         Condimentum nullam aenean lacinia, accumsan quis in, mauris sociosqu sollicitudin egestas lobortis litora vitae cras. 
         Consequat posuere fames himenaeos, at praesent varius, tortor libero vulputate venenatis placerat sem imperdiet. 
         Venenatis fames donec elit, est phasellus cursus, dapibus suspendisse etiam quisque ut potenti. Posuere aptent aliquam fermentum, 
         ipsum eleifend at, elementum purus commodo feugiat donec vitae. 
         Eros luctus orci erat, commodo phasellus nec pretium aliquet. Molestie cubilia, nisl curabitur eu tempus.</p>
        </div>

    )
}

export default DateChecker;