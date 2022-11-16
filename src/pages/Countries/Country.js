import React from 'react'

export default function Country(props) {
    const country = props.country
    const loading = props.loading
    console.log(country)
    return (
        
        country && (
            <div className='col-md-3' key={country.name.common}>
            <div className="card" >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{country.name.common}</h5>
                    <div className='mb-2'>
                        <h6 className='pb-1'>Name: <span className='fw-normal'>{country.altSpellings}</span></h6>
                        <h6 className='pb-1'>Population: <span className='fw-normal'>1800000</span></h6>
                        <h6 className='pb-1'>City: <span className='fw-normal'>Dhaka</span></h6>
                    </div>
                    <a href="#" className="btn btn-primary btn-sm">Remove Country</a>
                </div>
            </div>
        </div>
        )


    )
}
