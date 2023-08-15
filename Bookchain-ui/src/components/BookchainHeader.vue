<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import * as anchor from "@project-serum/anchor";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { WalletMultiButton, useWallet, useConnection, useAnchorWallet } from 'solana-wallets-vue';
import { RouterLink, RouterView } from "vue-router";
import { BookchainPublickey } from "@/program";
import IDL from "@/program/bookchain.json";


const { connected, publicKey } = useWallet();
const { connection } = useConnection();
const anchorWallet = useAnchorWallet();
let accountInfo = ref(null);
const emit = defineEmits();

const program = computed(() => {
  if (anchorWallet.value) {
    const provider = new anchor.AnchorProvider(
      connection.value,
      anchorWallet.value,
      anchor.AnchorProvider.defaultOptions()
    );
    return new anchor.Program(IDL, BookchainPublickey, provider);
  }
  return null;
});

watch(connected, (newValue) => {
    emit('walletStatusChanged', newValue);
});

watch(publicKey, async (newValue) => {
    emit('publicKey', newValue.toString());
    console.log(checkProfileExists());
});

async function checkProfileExists(): Promise<boolean> {
  const [profilePDA, _] = findProgramAddressSync(utf8.encode("profile"), publicKey.toBuffer(), program.programId);
  if (accountInfo = await connection.getAccountInfo(profilePDA)) {
    return true;
  } else {
    return false;
  }
}

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





