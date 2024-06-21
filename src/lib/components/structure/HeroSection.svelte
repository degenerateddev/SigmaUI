<script lang="ts">
	import Heading from "$components/typo/Heading.svelte";
    import Flex from "$components/structure/Flex.svelte";

    export let title: string = "";
    export let bg: string = "";
</script>

<div class="relative space-y-10">
    <img src={bg} alt="section-bg" class="object-cover w-full h-52" />
    
    <div class="absolute inset-0">
        <div class="flex flex-col w-full items-center justify-between">
            <Heading>{title}</Heading>

            <Flex>
                <slot />
            </Flex>
        </div>
    </div>
</div>