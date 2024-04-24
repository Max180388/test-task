<script>
	export let value = 1;
	export let test;


</script>

<label>
	<input type="number" bind:value />
</label>
<p>{test}</p>

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
