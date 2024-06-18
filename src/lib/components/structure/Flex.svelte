<script lang="ts">
    export let vCenter: boolean = false;
    export let hCenter: boolean = false;
</script>

<div class="flex gap-5" class:items-center={vCenter} class:justify-center={hCenter}>
    <slot />
</div>