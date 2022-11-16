import React, { useState, useEffect } from 'react'
import Country from './Country'

const loadingMsg = 'Loading...'
export default function Countries() {
    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch('https://restcountries.com/v3.1/all')
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setIsLoading(loadingMsg)
                    setCountries(data)
                })
                .catch((error) => {
                    console.log(error.message)
                })
        }, 2000);
    }, [])


    return (
        <div className="row">
            {
                countries.map((country) => (
                    <Country country={country} loading={isLoading} />

                ))}
        </div>
    )
}
