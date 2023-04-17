<template>
    <Modal modalTitle="New Flow" @close="modalClosed">
        <template #content>
            <div class="emotionSelector">
                <Emoji showLabel="true" showTooltip="false" @click="()=> toggleEmotion(emotion.id)" :class='{
                    "emotion": true,
                    "selected": newEntry.selectedEmotions.includes(emotion.id)
                }' v-for="emotion of emotions" :emotionId="emotion.id"></Emoji>
            </div>

            <Input id="flowTitle" label="Title" v-model="newEntry.title" />
            <Textarea id="flowDescription" label="Description" v-model="newEntry.description" />

            <div class="submitContainer">
                <button @click="createEntry">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p>Create</p>
                </button>
            </div>
        </template>
    </Modal>
</template>

<script setup>
    import Modal from './Modal.vue'
    import Emoji from './Emoji.vue'
    import Input from './Input.vue'
    import Textarea from './Textarea.vue'

    import { ref } from 'vue'

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

    const emits = defineEmits(['close'])

    const newEntry = ref({
        title: '',
        selectedEmotions: []
    })

    function toggleEmotion(emotionId) {
        if(newEntry.value.selectedEmotions.includes(emotionId)){
            let idx = newEntry.value.selectedEmotions.findIndex(_id => _id == emotionId)
            newEntry.value.selectedEmotions.splice(idx, 1)
        } else {
            newEntry.value.selectedEmotions.push(emotionId)
        }
    }

    function modalClosed(){
        newEntry.value.selectedEmotions = []
        newEntry.value.title = ''
        
        emits('close')
    }

    function createEntry(){
        console.log(newEntry.value)

        modalClosed()
    }
</script>

<style scoped>
.emotionSelector {
    display: flex;
    flex-wrap: wrap;

    justify-content: center;

    max-width: 490px;

    margin: auto;

    position: relative;
}

.emotionSelector .emotion {
    opacity: 1;

    margin: .5rem;

    filter: grayscale(100%);

    cursor: pointer;

    transition: filter var(--transition-time), opacity var(--transition-time);
}

.emotionSelector .emotion.selected {
    opacity: 1;
    filter: grayscale(0%);
}

.submitContainer {
    display: flex;
    justify-content: center;

    margin-top: 2rem;
}

@media screen and (max-width: 500px) {
    .emotionSelector {
        max-width: 280px;
    }
}
</style>