import React, { useState, useEffect } from 'react'
import './style.css'

import ContentLoader from '../../components/ContentLoader/ContentLoader'
import Empty from '../../components/Empty/Empty'
import Country from './Country'
import useFetch from '../../components/CustomHooks/useFetch'

const url = 'https://restcountries.com/v3.1/all'
export default function Countries() {
    const {data, isLoading, error} = useFetch(url)
    const countriesEle = data &&
        data.map((country) => (
            <Country key={country.name.common} country={country}/>
        ))
    return (
        <div className="row gx-3">
            { isLoading && <ContentLoader />}
            { error && <Empty/>}
            {countriesEle}
        </div>
    )
}
