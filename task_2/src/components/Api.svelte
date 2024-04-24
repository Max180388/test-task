<script>
import {url} from '../constants.js'

let ur;

url.subscribe(value => {ur = value});
console.log(ur)
</script>

<p>{ ur }</p>
