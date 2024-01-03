import React from 'react'

export default function Home (props)  {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">This is Home page !!!</h3>
        </div>
    )
}
