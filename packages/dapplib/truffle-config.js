require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index reflect still artwork guess enrich metal gas'; 
let testAccounts = [
"0xd5ad4355b531460005d32771d4e4d8ad664ea6ff29e83b0b93f125d2f60f56f6",
"0xd5d83e8f9e3a8fe1415a66d3694222e3ee862022df186143483184c31f189736",
"0x895a732865bdb5b462bbd2d6d79c2f2568df2b2fcdfe52dae5d03446c594b6a3",
"0x026fa35ad30d44f98dde705ec9c8646e172fedabf597ce09b1fdf299ecde74c4",
"0x62ed5471ea6c3499877c6d37e21dcda06b4cd2d2de9b08e0edef5fe548ec0000",
"0x88c8ac5b1060d1ad0ce0cbbf4993040f756f894967649792820089f8cae080b4",
"0x2a055c3f6e7b5d59e2d3e50658689b59c7b897520b5c67de3563e5b3df0182f6",
"0x2b6ee7026cbad2fa7d77b4f41691ff33684512259ed28255a7eef0399df950d1",
"0x5549d9a590a5029e87d9f07b3355e06b224f447f2e4f8684bc6764c3618f9587",
"0x13dac59423cff6ec80542305ae820eb1c296e6330c1bd43d11583b449d21b2e2"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

