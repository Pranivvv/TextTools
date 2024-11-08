import React from 'react'

export default function Alert(props) {
  return (
    props.alert &&<div className={`alert alert-${props.alert.state==='Success'?'warning':'success'}`} role="alert">
        <p><strong>{props.alert.state}:</strong> {props.alert.mess} </p>
    </div>
  )
}

