import React, {useState} from 'react';
import './Country.css';


const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const [visited, setVisited] = useState(false);
    // console.log(country.area.area);
    console.log(handleVisitedCountries);
    const handleVisited = () =>{

        // 1st approach

        // if(!visited){
        //     setVisited(true);
        // } else{
        //     setVisited(false);
        // }

        // 2nd approach
        // setVisited(visited ? false : true);

        // 3rd approach (toggle)
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    return (
        // <div className={`country border-lg text-center ${visited ? "country-visited" : "country-not-visited"}`}>
        <div className={`country ${visited && "country-visited"}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>
            <button onClick={() => {handleVisitedFlags(country?.flags?.flags?.png)}}>Add Visited Flag </button>
        </div>
    );
};

export default Country;


/***
 * 1. Inline CSS (style object)
 * 2. CSS file (external)
 */