<script>
	import apiLogo from "./assets/exchange-rate-api.png";
	import Api from "./components/Api.svelte";
	import CurrencyBlock from "./components/CurrencyBlock.svelte";
	let ka = 100;
	$: my = Number;
	$: want = Number;
	$: myCode = 'RUB';



	const getMyCurrencyCode = (evt) => {
		myCode = evt.detail.currencyCode;
		console.log(myCode)
	};

	const getWantСurrency = (evt) => {
		want = evt.detail.myCurrency * ka;
	};

	const getMyCurrency = (evt) => {
		my = evt.detail.wantСurrency / ka;
	};
</script>

<main>
	<h1>Конвертатор валют</h1>
	<div class="converter">
		<CurrencyBlock
			on:calculation={getWantСurrency}
			valueCourse={my}
			text={"У меня есть"} on:getCode={getMyCurrencyCode}
		/>
		<CurrencyBlock
			on:calculation={getMyCurrency}
			valueCourse={want}
			text={"Хочу приобрести"}
		/>
	</div>
</main>
<footer>
	<div>
		<a href="https://www.exchangerate-api.com" target="_blank" rel="noreferrer">
			<img src={apiLogo} class="logo" alt="ExchangeRate-API" />
		</a>
		<p class="logo__text">Rates By Exchange Rate API</p>
	</div>
</footer>

<style>
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
</style>
