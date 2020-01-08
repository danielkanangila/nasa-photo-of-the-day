import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const DatePicker = props => {
    
    const { selectedDate, handleDateChange } = props;

    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="yyyy-MM-dd"
                margin="normal"
                id="date-picker-inline"
                label="Pick a date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
}

export default DatePicker;