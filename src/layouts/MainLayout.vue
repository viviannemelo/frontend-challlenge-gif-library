<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-neutral-950">
      <q-toolbar class="justify-center">
        <q-toolbar-title>
          <h1
          class="text-2xl font-mono"
          > GIF LIBRARY</h1>
        </q-toolbar-title>
        <div>
          <DarkModeToggle />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import DarkModeToggle from '../components/DarkModeToggle.vue'

</script>
