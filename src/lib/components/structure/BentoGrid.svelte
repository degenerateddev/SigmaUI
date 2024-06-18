<script lang="ts">
    import { onMount, afterUpdate } from 'svelte';
    
    export let cols: number = 2;
    
    let slotContent: HTMLElement;
    let rows: number = 1;

    onMount(() => {
        updateGrid();
    });

    afterUpdate(() => {
        adjustLastItem();
    });

    $: slotContent, updateGrid();

    function updateGrid() {
        const elements = slotContent?.childNodes ? Array.from(slotContent.childNodes).filter(node => node.nodeType === Node.ELEMENT_NODE) : [];
        const itemCount = elements.length;
        rows = Math.ceil(itemCount / cols);
    }

    function adjustLastItem() {
        const elements = slotContent?.childNodes ? Array.from(slotContent.childNodes).filter(node => node.nodeType === Node.ELEMENT_NODE) : [];
        const itemCount = elements.length;
        // Reset all items to default before applying specific styles
        elements.forEach(element => {
            element.style.gridColumn = 'auto';
        });
        // If there's an odd number of items, make the last item span all columns
        if (itemCount % cols !== 0) {
            const lastItem = elements[itemCount - 1] as HTMLElement;
            lastItem.style.gridColumn = '1 / -1';
        }
    }
</script>

<div bind:this={slotContent} class="grid" style="grid-template-columns: repeat({cols}, 1fr); grid-template-rows: repeat({rows}, auto); gap: 5px;">
    <slot />
</div>