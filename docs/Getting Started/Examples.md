---
id: Examples
title: Examples
sidebar_position: 3
---

This is an example of a consumer with subscription management. This tutorial will show how to use Remix to deploy this contract and get random numbers from it.

This tutorial will be conducted on the **PlatON devnet2** network, the contract address and parameters information about the network can be found in [Contract Parameters](/Contract%20Parameters).

**Table of contents**

- Deploy the [ConsumerWithSubManager.sol](https://remix.ethereum.org/#url=https://github.com/realran/VRFContract/blob/main/sample/ConsumerWithSubManager.sol) contract
- Funds for the subscription
- Request random number

> **Note**: This contract is both a Consumer and a subscription manager, and the owner of the subscription is this contract, not the address that created the contract. So you will be able to see the subscription information in the [Subscription Management Dapp](https://vrf.realran.com/), but it will not appear in **My Subscriptions** page because you cannot import contract accounts into Metamask.



## Deploy the [ConsumerWithSubManager.sol](https://remix.ethereum.org/#url=https://github.com/realran/VRFContract/blob/main/sample/ConsumerWithSubManager.sol) contract

### Import Contract

Click [ConsumerWithSubManager.sol](https://remix.ethereum.org/#url=https://github.com/realran/VRFContract/blob/main/sample/ConsumerWithSubManager.sol) to open it in Remix, you will get this：

<div align=center><img src="https://github.com/realran/Docs/blob/main/docs/Getting%20Started/imgs/file-structure.png?raw=true" width = "300" height = "100"/></div>

This contract imports the following dependencies:

  - `VRFCoordinatorV2Interface.sol`
  - `VRFConsumerBaseV2.sol`

###  Compile the `VRFConsumerV2.sol` contract

Before you compile it, plevase check that the values of the **KeyHash** and **Coordinator** **address** in your contract are correct!

Right click on the contract file and select compile:

<div align=center><img src="https://github.com/realran/Docs/blob/main/docs/Getting%20Started/imgs/compile.jpg?raw=true" width = "300" height = "200"  /></div>

###  Deploy the  contract

<div align=center><img src="https://github.com/realran/Docs/blob/main/docs/Getting%20Started/imgs/deploy.jpg?raw=true" width = "300" height = "400" /></div>

1. On the Remix left sidebar, click the **Deploy & run transactions** tab.

2. select the **Injected Provider - Metamask** Environment.

3. Select the `ConsumerWithSubManager` contract.

4. Click the **Deploy** button.  Then Metamask will detect your transaction and request to send it.

When you finish the contract deployment, you will find that you have completed the creation of the subscription, the creation of the consumer, and the addition of the consumer to the subscription.

<div align=center><img src="https://github.com/realran/Docs/blob/main/docs/Getting%20Started/imgs/subId.png?raw=true" width = "300" height = "200" /></div>

###  Funds the subscription

Find your `subId` in [Subscription Management Dapp](https://vrf.realran.com/), connect to your wallet and click **Add Funds** to recharge for you subscription. 

<div align=center><img src="https://github.com/realran/Docs/blob/main/docs/Getting%20Started/imgs/fund.jpg?raw=true?raw=true" width = "1000" height = "400" /></div>



### Request random values

In remix to initiate a request by calling the **requestRandomWords** method. Before that, enter the number of random numbers you want in the input box.

<div align=center><img src="https://github.com/realran/Docs/blob/main/docs/Getting%20Started/imgs/request.jpg" width = "380" height = "350" /></div>

When you see both `Request` and `Request fulfilled` transactions are successful on the **Subscription Management Dapp** page, like the following, it proves that you have successfully obtained the random number.

<div align=center><img src="https://github.com/realran/Docs/blob/main/docs/Getting%20Started/imgs/result.jpg?raw=true" width = "1000" height = "100"/></div>

The random numbers are stored in `s_randomWords`, you can verify your results by querying the value of this parameter.


## Analyze the ConsumerWithSubManager contract

As a consumer of random numbers, the Consumer contract also has subscription management functions, including `createSubscription`, `addConsumer`, `removeConsumer`, and `cancelSubscription`. Therefore, this contract has the authority to manage subscriptions. You can split Consumer and Subscription Management according to your actual usage scenarios.

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@realrancrypto/contracts@2.1.0/src/interfaces/VRFCoordinatorV2Interface.sol";
import "@realrancrypto/contracts@2.1.0/src/VRFConsumerBaseV2.sol";

contract ConsumerWithSubManager is VRFConsumerBaseV2 {

  VRFCoordinatorV2Interface COORDINATOR;

  // The proving key hash key associated with the bls public key
  bytes32 keyHash = 0xefa695190d528bcfb742f4bc74f637209844727c71bcadf1e175aee94ded9d8e;

  // Your subscription ID.
  uint64 public s_subscriptionId;

  // PlatON Devnet coordinator.
  address vrfCoordinator = 0x3fB03626eDB28320cdD92656f1814b425D69d595;

  // A reasonable default is 2000000, but this value could be different
  // on other networks.
  uint32 callbackGasLimit = 2000000;

  // The default is 3, but you can set this higher.
  uint16 requestConfirmations = 3;

  uint256 public s_requestId;
  address s_owner;

  uint256[] public s_randomWords;

  constructor() VRFConsumerBaseV2(vrfCoordinator) {
    COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
    s_owner = msg.sender;
    createNewSubscription();
  }

  // Assumes the subscription is funded sufficiently.
  function requestRandomWords(uint32 numWords) external onlyOwner {
    // Will revert if subscription is not set and funded.
    s_requestId = COORDINATOR.requestRandomWords(
      keyHash,
      s_subscriptionId,
      requestConfirmations,
      callbackGasLimit,
      numWords
    );
  }

  function fulfillRandomWords(
    uint256, /* requestId */
    uint256[] memory randomWords
  ) internal override {
    s_randomWords = randomWords;
  }

  // Create a new subscription when the contract is initially deployed.
  function createNewSubscription() private onlyOwner {
    // Create a subscription with a new subscription ID.
    address[] memory consumers = new address[](1);
    consumers[0] = address(this);
    s_subscriptionId = COORDINATOR.createSubscription();
    // Add this contract as a consumer of its own subscription.
    COORDINATOR.addConsumer(s_subscriptionId, consumers[0]);
  }

  function addConsumer(address consumerAddress) external onlyOwner {
    // Add a consumer contract to the subscription.
    COORDINATOR.addConsumer(s_subscriptionId, consumerAddress);
  }

  function removeConsumer(address consumerAddress) external onlyOwner {
    // Remove a consumer contract from the subscription.
    COORDINATOR.removeConsumer(s_subscriptionId, consumerAddress);
  }

  function cancelSubscription(address receivingWallet) external onlyOwner {
    // Cancel the subscription and send the remaining Token to a wallet address.
    // In this version, receivingWallet is a reserved field that users can fill out as they please.
    COORDINATOR.cancelSubscription(s_subscriptionId, receivingWallet);
    s_subscriptionId = 0;
  }

  modifier onlyOwner() {
    require(msg.sender == s_owner);
    _;
  }
}
```

 The contract includes the following parameters:

  - `s_subscriptionId`: the subscription ID.
  - `keyHash`: the proving key hash key associated with the bls public key.
  - `vrfCoordinator`: the address of the VRFCoordinator contract.
  - `s_randomWords`: used to store random values.


 The contract includes the following functions:

  - `createNewSubscription()`: creates a new subscription and add the consumer itself to the subscription when the contract is initially deployed.
  - `requestRandomWords()`: requests random values asynchronously.
  - `fulfillRandomWords()`: receives random values and stores them with the contract.
  - `addConsumer()`: add a consumer contract to the subscription.
  - `removeConsumer()`: remove a consumer contract from the subscription.
  - `cancelSubscription()`: cancel the subscription.
