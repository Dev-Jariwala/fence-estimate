import React from 'react'
import './Fences.css'

const Fences = ({ Fences, onSmash }) => {
    function handleClick(height, fence) {
        onSmash(height, fence)
    }
    return (
        <div className="fences">
            {Fences.map((fence) => {
                let { id, companyName, model, img, mainFeature, description, heightOptions } = fence;
                return (
                    <div className="fence" key={id}>
                        <h3>{companyName} {model}</h3>
                        <p>{mainFeature}</p>
                        <img src={img} alt="" />
                        <div className="warenty">
                            <img src="img/warenty.png" alt="" />
                            <p>{description}</p>
                        </div>
                        <hr />
                        <div className="height-options">
                            <h6>SELECT ONE OF THE HEIGHT OPTIONS AVAILABLE (mm):</h6>
                            <div className="hoptions">
                                {heightOptions.map((hoption, index) => {
                                    return (
                                        <button key={index} className="hoption" onClick={() => handleClick(hoption.hoption, fence)} >{hoption.hoption}</button>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Fences