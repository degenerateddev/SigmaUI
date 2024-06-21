<script lang="ts">
	import Bento from "$lib/components/structure/Bento.svelte";
	import BentoGrid from "$lib/components/structure/BentoGrid.svelte";
    import Button from "$lib/components/buttons/Button.svelte";
	import Container from "$lib/components/structure/Container.svelte";
	import ButtonGroup from "$components/buttons/ButtonGroup.svelte";
	import HeroSection from "$components/structure/HeroSection.svelte";
	import Card from "$components/structure/Card.svelte";
    import Cancel from "$components/buttons/Cancel.svelte";
</script>

<Container>
    <HeroSection title="Headline" bg="img/bg.jpg">
        <Card>
            <svelte:fragment slot="header">
                <h2>Card Header</h2>
            </svelte:fragment>
    
            <svelte:fragment slot="body">
                <p>Card Body</p>
            </svelte:fragment>
    
            <svelte:fragment slot="footer">
                <p>Card Footer</p>
            </svelte:fragment>
        </Card>
    
        <Card>
            <svelte:fragment slot="header">
                <h2>Card Header</h2>
            </svelte:fragment>
            
            <svelte:fragment slot="body">
                <p>Card Body</p>
            </svelte:fragment>
    
            <svelte:fragment slot="footer">
                <p>Card Footer</p>
            </svelte:fragment>
        </Card>
    
        <Card>
            <svelte:fragment slot="header">
                <h2>Card Header</h2>
            </svelte:fragment>
            
            <svelte:fragment slot="body">
                <p>Card Body</p>
            </svelte:fragment>
    
            <svelte:fragment slot="footer">
                <p>Card Footer</p>
            </svelte:fragment>
        </Card>
    </HeroSection>
</Container>

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
            <Cancel>

            </Cancel>
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