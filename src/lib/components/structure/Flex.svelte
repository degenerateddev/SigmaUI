<script lang="ts">
    export let vCenter: boolean = false;
    export let hCenter: boolean = false;

    let className: string = "";
    export { className as class };
</script>

<div class="flex gap-5 {className}" class:items-center={vCenter} class:justify-center={hCenter}>
    <slot />
</div>