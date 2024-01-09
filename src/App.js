//Sorry, couldn't complete the project.
const web3 = new Web3(window.ethereum);

const contractABI = [
];

const contractAddress = '0xDCBc586cAb42a1D193CaCD165a81E5fbd9B428d7';

const accountAddress = '0xMY_ACCOUNT_ADDRESS'; 

const contract = new web3.eth.Contract(contractABI, contractAddress);

const getTokenBalance = async () => {
  try {
    const balance = await contract.methods.balanceOf(accountAddress).call();
    return balance;
  } catch (error) {
    console.error('Error fetching balance:', error);
    return null;
  }
};

const updateBalance = async () => {
  const balanceElement = document.getElementById('balance');
  const balance = await getTokenBalance();
  if (balance !== null) {
    balanceElement.textContent = `Token Balance: ${balance}`;
  } else {
    balanceElement.textContent = 'Error fetching balance';
  }
};

updateBalance();