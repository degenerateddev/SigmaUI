<script lang="ts">
    export let primary: boolean = false;
</script>

<button class="px-10 py-3 rounded-sm {primary ? 'bg-primary' : 'bg-secondary'}">
    <slot />
</button>