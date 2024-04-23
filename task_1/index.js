import { encoded, translations } from './data.js';
import { desiredSuffix, exclusionKeys } from './constants.js'

console.log("Let's rock")
// console.log(encoded, translations)

const decoded = [];
const decodedObject = {};
const listIds = [];

const getDecryptionField = (field, suffix) => field.endsWith(suffix);

const getDecryptedValue = (encryptedValue) => translations[encryptedValue];

const getDecoded = (exclusions) => {
	decoded.length = 0;
	encoded.forEach((group) => {
		for (const key in group) {
			if (!exclusions.includes(key)
				&& getDecryptionField(key, desiredSuffix)
				&& group[key] in translations) {
				decodedObject[key] = getDecryptedValue(group[key]);
			} else {
				decodedObject[key] = group[key];
				if (getDecryptionField(key, desiredSuffix) && !(group[key] in translations)) {
					listIds.push(group[key])
				};
			}
		}
		decoded.push(decodedObject);
	});
};



getDecoded(exclusionKeys);
console.log(listIds)
const uniqueIds = listIds.reduce((acc, currentValue) => {
	if (!acc.includes(currentValue)) {
		acc.push(currentValue);
	} else {
		const index = acc.indexOf(currentValue)
		acc.splice(index, 1)
}
	return acc
}, []);
console.log('Cписок уникальных id:', uniqueIds);
console.log('Cписок объектов с расшифрованными полями с суффиксом id', decoded);
