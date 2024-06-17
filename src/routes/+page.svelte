<script>
	import Bento from "$lib/components/structure/Bento.svelte";
	import BentoGrid from "$lib/components/structure/BentoGrid.svelte";
    import LightSwitch from "$lib/components/structure/LightSwitch.svelte";
    import Button from "$lib/components/buttons/Button.svelte";

</script>

<LightSwitch />

<BentoGrid cols={2} rows={2}>
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

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
