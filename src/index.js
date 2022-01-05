import Web3 from "web3";

let url = 'https://mainnet.infura.io/v3/a10d4665373445db987a4b7be2959fc4'
const web3 = new Web3(url)

const privateKey = "0xafd8970a69ddd4663b5bee2e94394ee2c623986f0ee99b3fe580b6844c871d0e"
const address = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
// const currentAccount = web3.eth.accounts.privateKeyToAccount(privateKey)
// console.log('currentAccount', currentAccount);
// const res = web3.eth.accounts.wallet;
// const acc = web3.eth.accounts.wallet.create(2, '54674321§3456764321§345674321§3453647544±±±§±±±!!!43534534534534');
// async function getAccounts (){
//     const res = await web3.eth.getAccounts()
//     // console.log('res', res);
//     return res
// }
// getAccounts().then(res => console.log(res))
// let subscription = web3.eth.subscribe('logs', {
//     address: address,
// }, function(error, result){
//     if (!error)
//         console.log(result);
// });
// console.log('subscription', subscription);
// // console.log('acc', acc);

// web3.eth.getBalance(address).then(res => {
//     const ether = web3.utils.fromWei(res, 'ether')
//     console.log('ether', ether);
// })
// const apiKey = 'U24W131G4EYAADNWBYRU1FAE6C5BA6UVEH'
// const transactionApiUrl = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`
// fetch(transactionApiUrl).then((response) => {
//     const data = response.json()
//     console.log('data', response);
// }).then((data) => {
//     console.log(data);
// });



//
//
//     class TransactionChecker {
//         constructor(address) {
//             this.address = address.toLowerCase();
//             this.web3 = new Web3(url);
//         }
//
//         async checkBlock() {
//             let block = await this.web3.eth.getBlock('latest');
//             let number = block.number;
//             let transactions = block.transactions;
//
//             if (block != null && block.transactions != null) {
//                 for (let txHash of block.transactions) {
//                     let tx = await this.web3.eth.getTransaction(txHash);
//                     console.log('tx', tx);
//                     if (this.address == tx.to.toLowerCase()) {
//                         console.log("from: " + tx.from.toLowerCase() + " to: " + tx.to.toLowerCase() + " value: " + tx.value);
//                     }
//                 }
//             }
//         }
//     }
//
// let transactionChecker = new  TransactionChecker(address);
//
// transactionChecker.checkBlock();
