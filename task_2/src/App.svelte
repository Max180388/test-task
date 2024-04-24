<script>
	import apiLogo from "./assets/exchange-rate-api.png";
	import CurrencyBlock from "./components/CurrencyBlock.svelte";
	import { url } from "./constants.js";

	let apiUrl = "";
	let receivedRates = {};
	let rateСoefficient = 1;
	let myCode = "RUB";
	let wantCode = "RUB";
	$: my = 1;
	$: want = 1;
	$: myCode;
	$: wantCode;

	url.subscribe((value) => {
		apiUrl = value;
	});

	const getReceivedRates = () => {
		rateСoefficient = receivedRates[wantCode];
	};

	async function getRates() {
		const res = await fetch(`${apiUrl}${myCode}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error();
				}
				return response.json();
			})
			.catch(() => {
				alert("Что-то пошло не так, попробуйте перезагрузить страницу");
			})
			.then((exchangeRates) => {
				receivedRates = exchangeRates.rates;
				getReceivedRates();
			});
	}

	getRates();

	const getMyValue = () => {
		if (myCode === wantCode) {
			my = want;
		}
		my = (want / rateСoefficient).toFixed(4);
	};

	const getWantValue = () => {
		if (myCode === wantCode) {
			want = my;
		}
		want = (my * rateСoefficient).toFixed(4);
	};

	const getMyCurrencyCode = (evt) => {
		myCode = evt.detail.currencyCode;
		console.log(want)
		getRates().then(() => {
			getWantValue();
		});
	};

	const getWantCurrencyCode = (evt) => {
		wantCode = evt.detail.currencyCode;
		getReceivedRates();
		console.log(rateСoefficient);
		getMyValue();
	};

	const getWantСurrency = (evt) => {
		want = evt.detail.myCurrency * rateСoefficient;
		my = evt.detail.myCurrency;
		console.log(want);
	};

	const getMyCurrency = (evt) => {
		my = evt.detail.wantСurrency / rateСoefficient;
		want = evt.detail.wantСurrency;
		console.log(want);
	};
</script>

<main>
	<h1>Конвертатор валют</h1>
	<div class="converter">
		<CurrencyBlock
			on:calculation={getWantСurrency}
			valueCourse={my}
			text={"У меня есть"}
			on:getCode={getMyCurrencyCode}
		/>
		<CurrencyBlock
			on:calculation={getMyCurrency}
			valueCourse={want}
			text={"Хочу приобрести"}
			on:getCode={getWantCurrencyCode}
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
