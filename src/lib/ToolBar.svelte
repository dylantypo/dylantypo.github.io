<script lang="ts">
    import gsap from 'gsap';
    import { onMount } from 'svelte';

    let expanded = false;
    let toolbar; // Declare the variable toolbar

    function toggleToolbar() {
        expanded = !expanded;
    }

    function handleKeydown(event: { key: string; }) {
        if (event.key === 'Enter' || event.key === ' ') {
            toggleToolbar();
        }
    }

    onMount(async () => {
        gsap.fromTo(toolbar, { x: '200' }, { duration: 4, x: '0', ease: "back" });
    });
</script>

<div
    bind:this={toolbar}
    class="toolbar {expanded ? 'expanded' : ''}"
    on:click={toggleToolbar}
    on:keydown={handleKeydown}
    tabindex="0"
    role="button"
    aria-pressed="{expanded}"
>
    <div class="toolbar-content">
        <a href="https://www.linkedin.com/in/dylan-posner-3a0034152/" target="_blank" class="toolbar-link">
            <div class="wrapper"><i class="fab fa-linkedin-in fa-2xl"></i></div>
        </a>
        <a href="https://github.com/dylantypo" target="_blank" class="toolbar-link">
            <div class="wrapper"><i class="fab fa-github fa-2xl"></i></div>
        </a>
        <a href="/Resume_0523.pdf" target="_blank" class="toolbar-link">
            <div class="wrapper"><i class="fa-regular fa-file fa-2xl"></i></div>
        </a>
        <div class="wrapper"><i class="fa-solid fa-angle-down fa-beat-fade fa-2xl"></i></div>
    </div>
    {#if !expanded}
        <i class="fa-solid fa-gear fa-spin fa-2xl"></i>
    {/if}
</div>

<style>
    .wrapper {
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
    }

    .toolbar {
        position: fixed;
        bottom: 5em;
        right: 5em;
        background: #f9bc60ad;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        transition: height 0.25s, border-radius 0.15s;
        color: #004643;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 3;
    }
    .toolbar.expanded {
        height: 228px;
        border-radius: 25px;
    }
    .toolbar-content {
        display: none;
    }
    .toolbar.expanded .toolbar-content {
        display: flex;
        flex-direction: column;
        align-content: space-around;
    }
    .toolbar-link {
        padding-bottom: 1rem;
        color: #004643;
        text-decoration: none;
    }

    @media (max-width: 1030px) {
        .toolbar {
            opacity: 50%;
            bottom: 2em;
            right: 1em;
        }
        .toolbar.expanded {
            opacity: 100%;
        }
    }
</style>