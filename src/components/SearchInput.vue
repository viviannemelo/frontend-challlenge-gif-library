<template>
  <q-input
    color="green"
    outlined v-model="searchTerm"
    @keyup.enter="onPressEnter"
    label="Type something funny..."
    class="input-text bg-gray rounded-full"
    >
    <template v-slot:append>
      <q-avatar>
        <q-icon name="search" v-for="size in ['md']"
        :key="size"
        :size="size"/>
      </q-avatar>
    </template>
  </q-input>
</template>

<script setup>
import { ref } from 'vue'
import { api } from '../boot/axios'

const searchTerm = ref('')
const gifsData = ref([])

async function searchGifs () {
  try {
    const response = await api.get('gifs/search', {
      params: {
        q: searchTerm.value
      }
    })
    gifsData.value = response.data.data
    return gifsData.value
  } catch (error) {
    console.error('Erro na requisição:', error.message)
  }
}

const emit = defineEmits(['searchByTerm'])

async function onPressEnter (event) {
  if (event.key === 'Enter') {
    const resultSearch = await searchGifs()
    emit('searchByTerm', resultSearch)
  }
}
</script>

<style>
  .input-text{
    width: 50%;
    margin: auto;
    padding-top: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
</style>
