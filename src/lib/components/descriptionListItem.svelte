<script lang="ts">
    import { Link } from "svelte-routing";
    import type {_DescriptionListItem} from '../interfaces';

    export let descriptions:_DescriptionListItem;
	let {id, title, description} = descriptions;
</script>

<li>
    <Link to="post/{id}" class="uk-link-reset">
        <dt>{title}</dt>
        <dd>{description}</dd> 
    </Link>
</li>