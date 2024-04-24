<script>
	import Currency from "./Currency.svelte";
	import Input from "./Input.svelte";

	export let text = '';
	export let valueCourse = 8;

</script>


	<div class="converter__wrap">
		<p class="converter__text">{text}</p>
		<Currency on:getCode/>
		<Input on:calculation value={valueCourse}/>
	</div>

<style>
.converter__wrap{
	padding: 15px;
	border-radius: 20px;
background-color: #d8d8d8;
}

.converter__text{
	font-size: 20px;
}
</style>