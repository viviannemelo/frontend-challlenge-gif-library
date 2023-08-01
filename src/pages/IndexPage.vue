<template>
  <q-page padding>
    <SearchInput @searchByTerm="updateSearch"/>

    <q-page>
      <q-infinite-scroll
        @load="loadMoreGifs"
        :observer-options="{ rootMargin: '200px' }"
        :attach="true"
        :offset="20"
      >
        <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center m-20">
          <q-card v-for="(gif, index) in gifsData" :key="index"
            class=" gif-card rounded-lg shadow-md bg-gray cursor-pointer"
            @click="showModal(gif.images.original.url, gif.title)">
              <img
                v-if="gif && gif.images && gif.images.fixed_height_downsampled"
                :src="gif.images.fixed_height_downsampled.url"
                :title="selectedImageTitle"
                alt='gif'
              />
          </q-card>
        </div>
      </q-infinite-scroll>
    </q-page>
    <GifModal
      :imageSrc="selectedImage"
      :modalVisible="showImageModal"
      :title="selectedImageTitle"
      @hide="showImageModal = false"
      />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { api } from '../boot/axios'
import SearchInput from '../components/SearchInput.vue'
import GifModal from '../components/GifModal.vue'

const gifsData = ref([])
const searchTerm = ref('')

const offset = ref(0)
const isLoading = ref(false)

onMounted(fetchGifs)

async function fetchGifs () {
  try {
    const response = await api.get('gifs/trending')
    gifsData.value = response.data.data
    offset.value = gifsData.value.length
  } catch (error) {
    console.error('Erro na requisição:', error.message)
  }
}

async function updateSearch (items) {
  gifsData.value = items
  offset.value = 0
  searchTerm.value = items
}

async function loadMoreGifs () {
  if (isLoading.value) return

  isLoading.value = true
  try {
    let response
    if (searchTerm.value) {
      const response = await api.get('gifs/search', {
        params: {
          q: searchTerm.value
        }
      })
      gifsData.value = response.data.data
      offset.value = gifsData.value.length
    } else {
      response = await api.get('gifs/trending', {
        params: {
          offset: offset.value
        }
      })
    }

    gifsData.value = gifsData.value.concat(response.data.data)
    offset.value = gifsData.value.length
  } catch (error) {
    console.error('Erro na requisição:', error.message)
  }

  isLoading.value = false
}

const showImageModal = ref(false)
const selectedImage = ref('')
const selectedImageTitle = ref('')

const showModal = (imageSrc, title) => {
  selectedImage.value = imageSrc
  showImageModal.value = true
  selectedImageTitle.value = title
}
</script>

<style>
  .gif-card{
    height: 80%;
  }
  .gif-card img{
    height: 100%;
  }
</style>
