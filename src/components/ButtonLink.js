import React from 'react'
import { Link } from 'react-router-dom'

const ButtonLink = React.memo(props => {
  return (
    <Link to={ props.to }>{ props.label }</Link>
  )
})

export default ButtonLink
