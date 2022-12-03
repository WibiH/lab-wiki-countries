import { Link, useParams } from 'react-router-dom';

const CountryDetails = (props) => {
  // const country = countriesFromJSON;
  const { id } = useParams();
  const { countries } = props;
  const country = countries.find((item) => {
    return id === item.alpha3Code;
  });

  return (
    country && (
      <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{country.capital.join(', ')}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            {(country.borders.lenght && (
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map((border) => {
                      const borderCountry = countries.find((item) => {
                        return border === item.alpha3Code;
                      });
                      return (
                        <li key={border}>
                          <Link to={`/${border}`}>
                            {borderCountry.name.common}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            )) ||
              null}
          </tbody>
        </table>
      </div>
    )
  );
};

export default CountryDetails;
