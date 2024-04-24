import { writable } from "svelte/store"
export const url = writable('https://open.er-api.com/v6/latest/');

export const currenciesList = writable([
	{	
		id: 'RUB',
		text: 'Российский рубль',
	 },
	 {	
		id: 'USD',
		text: 'Доллар Соединенных Штатов',
	 },
	 {	
		id: 'EUR',
		text: 'Евро',
	 },
	 {	
		id: 'KZT',
		text: 'Казахстанский тенге',
	 },
	 {	
		id: 'BYN',
		text: 'Белорусский рубль',
	 },
	 {	
		id: 'NZD',
		text: 'Новозеландский доллар',
	 }
	]);