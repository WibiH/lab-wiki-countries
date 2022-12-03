import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const { countries } = props;
  console.log(countries);
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            {countries.map((eachCountry) => {
              return (
                <Link
                  key={eachCountry.alpha3Code}
                  className="list-group-item list-group-item-action"
                  to={`/${eachCountry.alpha3Code}`}
                >
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}
                    alt={eachCountry.alpha2Code}
                    width={20}
                  />{' '}
                  {eachCountry.name.common}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesList;
