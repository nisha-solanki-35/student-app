import React from 'react'
import HTML from './html/HTML';
import Javascript from "./javascript/Javascript";
import Java from "./java/Java";
import PHP from "./php/PHP";
import Python from "./python/Python";
import PropTypes from 'prop-types'

function Technology({match}) {
    // console.log("match", match);
    return (
        <div>
        {
          match.params.id === "html" ? (
            <HTML></HTML>
          ) : null || 
          match.params.id === "java" ? (
            <Java></Java>
          ) : null || 
          match.params.id === "javascript" ? (
            <Javascript></Javascript>
          ) : null || 
          match.params.id === "php" ? (
            <PHP></PHP>
          ) : null || 
          match.params.id === "python" ? (
            <Python></Python>
          ) : null
        }
        </div>
    )
}

Technology.propTypes = {
  match : PropTypes.object
}

export default Technology
