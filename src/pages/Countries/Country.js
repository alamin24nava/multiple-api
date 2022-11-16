import React from "react";

export default function Country(props) {
  const country = props.country;
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <div className="card mb-3">
        <img
          src={country.flags.png}
          className="card-img-top country-flag"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-truncate">{country.name.common}</h5>
          <div className="mb-2">
            <h6 className="pb-1">
              Population:{" "}
              <span className="fw-normal">{country.population}</span>
            </h6>
            <h6 className="pb-1">
              Capital: <span className="fw-normal">{country.capital}</span>
            </h6>
          </div>
          <a href="#" className="btn btn-primary btn-sm">
            Remove Country
          </a>
        </div>
      </div>
    </div>
  );
}
