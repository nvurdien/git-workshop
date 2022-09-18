<script lang="ts">
    import DescriptionListItem from './descriptionListItem.svelte';
    import type {_DescriptionListItem} from '../interfaces';

	export let items:_DescriptionListItem[];
</script>

{#each items as item (item.id)}
    <DescriptionListItem descriptions={item}/>
{/each}