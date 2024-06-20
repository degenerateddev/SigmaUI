<div class="button-group">
    <slot />
</div>

<style>
    :global(div.button-group > button) {
        border-radius: 0;
        /* Box shadow only bottom */
        box-shadow: 0px 3px 3px rgba(0, 0, 0, .5);
    }

    :global(div.button-group > button:first-child) {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    :global(div.button-group > button:last-child) {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    :global(div.button-group) {
        margin: 0;
        padding: 0;
        display: flex;
    }
</style>