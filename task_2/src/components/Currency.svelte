<script>
import { createEventDispatcher } from "svelte";
import {currenciesList} from '../constants.js'
let currencies;

const dispatch = 	createEventDispatcher();

currenciesList.subscribe(value => {currencies = value});
let selected = currencies[0];

const getCurrencyCode = () => {
	dispatch('getCode', {
		currencyCode: selected.id
		});
}
</script>

<form>
	<select
	bind:value={selected}
	on:change={getCurrencyCode}
	>

		{#each currencies as currency}
			<option value="{currency}">
				{currency.text}
			</option>
		{/each}
	</select>
</form>
<p>{selected.id}</p>

<style>
	select{
	width: 100%;
	height: 45px;
	border: none;
	border-radius: 10px;
	margin-bottom: 25px;
	font-family: inherit;
	font-size: 20px;
}
</style>