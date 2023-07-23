import React from 'react'
import './HeightBtns.css'

const HeightBtns = ({ uniqueHeightOptions, filterFences }) => {
    return (
        <div className="available-heights">
            <h6>AVAILABLE-HEIGHTS:-</h6>
            <div className="height-btns">
                <button className="height-btn" onClick={() => filterFences("All")}>All</button>
                {uniqueHeightOptions.map((uniqueHeightOption, index) => {
                    return (
                        <button key={index} className="height-btn" onClick={() => filterFences({ uniqueHeightOption })}>{uniqueHeightOption}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default HeightBtns