import {useState} from 'react';
import './quotes.css';

function Quote() {
	const[quoteText, getText] = useState();

	let quoteBlock = document.getElementById("quoteBlock");
	getText(()=>
		{
			try{
				fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
					.then(response => response.json())
						.then(data => quoteBlock.innerHTML = data);
			}
			catch(err){
				console.log(err);
			}
		});
		
	return (
		<div className="qDiv">
			<header className="quote-header">
				<h1>Random Swanson Quotes</h1>
					<div class="row">
						<div class="col">
							<button onClick={getText}>Sage Wisdom</button>
						</div>	
					</div>
					<div class="row">
						<div class="col-sm-12" id="quote">
							<p id="quoteBlock">{quoteText}</p>
						</div>
					</div>
				<script src="/javascripts/quotes.js"></script>
		</header>
    </div>
	);
}

export default Quote
