<script lang="ts">
	import Bento from "$lib/components/structure/Bento.svelte";
	import BentoGrid from "$lib/components/structure/BentoGrid.svelte";
    import Button from "$lib/components/buttons/Button.svelte";
	import Flex from "$lib/components/structure/Flex.svelte";
	import Container from "$lib/components/structure/Container.svelte";
	import FlexCol from "$lib/components/structure/FlexCol.svelte";
	import Anchor from "$lib/components/structure/Anchor.svelte";
	import ButtonGroup from "$components/buttons/ButtonGroup.svelte";

</script>

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

<Container>
    <ButtonGroup>
        <Button>Button 1</Button>
        <Button primary>Button 2</Button>
        <Button>Button 3</Button>
    </ButtonGroup>
</Container>