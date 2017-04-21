import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Todo = ({ ocClick, completed, text }) => (
  <li
    onClick= {onClick}
    style={{ textDecoration: completed ? 'line-through': 'none'}}
  >
  {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo