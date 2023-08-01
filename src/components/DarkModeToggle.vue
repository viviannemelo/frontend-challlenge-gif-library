<template>
  <q-toggle
    v-model="darkMode"
    color="white"
    size="lg"
  />
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const darkMode = ref(false)
watch(darkMode, (darkMode) => {
  $q.dark.set(darkMode)
  $q.localStorage.set('darkMode', darkMode)
})

onMounted(() => {
  const darkModeIsActive = $q.localStorage.getItem('darkMode')
  if (darkModeIsActive) {
    darkMode.value = true
  }
})

</script>
