import FencesData from './FencesApi.js'; // Assuming you're importing the array from Fence.js

// Create an empty Set to store unique height options
const uniqueHeightOptionsSet = new Set();

// Loop through the FencesData array and add heightOptions to the Set
FencesData.forEach((fence) => {
    fence.heightOptions.forEach((height) => {
        uniqueHeightOptionsSet.add(height.hoption);
    });
});

// Convert the Set back to an array to get the unique height options
const uniqueHeightOptions = Array.from(uniqueHeightOptionsSet).sort(function (a, b) { return a - b });;

export default uniqueHeightOptions

