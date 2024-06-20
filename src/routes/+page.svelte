<script lang="ts">
	import Bento from "$lib/components/structure/Bento.svelte";
	import BentoGrid from "$lib/components/structure/BentoGrid.svelte";
    import LightSwitch from "$lib/components/structure/LightSwitch.svelte";
    import Button from "$lib/components/buttons/Button.svelte";
	import Flex from "$lib/components/structure/Flex.svelte";
	import FlexGrow from "$lib/components/structure/FlexGrow.svelte";
	import Container from "$lib/components/structure/Container.svelte";
	import FlexCol from "$lib/components/structure/FlexCol.svelte";
	import Anchor from "$lib/components/structure/Anchor.svelte";

</script>

<Flex vCenter class="p-5">
    <FlexGrow>Grow</FlexGrow>
    <Flex vCenter hCenter>
        <LightSwitch />
        <p>Base Flex</p>
    </Flex>
</Flex>

<Container>
    <BentoGrid cols={2}>
        <Bento>
            <h1>🍱</h1>
            <p class="font-sans">First bento box</p>
        </Bento>
        <Bento>
            <h1>🍱</h1>
            <p class="font-serif">Second bento box</p>
        </Bento>
        <Bento>
            <h1>🍱</h1>
            <p class="font-mono">Third bento box</p>
            <Button primary>
                <p>Primary Button</p>
            </Button>
        </Bento>
    </BentoGrid>
</Container>

<Flex>
    <FlexCol>
        <Anchor href="/legal">Legal</Anchor>
    </FlexCol>
</Flex>