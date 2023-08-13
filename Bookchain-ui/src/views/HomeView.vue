<script setup lang="ts">
import Header from '../components/BookchainHeader.vue';
import LandingPage from '../components/HomeView/LandingPage.vue';
import ProfileRegister from '../components/HomeView/ProfileRegister.vue';
import Home from '../components/HomeView/Home.vue';
</script>

<template>
  <div class="relative h-screen overflow-y-hidden">
    <Header class="fixed top-0 left-0 w-full z-30"/>
    <LandingPage />

    <!-- Add: IsConnected = true + IsRegister = false: Show -->
    <ProfileRegister />

    <!-- Add: IsConnected = true + IsRegister = true: Show -->
    <Home />

  </div>
</template>
