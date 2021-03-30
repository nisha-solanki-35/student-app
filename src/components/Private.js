import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types'

const Private = ({ component: Cmp, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? <Cmp {...props} /> : <Redirect to="/" />
      }
    ></Route>
  );

Private.propTypes = {
  component : PropTypes.func
}

export default Private
