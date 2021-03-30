import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types'

const Public = ({component : Cmp, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          <Redirect to="/quiz"/>
        ) : (
          <Cmp {...props} />
        )
      }
    ></Route>
  );

Public.propTypes = {
  component : PropTypes.func
}

export default Public
