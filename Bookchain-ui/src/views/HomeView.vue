<script setup lang="ts">
import Header from '../components/BookchainHeader.vue';
import LandingPage from '../components/HomeView/LandingPage.vue';
import ProfileRegister from '../components/HomeView/ProfileRegister.vue';
import Home from '../components/HomeView/Home.vue';

import { ref } from 'vue';

// States for connection and registration
const isConnected = ref(false);
const isRegistered = ref(false); // This should be based on your logic - maybe fetched from the blockchain?
const publicKey = ref('');

const handleWalletStatusChange = (status) => {
    isConnected.value = !isConnected.value;
};

const handlePublicKeyChange = (key) => {
    console.log("PublicKey Changed to: ", key);
    publicKey.value = key;
};
</script>

<template>
  <div class="relative h-screen overflow-y-hidden">
    <Header 
        class="fixed top-0 left-0 w-full z-30" 
        @walletStatusChanged="handleWalletStatusChange"
        @publicKey="handlePublicKeyChange"
    />
    <LandingPage v-if="!isRegistered" />
    
    <ProfileRegister v-if="isConnected && publicKey" :publicKey="publicKey" />
    
    <Home v-if="isConnected && isRegistered" />
  </div>
</template>







