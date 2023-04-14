<template>
    <div>
        <p class="emoji">{{ emotion.emoji }}</p>
        <p class="tooltip">{{ emotion.title }}</p>
    </div>
</template>

<script setup>
    const props = defineProps({
        emotionId: Number
    })

    const emotions = [
        { id: 0, title: 'Joy', emoji: '😊' },
        { id: 1, title: 'Sadness', emoji: '😔' },
        { id: 2, title: 'Anger', emoji: '🤬' },
        { id: 3, title: 'Anxiety', emoji: '😨' },
        { id: 4, title: 'Love', emoji: '❤️' },
        { id: 5, title: 'Surprise', emoji: '😮' },
        { id: 6, title: 'Disgust', emoji: '🤢' },
        { id: 7, title: 'Hope', emoji: '🤗' },
        { id: 8, title: 'Anticipation', emoji: '🤔' }
    ]

    const emotion = emotions.find(e => e.id === props.emotionId)
</script>

<style scoped>
    div {
        display: block;
        position: relative;
        user-select: none;
        
        margin-bottom: .4rem;
    }
    
    div:is(:hover, :active){
        z-index: 100;
    }
    
    .emoji {
        display: inline-block;
        text-shadow: 2px 2px 4px var(--col-light-gray);

        user-select: none;

        line-height: 100%;

        margin: 0;

        rotate: 0;

        font-size: 3rem;

        transition: text-shadow var(--transition-time), rotate var(--transition-time), translate var(--transition-time);
    }

    .emoji:is(:hover, :active) {
        text-shadow: 4px 4px 8px var(--col-light-gray);

        translate: -2px -2px;

        rotate: 6deg;
    }

    .tooltip {
        margin: 0;

        position: absolute;
        bottom: -1rem;
        left: 50%;
        transform: translate(-50%, 100%);

        padding: 0.3rem 1rem;
        border-radius: var(--round);

        background-color: var(--col-black);
        color: var(--col-white);

        opacity: 0;
        visibility: hidden;
        transition: opacity var(--transition-time);

        font-size: 1.1rem;
        font-weight: 600;
        letter-spacing: 0.1rem;

        z-index: 2;
    }

    .emoji:is(:hover, :active) + .tooltip {
        opacity: 1;
        visibility: visible;
        box-shadow: var(--shadow-sm);
    }

    @media screen and (max-width: 400px) {
        .emoji {
            font-size: 2.5rem;
        }
    }

    @media screen and (max-width: 280px) {
        .emoji {
            font-size: 2rem;
        }
    }
</style>