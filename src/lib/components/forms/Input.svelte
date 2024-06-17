<script lang="ts">
    export let name: string = "";
    export let type: string = "text";
    export let placeholder: string = "";
    export let value: string = "";

    export let handleInput: (e: Event) => void;

    let className: string = "";
    export { className as class };
</script>

<input {name} {type} {placeholder} {value} on:input="{handleInput}" class="{className}" />