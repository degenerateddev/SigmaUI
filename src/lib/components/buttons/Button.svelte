<script lang="ts">
    export let primary: boolean = false;
    export let small: boolean = false;
</script>

<button class="{small ? 'px-6 py-2 text-sm rounded-sm' : 'px-8 py-3 text-base rounded-md'} text-surface shadow-md shadow-black/50 hover:scale-105 hover:shadow-lg duration-100 ease-in-out {primary ? 'bg-primary' : 'bg-secondary'}">
    <slot />
</button>