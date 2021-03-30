import React from 'react'
import { Button, Input, Label } from 'reactstrap'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import {
    RadioGroup,
    Radio,
    FormControlLabel
  
} from "@material-ui/core";
import PropTypes from 'prop-types'

function InputCommonComponent({htmlFor, placeholder, name,onChange, text, type, maxLength, value, disabled }) {
    return (
        <div>
            <Label htmlFor={htmlFor}><b>{text}</b></Label>
            <Input placeholder={placeholder} name={name} value={value} onChange={onChange} type={type} maxLength={maxLength} disabled={disabled}></Input>
        </div>
    )
}

function CalenderComponent({name, onDateChange, value}) {
    return (
       <Calendar name={name} onChange={onDateChange} value={value} /> 
    )
}

function RadioComponent({name, onGenderChange}){
   return(
            <RadioGroup row aria-label="usergender" name={name} onChange={onGenderChange}>
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
            </RadioGroup>
   )
}

function ButtonComponent({data, onClick, username, email, password, contact, dob, gender}) {
    return(
        <Button onClick={()=> onClick(data)} disabled={!username || !email || !password || !contact || !dob || !gender}>Register</Button>
    )
}

InputCommonComponent.propTypes = {
    htmlFor : PropTypes.string,
    placeholder : PropTypes.string,
    name : PropTypes.string,
    onChange : PropTypes.func,
    text : PropTypes.string,
    type : PropTypes.string,
    maxLength : PropTypes.number,
    value : PropTypes.string,
    disabled : PropTypes.string
}

CalenderComponent.propTypes = {
    name : PropTypes.string,
    onDateChange : PropTypes.func,
    value : PropTypes.object
}

RadioComponent.propTypes = {
    name : PropTypes.string,
    onGenderChange : PropTypes.func
}

ButtonComponent.propTypes = {
    data : PropTypes.string,
    onClick : PropTypes.func,
    username : PropTypes.string,
    email : PropTypes.string,
    password : PropTypes.string,
    contact : PropTypes.number,
    dob : PropTypes.string,
    gender : PropTypes.string
}

export {InputCommonComponent, CalenderComponent, RadioComponent, ButtonComponent}
