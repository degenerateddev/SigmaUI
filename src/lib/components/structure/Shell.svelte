<script lang="ts">
	import FlexCol from "./FlexCol.svelte";
	import FlexGrow from "./FlexGrow.svelte";

    let className: string = "";
    export { className as class };
</script>

<FlexCol class="h-screen {className}" vBetween>
    <slot name="header" />

    <FlexGrow class="justify-between">

        <FlexCol>
            <slot name="sidebarLeft" />
        </FlexCol>
    
        <FlexCol class="grow">
            <slot name="main" />
        </FlexCol>

        <FlexCol>
            <slot name="sidebarRight" />
        </FlexCol>
    
    </FlexGrow>

    <slot name="footer" />
</FlexCol>