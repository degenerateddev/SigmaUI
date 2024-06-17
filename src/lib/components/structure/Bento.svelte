<script lang="ts">
    export let size: number = 1;
</script>

<div class="col-span-{size}">
    <div class="m-auto">
        <slot />
    </div>
</div>