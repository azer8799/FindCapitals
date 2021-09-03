import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    isActive: countryAndCapitalsList[0].id,
  }

  getCountry = event => {
    this.setState({isActive: event.target.value})
  }

  findCountry = () => {
    const {isActive} = this.state

    const getCountryAndCapital = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === isActive,
    )

    return getCountryAndCapital
  }

  render() {
    const {isActive} = this.state

    const countryName = this.findCountry()
    // console.log(countryName)

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading"> Countries And Capitals</h1>
          <div className="input-container">
            <select onChange={this.getCountry} value={isActive}>
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  value={eachCountry.id}
                  className="options"
                  key={eachCountry.id}
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="label-text">is capital of which country?</p>
          </div>
          <p className="answer">{countryName.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
