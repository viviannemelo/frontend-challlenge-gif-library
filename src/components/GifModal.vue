<template>
    <q-dialog v-model="modalVisible" @hide="closeModal">
      <q-card class="card-enlarged w-80 inline-block align-middle text-center">
        <q-card-section>
          <q-img :src="imageSrc"
            alt="enlarged-gif"
            class="w-100 h-100 rounded-md"
          />
        </q-card-section>
        <q-card-title class="text-lg font-semibold">{{ title }}</q-card-title>
        <q-card-actions align="center">
          <q-btn color="green" label="Close" @click="closeModal" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </template>

<script setup>
import { toRefs } from 'vue'

const emit = defineEmits(['hide'])
const props = defineProps(['modalVisible', 'imageSrc', 'title'])
const { modalVisible, imageSrc, title } = toRefs(props)

const closeModal = () => emit('hide')
</script>
