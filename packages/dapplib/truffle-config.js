require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet reflect rural evidence harvest clock orphan true'; 
let testAccounts = [
"0x8991a3ab16a75c3014f4769b05c1f89b1e745a625c5d9dd99e600f7575dc9256",
"0x427e5a0c7b7623db459b31ccf214dbad25e8e3f7a0d45df7df2e0da39c034ec1",
"0x2ad7aa37910fc2ae3ecd766ad35bcf747d45cba9835ca5442a4d71c0d81ee020",
"0x35982ae09b3ff180ac998dba9af9d382275684c8db723bf9c4739ec36cbf5815",
"0x6a463172efed7721d3520d8c0c4a15d84cdc4249c2d9af0b57e36a487c463528",
"0x7b87b61e59d73713abcfc95c42d3af162083f0311822249940d9877d8cdcdbfa",
"0x2bcdc0f6dff5eaf722de7369a74ea18970a586ec756767ad5ce18d425463af4b",
"0x699aab9a3128731b0dc8728c94bdc4db1313817a2f5878fcf76c2bdc1f75de2f",
"0x036aab1fab33c7a93948b3e029bd0d14e227cc2500fcc44837743097c6921aa4",
"0xe5594e343b97f3f4bf049fc920aab3fdc16808466da8aa8a4926bd8891cfa5cf"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

