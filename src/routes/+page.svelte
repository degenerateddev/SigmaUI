<script>
	import Bento from "$lib/components/structure/Bento.svelte";
	import BentoGrid from "$lib/components/structure/BentoGrid.svelte";
    import LightSwitch from "$lib/components/structure/LightSwitch.svelte";
    import Button from "$lib/components/buttons/Button.svelte";
	import Flex from "$lib/components/structure/Flex.svelte";
	import FlexGrow from "$lib/components/structure/FlexGrow.svelte";
	import Container from "$lib/components/structure/Container.svelte";

</script>

<Flex vCenter>
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
            <p>First bento box</p>
        </Bento>
        <Bento>
            <h1>🍱</h1>
            <p>Second bento box</p>
        </Bento>
        <Bento>
            <h1>🍱</h1>
            <p>Third bento box</p>
            <Button primary>
                <p>Primary Button</p>
            </Button>
        </Bento>
    </BentoGrid>
</Container>