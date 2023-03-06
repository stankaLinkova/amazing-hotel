import { useState } from "react";
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function DateChecker() {

    const newDateTime = new Date();
    const currentDate = newDateTime.toLocaleString('en-GB').split(',')[0];

    const [date, setDate] = useState()
    const [dateFrom, setDateFrom] = useState(currentDate);

    const [date2, setDate2] = useState()
    const [dateTo, setDateTo] = useState(currentDate);

    function handleChange(event) {
      const dateFrom = event.$d.toLocaleString('en-GB').split(',')[0];
      setDateFrom(dateFrom);
      setDate(event.$d)
    }

    function handleChange2(event) {
      const dateFrom = event.$d.toLocaleString('en-GB').split(',')[0];
      setDateTo(dateFrom);
      setDate2(event.$d)
    }

    return (
        <div className="date-checker">
          <h1>Check available dates!</h1>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div>
              <DatePicker
                label="Date From"
                inputFormat="DD/MM/YYYY"
                value={date}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
                <DatePicker
                label="Date To"
                inputFormat="DD/MM/YYYY"
                value={date2}
                onChange={handleChange2}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
            <button className="check-button">Check</button>
          </LocalizationProvider>

          <p className="availability-message">
            Quis et dictumst, porta enim, nec per lacus etiam dolor tempus. 
            Per vitae tempus, ad nec habitant mollis varius. Himenaeos quam per, fringilla vehicula, risus eleifend class 
            ornare morbi vivamus sagittis. Pulvinar malesuada dictumst, integer tellus, per donec velit condimentum litora.
          </p>
        </div>

    )
}

export default DateChecker;