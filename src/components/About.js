// import React, { useState } from 'react'

export default function About(props) {

    // const  = {
    //     color: 'black',
    //     backgroundColor: 'white'
    // }

    

    // const [mode, setMode] = useState('light')

    // const switchMode = () => {
    //     console.log('clicked')
    //     if(mode==='light'){
    //         setprops.MyStyle({
    //             color: 'white',
    //             backgroundColor: 'rgb(40, 40, 40)'
    //         })
    //         setMode('dark')
    //     }
    //     else{
    //         setprops.MyStyle({
    //             color: 'rgb(40, 40, 40)',
    //             backgroundColor: 'white'
    //         })
    //         setMode('light')
    //     }
    // }

    

  return (
    <div style={props.myStyle} className='container'>
        <h1 className='my-3' style={props.myStyle}>About Us</h1>
        <div style={props.myStyle} className="accordion " id="accordionExample">
            <div style={props.myStyle} className="accordion-item ">
                <h2 style={props.myStyle} className="accordion-header ">
                <button style={props.myStyle} className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" style={props.myStyle} className="accordion-collapse  collapse show" data-bs-parent="#accordionExample">
                <div style={props.myStyle} className="accordion-body ">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body </code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div style={props.myStyle} className="accordion-item ">
                <h2 style={props.myStyle} className="accordion-header ">
                <button style={props.myStyle} className="accordion-button {props.myStylecollapsed}" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" style={props.myStyle} className="accordion-collapse  collapse" data-bs-parent="#accordionExample">
                <div style={props.myStyle} className="accordion-body ">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body </code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div style={props.myStyle} className="accordion-item ">
                <h2 style={props.myStyle} className="accordion-header ">
                <button style={props.myStyle} className="accordion-button {props.myStylecollapsed}" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" style={props.myStyle} className="accordion-collapse  collapse" data-bs-parent="#accordionExample">
                <div style={props.myStyle} className="accordion-body ">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body </code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}