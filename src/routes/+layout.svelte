<script>
	import '../app.css';
	import Shell from '$components/structure/Shell.svelte';
	import Flex from '$components/structure/Flex.svelte';
	import FlexGrow from '$components/structure/FlexGrow.svelte';
	import LightSwitch from '$components/structure/LightSwitch.svelte';
	import FlexCol from '$components/structure/FlexCol.svelte';
	import Anchor from '$components/structure/Anchor.svelte';
</script>

<Shell class="bg-surface">

	<svelte:fragment slot="header">
		<Flex vCenter class="p-5">
			<FlexGrow>Grow</FlexGrow>
			<Flex vCenter hCenter>
				<LightSwitch />
				<p>Base Flex</p>
			</Flex>
		</Flex>
	</svelte:fragment>

	<svelte:fragment slot="main">
		<slot />
	</svelte:fragment>

	<svelte:fragment slot="footer">
		<Flex hCenter>
			<FlexCol>
				<Anchor href="/legal">Legal</Anchor>
			</FlexCol>
		</Flex>
	</svelte:fragment>

</Shell>