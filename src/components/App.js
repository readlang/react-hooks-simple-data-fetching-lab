import React, {useState, useEffect} from "react";

function App() {
    const [ imageURL, SetImageURL ] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then( r => r.json() )
        .then( (d) => SetImageURL(d.message) )
    }, [] )

    return(
        <>
            
            
            { imageURL !== "" ? <img src= {imageURL} alt="A Random Dog" /> : <p>Loading...</p> }
        </>
    )
}

export default App;