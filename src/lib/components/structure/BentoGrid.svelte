<script lang="ts">
    export let cols: number = 2;
    export let rows: number = 2;
</script>

<div class="grid grid-cols-{cols} grid-rows-{rows} gap-5">
    <slot />
</div>