<script lang="ts">
    let className: string = "";
    export { className as class };
</script>

<div class="flex flex-grow gap-5 {className}">
    <slot />
</div>