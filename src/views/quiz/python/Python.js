import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import QuestionList from './QuestionListPython';
import Questions from '../HOC/Questions';
import Home from "../../../components/Home";
import Result from '../HOC/Result';
import HOC from '../HOC/HOC';
import PropTypes from 'prop-types'

const Python = (props) => {
    // console.log("props", props);
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
    }))

    const classes = useStyles();;

    return (
        <div style={{background: "#15A45D"}}>
        <Home></Home>
        <h1>Python</h1>
        <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
        {
            props.questionBank.map(({question,options, CorrectAnswer, questionID})=>(
                <Grid key={questionID} item>
                <Questions 
                    question={question}
                    options={options}
                    questionID={questionID}
                    onChange={props.onChange}
                    CorrectAnswer={CorrectAnswer}
                ></Questions>
                </Grid>
            ))}
           </Grid>
           </Grid>
        </Grid>
        <Result score={props.score} responses={props.responses}></Result>
        </div>
    )
}

Python.propTypes = {
    questionBank : PropTypes.array,
    onChange : PropTypes.func,
    score : PropTypes.number,
    responses : PropTypes.number
}

export default HOC(Python,QuestionList)
