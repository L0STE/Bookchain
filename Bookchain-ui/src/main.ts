import "./base.css";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import SolanaWallets from 'solana-wallets-vue';

import {
    GlowWalletAdapter,
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    SolletWalletAdapter,
    SolletExtensionWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { BackpackWalletAdapter } from '@solana/wallet-adapter-backpack';
import { BraveWalletAdapter } from '@solana/wallet-adapter-brave';

import 'solana-wallets-vue/styles.css';
import buffer from 'buffer';

// Setup Buffer.
const { Buffer } = buffer;
if (!window.Buffer) window.Buffer = Buffer;

const walletOptions = {
    wallets: [
        new BackpackWalletAdapter(),
        new PhantomWalletAdapter(),
        new BraveWalletAdapter(),
        new SolflareWalletAdapter(),
        new GlowWalletAdapter(),
        new LedgerWalletAdapter(),
        new SolletWalletAdapter(),
        new SolletExtensionWalletAdapter(),
        new TorusWalletAdapter(),
    ],
    autoConnect: true,
};

const app = createApp(App);

app.use(router);
app.use(SolanaWallets, walletOptions);
app.mount('#app')
