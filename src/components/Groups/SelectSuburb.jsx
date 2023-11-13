import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Suburbs from '../../Data/SuburbsArray.json';
import { MenuItem } from '@mui/material';

export default function SelectSuburb(props) {

    return (
        <Box sx={{ minWidth: 500, mr: 20 }}>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Select your suburb..
                </InputLabel>
                <Select labelId="suburbSelectLabel" id="suburbSelect" value={props.value} onChange={props.onChange}>
                    {Suburbs.Suburb.map((suburb) => (
                        <MenuItem key={suburb} value={suburb}>
                            {suburb}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
