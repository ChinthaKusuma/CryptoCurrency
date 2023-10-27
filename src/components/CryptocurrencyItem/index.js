import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = item
  return (
    <li className="one2">
      <div className="one3">
        <img src={currencyLogo} alt={currencyName} className="img2" />
        <p className="para1">{currencyName}</p>
      </div>
      <div className="one4">
        <p className="para1">{usdValue}</p>
        <p className="para1">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
