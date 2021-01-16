import React from 'react'

import codes from '../resources/dialingcodes'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Select, MenuItem, Typography } from '@material-ui/core/'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import { Container } from '@material-ui/core'
import { grey, red, blue, blueGrey } from '@material-ui/core/colors'
import { useState } from 'react'

const SignIn = (): JSX.Element => {
    const [dialCode, setDialCode] = useState('+231')

    const selectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setDialCode(event.target.value as string)
    }

    const options = codes.map((el) => {
        return <MenuItem value={el.dial_code} key={el.code}>{`${el.code} | ${el.dial_code}`}</MenuItem>
    })

    return (
        <Container component="main" maxWidth="xs">
            <div className="formContainer">
                <Avatar style={{ height: '80px', width: '80px', marginBottom: '20px' }} />
                <Typography component="h1" variant="h4">
                    Welcome
                </Typography>
                <Typography component="p" variant="subtitle2" color="secondary">
                    Please signin to continue
                </Typography>
                <form>
                    <div className="phoneBox">
                        <Select value={dialCode} id="demo-simple-select" onChange={selectChange}>
                            {options}
                        </Select>
                        <TextField label="Phone Number" required autoComplete="current-password" />
                    </div>
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                    <Button type="submit" size="large" fullWidth variant="contained" color="primary">
                        Get Started
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default SignIn
