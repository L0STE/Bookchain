<script setup lang="ts">
import { ref, watch, defineEmits } from 'vue';
import { WalletMultiButton, useWallet } from 'solana-wallets-vue';
import { RouterLink, RouterView } from "vue-router";

const { connected, publicKey } = useWallet();


const emit = defineEmits();

watch(connected, (newValue) => {
    emit('walletStatusChanged', newValue);
});

watch(publicKey, (newValue) => {
    emit('publicKey', newValue.toString());
});

</script>


<template>
  <nav class="bg-transparent p-4 sticky z-10 h-32">
    <div class="container mx-auto h-full">
      <div class="flex justify-between items-center h-full">

        <!-- Title -->
        <div class="text-black font-raleway font-bold text-2xl">
          Bookchain
        </div>

        <div class="flex items-center">
          <p class="text-black font-raleway font-medium text-sm mr-8">For individual</p>
          <RouterLink to="/Daos" class="mr-8"> <p class="text-gray-400 font-raleway font-medium text-sm">For Groups</p> </RouterLink>
          <wallet-multi-button></wallet-multi-button>
        </div>
      </div>
    </div>
  </nav>
</template>





