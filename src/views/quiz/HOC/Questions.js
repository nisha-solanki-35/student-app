import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import React, { useState } from 'react'
import {Toast, ToastHeader } from 'reactstrap';
import PropTypes from 'prop-types'

const Questions = ({question, options, questionID, onChange, name,CorrectAnswer }) => {
    const [Answer, setAnswer] = useState("");
    return (
        <div className="p-3 bg-dark my-2 rounded" key={questionID}>
            <Toast>
                <ToastHeader tag="h4">
                    {question}
                </ToastHeader>
                {options.map((option, index)=>(
                    <RadioGroup row aria-label="options" name={name} value={Answer ? Answer : ""} onClick={(e)=>setAnswer(e.target.value)} onChange={(e)=> onChange(e, CorrectAnswer, questionID)} key={index}>
                        <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
                    </RadioGroup>
                ))}
            </Toast>
        </div>
    )
}

Questions.propTypes = {
    question : PropTypes.string,
    options : PropTypes.array,
    questionID : PropTypes.number,
    onChange : PropTypes.func,
    name : PropTypes.string,
    CorrectAnswer : PropTypes.string
}

export default Questions
