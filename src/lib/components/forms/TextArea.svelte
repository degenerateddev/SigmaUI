<script lang="ts">
    export let placeholder: string = "";
    export let name: string = "";

    let className: string = "";
    export { className as class };
</script>

<textarea class="{className}" {placeholder} {name}>
    
</textarea>