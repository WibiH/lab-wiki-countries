import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const { countriesList } = props;
  console.log(countriesList);
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            {countriesList.map((eachCountry) => {
              return (
                <Link
                  className="list-group-item list-group-item-action"
                  to={eachCountry.alpha3Code}
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
            {/*
            <Link className="list-group-item list-group-item-action" to="/ABW">
              🇦🇼 Aruba
            </Link>
            <a className="list-group-item list-group-item-action" href="/AFG">
              🇦🇫 Afghanistan
            </a>
            <a className="list-group-item list-group-item-action" href="/AGO">
              🇦🇴 Angola
            </a>
            <a className="list-group-item list-group-item-action" href="/AIA">
              🇦🇮 Anguilla
            </a>
            <a className="list-group-item list-group-item-action" href="/ALA">
              🇦🇽 Åland Islands
            </a>
            <a className="list-group-item list-group-item-action" href="/ALB">
              🇦🇱 Albania
            </a>
            <a className="list-group-item list-group-item-action" href="/AND">
              🇦🇩 Andorra
            </a>
            <a className="list-group-item list-group-item-action" href="/ARE">
              🇦🇪 United Arab Emirates
            </a>
            <a className="list-group-item list-group-item-action" href="/ARG">
              🇦🇷 Argentina
            </a>
            <a className="list-group-item list-group-item-action" href="/ARM">
              🇦🇲 Armenia
            </a>
            <a className="list-group-item list-group-item-action" href="/ASM">
              🇦🇸 American Samoa
            </a>
            <a className="list-group-item list-group-item-action" href="/ATA">
              🇦🇶 Antarctica
            </a>
            <a className="list-group-item list-group-item-action" href="/FLK">
              🇫🇰 Falkland Islands
            </a>
            <a
              className="list-group-item list-group-item-action active"
              href="/FRA"
            >
              🇫🇷 France
            </a>
            <a className="list-group-item list-group-item-action" href="/ZWE">
              🇿🇼 Zimbabwe
            </a>
            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesList;
