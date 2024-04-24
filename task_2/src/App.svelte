<script>
	import apiLogo from "./assets/exchange-rate-api.png";
	import Currency from "./components/Currency.svelte";
	import Input from "./components/Input.svelte";
	// import Api from './components/Api.svelte';

	let test;

</script>

<main>
	<h1>Конвертации валют</h1>
	<div class="converter">
		<div class="converter__wrap">
			<p class="converter__text">У меня есть</p>
			<Currency bind:test />
			<Input value={5 + 2} bind:test />
		</div>
		<div class="converter__wrap">
			<p class="converter__text">Хочу приобрести</p>
			<Currency bind:test />
			<Input value={5 +12} bind:test />
		</div>
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
