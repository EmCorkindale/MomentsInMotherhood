import { useState } from 'react';
import { useFormInput } from '../../Hooks/useFormInput';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function SubscriptionForm() {
    const [status, setStatus] = useState('');

    const [nameInputProps, resetName] = useFormInput('Mary');
    const [emailInputProps, resetEmail] = useFormInput('mary@pop.com');
    function handleSubscribe() {
        console.log('Before setStatus');
        resetName();
        resetEmail();
        setStatus('Thanks for subscribing!');
        console.log('After setStatus');
    }

    return (
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="First name:" variant="outlined" input={{ ...nameInputProps }} sx={{ minWidth: 500, mr: 20 }} />

            <TextField id="filled-basic" label="Email:" variant="outlined" input={{ ...emailInputProps }} sx={{ minWidth: 500, mr: 20 }} />
            <Button variant="outlined" onClick={handleSubscribe} sx={{ minWidth: 500, mr: 20 }} >Subscribe to our Newsletter</Button>
            <div>{status}</div>
        </Box>

    );
}