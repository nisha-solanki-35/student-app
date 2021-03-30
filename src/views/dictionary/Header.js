import React from 'react'
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types'

function Header({onChange, word, setword, handleOnclick}) {
    return (
        <div>
            <h1 style={{padding:"20px"}}>Find the meanings of words</h1>
            <TextField id="filled-basic" label="Search a word" variant="filled" value={word} onChange={(e)=> setword(e.target.value)}>
            </TextField>
            <SearchIcon style={{color:"black", fontSize:45, cursor:"pointer"}} onClick={handleOnclick}></SearchIcon>
            <TextField
                select
                label="Language"
                onChange={onChange}
                SelectProps={{
                    native: true,
                }}
                variant="filled"
            >
            <option value="en_US">English</option>
            <option value="hi">Hindi</option>
            </TextField>
        </div>
    )
}

Header.propTypes = {
    onChange : PropTypes.func,
    word : PropTypes.string,
    setword : PropTypes.func,
    handleOnclick : PropTypes.func
}

export default Header
