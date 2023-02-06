import React, {useState} from 'react'

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white"
  })

  const [btnText, setBtnText] = useState("Dark Mode")

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white"
      })
      setBtnText("Light Mode")
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white"
      })
      setBtnText("Dark Mode")
    }
  }
  return (
    <div className="container" style={myStyle}>
      <h2>About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>

        <div className="card" style={myStyle}>
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button className="btn btn-link btn-block text-left BtnCss" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Collapsible Group Item #1
              </button>
            </h2>
          </div>

          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body" style={myStyle}>
              Some placeholder content htmlFor the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> className.
            </div>
          </div>
        </div>

        <div className="card" style={myStyle}>
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button className="btn btn-link btn-block text-left collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Collapsible Group Item #2
              </button>
            </h2>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body" style={myStyle}>
              Some placeholder content htmlFor the second accordion panel. This panel is hidden by default.
            </div>
          </div>
        </div>

        <div className="card" style={myStyle}>
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button className="btn btn-link btn-block text-left collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Collapsible Group Item #3
              </button>
            </h2>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body" style={myStyle}>
              And lastly, the placeholder content htmlFor the third and final accordion panel. This panel is hidden by default.
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-3 my-3">
        <div className="custom-control custom-switch">
          <input type="checkbox" className="custom-control-input" onClick={toggleStyle} id="customSwitch1" />
          <label className="custom-control-label" htmlFor="customSwitch1">{btnText}</label>
        </div>
      </div>
    </div>
  )
}