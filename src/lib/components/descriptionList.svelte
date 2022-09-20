<script lang="ts">
    import DescriptionListItem from './descriptionListItem.svelte';
    import type {_DescriptionListItem} from '../interfaces';

    // export to require params when svelte component is called
	export let items:_DescriptionListItem[];
</script>

<!--Looping thorugh items svelte is done like this-->
{#each items as item (item.id)}
    <DescriptionListItem descriptions={item}/>
{/each}