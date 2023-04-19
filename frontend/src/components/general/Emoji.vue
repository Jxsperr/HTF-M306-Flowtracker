<script setup>
import { emotions } from "../../mockData";

const props = defineProps({
  emotionId: Number,
  size: {
    type: String,
    required: false,
    default: "big",
  },
});

const emotion = emotions.find((e) => e.id === props.emotionId);
</script>

<template>
  <div
    :class="{
      small: props.size === 'small',
    }"
  >
    <p class="emoji">{{ emotion.emoji }}</p>
    <p v-if="props.size != 'small'" class="tooltip">{{ emotion.title }}</p>
  </div>
</template>

<style scoped>
div {
  display: block;
  position: relative;
  user-select: none;

  margin-bottom: 0.4rem;
}

div:is(:hover, :active) {
  z-index: 100;
}

.emoji {
  text-shadow: 2px 2px 4px var(--col-light-gray);

  user-select: none;

  line-height: 100%;

  margin: 0;

  rotate: 0;

  font-size: 3rem;

  transition: text-shadow var(--transition-time), rotate var(--transition-time),
    translate var(--transition-time);
}

.emoji:is(:hover, :active) {
  text-shadow: 4px 4px 8px var(--col-light-gray);

  translate: -2px -2px;

  rotate: 6deg;
}

.tooltip {
  margin: 0;

  word-break: keep-all;

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
  div:not(.small) .emoji {
    font-size: 2.5rem;
  }
}

@media screen and (max-width: 280px) {
  div:not(.small) .emoji {
    font-size: 2rem;
  }
}

div.small .emoji {
  font-size: 2rem;
  margin: 0;
  margin-right: -0.5rem;
}

div.small .tooltip {
  font-size: 0.8rem;
  margin-top: 0.5rem;
}
</style>
