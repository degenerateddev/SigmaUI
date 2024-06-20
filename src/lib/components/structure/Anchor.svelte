<script lang="ts">
    export let href: string;

    let className: string = "";
    export { className as class };
</script>

<a {href} class="text-primary font-semibold {className}">
    <slot />
</a>