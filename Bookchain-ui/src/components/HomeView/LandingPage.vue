<script setup lang="ts">
import { WalletMultiButton } from 'solana-wallets-vue';
</script>

<template>
  <div class="flex flex-col h-[calc(100vh-32px)] justify-center items-center space-y-4">
    <div class="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-3/4 flex flex-col items-center -mt-8 lg:-mt-10">
        <p class="text-blue-500 font-raleway font-medium text-xl">Your Decentralized Workforce Made Efficient:</p>
        <h1 class="text-LandingTitle font-raleway font-bold text-center mt-4 mb-8">Simplifying Payroll and Invoices <br> with Blockchain-powered Tool</h1>
        
        <!-- NB need to change in CONNECT not select Wallet -->
        <wallet-multi-button></wallet-multi-button>
    </div>
  </div>
</template>
