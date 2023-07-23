import React from 'react'
import './SelectedFence.css'


const SelectedFence = ({ selectedFence }) => {
    const { id, companyName, img, mainFeature, model, description, height, heightOptions = [] } = selectedFence
    const [lengthValue, setLengthValue] = React.useState(3);
    const [formState, setFromState] = React.useState({});
    const [price, setPrice] = React.useState("")
    const heightOptionArray = heightOptions.filter((elm) => {
        return elm.hoption === height
    })
    const heightOption = heightOptionArray[0]
    function lenValActivated() {
        setPrice(((heightOption.minCost * lengthValue) / 3).toFixed(2))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Create a new Date object, which will represent the current date and time
        const today = new Date();

        // Get the individual components of the date (year, month, day)
        const year = today.getFullYear();
        const month = today.getMonth() + 1; // Months are 0-indexed, so we add 1
        const day = today.getDate();

        // Optionally, you can format the date as a string in a specific format (e.g., "YYYY-MM-DD" or "MM/DD/YYYY")
        const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ formState, height, selectedFence, lengthValue, price, formattedDate })
        })
        return res
    };
    const handleFromChange = (event) => {
        setFromState({ ...formState, [event.target.name]: event.target.value })
    }
    const handleHeightChange = (event) => {
        setLengthValue(parseFloat(event.target.value).toFixed(1));
        lenValActivated();
        // setPrice(lengthValue * height * heightOption.minCost)
    };
    return Object.keys(selectedFence).length === 0 ? <div></div> :
        <div className="sfence" key={id}>
            <h3>{companyName} {model} {height}mm</h3>
            <p>{mainFeature}</p>
            <img src={img} alt="" />
            <div className="warenty">
                <img src="img/warenty.png" alt="" />
                <p>{description}</p>
            </div>
            <hr />
            <div className="estim-length">
                <h4>Estimated Length: <span>{lengthValue}m</span></h4>
                <div className="seekbar">3 <input type="range" min="3" max="100" step="0.1" value={lengthValue} onChange={handleHeightChange}></input> 100</div>
                <p>SLIDE TO YOUR FENCE LENGTH</p>
            </div>
            <div className="estimated-price">
                <h5>Estimated price excluded GST:</h5>
                <div className="price">NZ$ <span>{price}</span></div>
                <div className="summary">for <span>{lengthValue} meters</span> of DuraPanel Delta 1200mm</div>
            </div>
            <div className="note">GET A PRICE COMPARISON WITH ALL SIMILAR PRODUCTS::
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input type="text" name='name' value={formState.name || ''} placeholder='Full Name' onChange={handleFromChange} />
                    <input type="email" name='email' value={formState.email || ''} placeholder='Email Address' onChange={handleFromChange} />
                    <input type="submit" value='Send Email' />
                </form>
            </div>
        </div>

}

export default SelectedFence