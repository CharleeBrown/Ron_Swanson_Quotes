
import {useState} from "react";
import './quotes.css';


function Quote() {

	//let quoteBlock = document.getElementById("quoteBlock");
	let [quoteText, setQuote] = useState("");
	function getText()
		{
			try{
				fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
					.then(response => response.json())
						.then((data) => setQuote(data));
			}
			catch(err){
				console.log(err);
			}
		}
		
	return (
		<div className="qDiv">
			<header className="quote-header">
				<h1>Random Swanson Quotes</h1>
					<div className="row">
						<div className="col">
							<button onClick={() =>getText(quoteText)}>Sage Wisdom</button>
						</div>	
						
					</div>
					< hr/>
					
					<div class="row">
						<div class="col-sm-12" id="quote">
							<p id="quoteBlock">{quoteText}</p>
						</div>
					</div>
		</header>
    </div>
	);
}

export default Quote
