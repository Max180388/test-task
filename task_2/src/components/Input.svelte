<script>
	import { createEventDispatcher } from "svelte";
	export let value = 1;
	// export let currencyCode;

	const dispatch = 	createEventDispatcher();

	const conversion = () => {
		dispatch('calculation', {
			myCurrency: value ,
			wantСurrency: value,
		});
	}

</script>

<label>
	<input on:change={conversion} type="number" bind:value placeholder='Введите число' />
</label>
<!-- <p>{currencyCode}</p> -->

<style>
	input {
		width: 100%;
		height: 80px;
		padding: 10px;
		box-sizing: border-box;
		border: none;
		border-radius: 10px;
		font-family: inherit;
		font-size: 30px;
		font-weight: 500;
	}
</style>
