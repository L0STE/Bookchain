<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';

const props = defineProps(['publicKey']);
const selectedRole = ref('');

const radioBgClass = computed(() => ({
  Employee: selectedRole.value === 'Employee' ? 'bg-gray-400 bg-opacity-60' : '',
  Employer: selectedRole.value === 'Employer' ? 'bg-gray-400 bg-opacity-60' : '',
  Both: selectedRole.value === 'Both' ? 'bg-gray-400 bg-opacity-60' : ''
}));
</script>

<template>
  <div class="fixed inset-0 bg-[#BFDAFF] bg-opacity-70 flex items-center justify-center z-40">
    <div class="bg-white p-8 rounded-xl w-4/5 max-w-xl text-center">
      <h1 class="text-black font-raleway font-bold text-ProfileRegisterTitle mb-4">Create Profile</h1>

      <div class="p-4">
        <!-- Username Input -->
        <div class="mb-4">
          <label class="text-black font-raleway font-bold text-sm block mb-1 text-left">Username:</label>
          <input type="text" class="border-half border-black p-2 h-10 w-full rounded text-black font-raleway font-thin">
        </div>

        <!-- Wallet Input -->
        <div class="mb-4">
          <label class="text-black font-raleway font-bold text-sm block mb-1 text-left">Your Wallet:</label>
          <input type="text" :value="props.publicKey" class="border-half border-black bg-gray-200 bg-opacity-60 p-2 h-10 w-full rounded text-black font-raleway font-thin" readonly>
        </div>

        <!-- Radio Buttons -->
        <label class="block text-black font-raleway font-bold text-sm mb-2 text-left">Role:</label>
        <div class="flex space-x-4 mb-4">
            <label class="flex flex-col items-center">
            <input type="radio" name="role" value="Employee" v-model="selectedRole" class="hidden">
            <div :class="radioBgClass.Employee" class="border border-black h-8 w-[150px] rounded flex items-center justify-center text-black font-raleway font-thin">Employee</div>
            </label>
            <label class="flex flex-col items-center">
            <input type="radio" name="role" value="Employer" v-model="selectedRole" class="hidden">
            <div :class="radioBgClass.Employer" class="border border-black h-8 w-[150px] rounded flex items-center justify-center text-black font-raleway font-thin">Employer</div>
            </label>
            <label class="flex flex-col items-center">
            <input type="radio" name="role" value="Both" v-model="selectedRole" class="hidden">
            <div :class="radioBgClass.Both" class="border border-black h-8 w-[150px] rounded flex items-center justify-center text-black font-raleway font-thin">Both</div>
            </label>
        </div>

        <!-- Submit Button -->
        <button class="text-black font-raleway font-bold text-xl p-2 rounded mb-4 mx-auto border border-black mt-10">Submit</button>

        <!-- Logo + Text -->
        <div class="flex items-center justify-center space-x-2 mb-4">
          <img src="@/assets/HomeView/ProfileRegister/attention.png" alt="Attention" class="w-[10px] h-auto">
          <p class="text-ProfileSmall text-gray-600 font-raleway font-thin">By clicking submit, you'll initiate a profile creation transaction from <br> connected wallet. Ensure you have enough SOL to sign the transaction.</p>
        </div>
      </div>
    </div>
  </div>
</template>
