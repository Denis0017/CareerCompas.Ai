import React from 'react'
import Form from "./Form";

export const Test = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Complete Your Profile</h3>
            <Form />
        </div>
    )
}