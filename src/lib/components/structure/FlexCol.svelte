<script lang="ts">
    export let vBetween: boolean = false;

    let className: string = "";
    export { className as class }; 
</script>

<div class="flex flex-col gap-5 {className}" class:justify-between={vBetween}>
    <slot />
</div>