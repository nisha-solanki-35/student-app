import { Accordion, AccordionDetails, AccordionSummary, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { ExpandMore } from "@material-ui/icons";
import PropTypes from 'prop-types'

function Translation({word, meanings}) {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {word === "" ? (
        <span style={{padding:"20px"}}><h3>Start searching meanings of words</h3></span>) : (
          meanings.map((mean) =>
            mean.meanings.map((item) =>
              item.definitions.map((def, key) => (
                <Accordion key={key}>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>{def.definition}</Typography>
                  </AccordionSummary>
                <AccordionDetails>
                  <Typography component={'span'}>
                    {def.example && (
                      <span>
                        <b>Example :</b> {def.example}
                      </span>
                    )}
                    <br></br>
                    {def.synonyms && (
                      <span>
                        <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                      </span>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))
          ))
        )
      }
    </div>
  )
}

// Translation.defaultProps = {
//   [meanings.map] : [""]
// }

Translation.propTypes = {
  word : PropTypes.string,
  meanings : PropTypes.array,
  // [meanings.map] : PropTypes.array
}

export default Translation
