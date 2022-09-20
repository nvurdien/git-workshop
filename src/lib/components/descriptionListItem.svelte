<script lang="ts">
    import { Link } from "svelte-routing";
    import type {_DescriptionListItem} from '../interfaces';

    // export to require params when svelte component is called
    export let descriptions:_DescriptionListItem;
    
    // destruct dictionary for easier readability
	let {id, title, description} = descriptions;
</script>

<li>
    <Link to="post/{id}" class="uk-link-reset">
        <dt>{title}</dt>
        <dd>{description}</dd> 
    </Link>
</li>