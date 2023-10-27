import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {list1: [], isLoad: true}

  componentDidMount() {
    this.getData1()
  }

  getData1 = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))
    this.setState({
      list1: updatedData,
      isLoad: false,
    })
  }

  render() {
    const {list1, isLoad} = this.state
    console.log(list1)
    return (
      <div className="one">
        {isLoad ? (
          <div className="one123" data-testid="loader">
            <Loader type="Rings" color="white" width={80} height={80} />
          </div>
        ) : (
          <>
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="img1"
            />
            <div className="ul1">
              <div>
                <div className="two12">
                  <h1 className="h111">Cointype</h1>
                  <div className="two1">
                    <h1 className="h11">USD</h1>
                    <h1 className="h11">EURO</h1>
                  </div>
                </div>
              </div>
              <ul>
                {list1.map(each => (
                  <CryptocurrencyItem item={each} key={each.id} />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
