// Develop a currency converter application that allows users to input an amount in one currency and convert it to another. For the sake of this challenge, you can use a hard-coded exchange rate. Take advantage of React state and event handlers to manage the input and conversion calculations.

export default function CurrencyConverter() {

    const [amount, setAmount] = useState("");
    const exchangeRate = 1.2; //1 euro costs 1.2 dollars

    const convertedAmount = amount ? (Number(amount) * exchangeRate).toFixed(2) : "";
    return (
       
            <div>
                <h1>Currency Converter</h1>
                <input type="number" placeholder="Amount in EURO" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <p>Amount in USD: {convertedAmount}</p>
            </div>
            
    
    )
}