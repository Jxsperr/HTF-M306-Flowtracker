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

    const emits = defineEmits(['close', 'save'])

    const props = defineProps({
        flow: Object
    })

    const newFlow = ref(props.flow)

    function toggleEmotion(emotionId) {
        if(newFlow.value.emotions.includes(emotionId)){
            let idx = newFlow.value.emotions.findIndex(_id => _id == emotionId)
            newFlow.value.emotions.splice(idx, 1)
        } else {
            newFlow.value.emotions.push(emotionId)
        }
    }

    function modalClosed(){
        newFlow.value = null
        
        emits('close')
    }

    function updateEntry(){
        emits('save', {
            id: newFlow.value.id,
            title: newFlow.value.title,
            description: newFlow.value.description,
            emotions: [...newFlow.value.emotions].sort((a, b) => a.id - b.id)
        })

        modalClosed()
    }
</script>

<template>
    <Modal modalTitle="Edit Flow" @close="modalClosed">
        <template #content>
            <div class="emotionSelector">
                <Emoji
                    v-for="emotion of emotions" :emotionId="emotion.id"
                    
                    showLabel="true"
                    showTooltip="false"
                    
                    @click="()=> toggleEmotion(emotion.id)"
                    
                    :class='{
                        "emotion": true,
                        "selected": newFlow.emotions.includes(emotion.id)
                    }'/>
            </div>

            <Input id="flowTitle" label="Title" v-model="newFlow.title" />
            <Textarea id="flowDescription" label="Description" v-model="newFlow.description"></Textarea>

            <div class="submitContainer">
                <button @click="updateEntry">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p>Save Changes</p>
                </button>
            </div>
        </template>
    </Modal>
</template>

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