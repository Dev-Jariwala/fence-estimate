import './App.css';
import React from 'react';
import Header from './Components/Header';
import Details from './Components/Details';
import HeightBtns from './Components/HeightBtns';
import FencesApi from './Data/FencesApi';
import Fences from './Components/Fences';
import ContactUs from './Components/ContactUs';
import uniqueHeightOptions from './Data/HeightsCategorys';
import SelectedFence from './Components/SelectedFence';

function App() {
  const [FencesData, SetFencesData] = React.useState(FencesApi)
  const [selectedFence, setSelectedFence] = React.useState([])
  const filterFences = (heightBtn) => {
    if (heightBtn === "All") {
      SetFencesData(FencesApi);
    } else {
      const requiredFences = FencesApi.filter((fence) => {
        const heightsInFence = []
        fence.heightOptions.map((elm) => {
          return heightsInFence.push(elm.hoption)
        })
        const matchedHeights = heightsInFence.map((height) => { return height === heightBtn.uniqueHeightOption })
        // console.log(matchedHeight)
        return matchedHeights.some((elm) => elm === true)
      })
      SetFencesData(requiredFences)
    }
    setSelectedFence([])
  }
  const onSmash = (height, fence) => {
    SetFencesData([])
    setSelectedFence({ ...fence, height: height })
  }
  return (
    <div className="app">
      <div className="container">
        <Header />
        <hr />
        <Details />
        <HeightBtns uniqueHeightOptions={uniqueHeightOptions} filterFences={filterFences} />
        <Fences Fences={FencesData} onSmash={onSmash} />
        <SelectedFence selectedFence={selectedFence} />
        <hr />
        <ContactUs />
        <hr />
      </div>
    </div>
  );
}

export default App;
