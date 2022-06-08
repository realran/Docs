---
id: overview
title: Overview
sidebar_position: 1
---

# RealRan 

RealRan is dedicated to building the Multi-party Trust Protocol in cryptography to power the next generation computing scenario, including Hybrid Smart Contract, Web3 and Metaverse.

## About VRF

In VRF 1.0, we leverage the PlatON built-in contract to generate on-chain random values in a more developer-friendly and Chainlink-compatible way. Based on the previous version, we released VRF 2.0 beta version, which has been deployed on the PlatON Devnet.

The version mainly introduces an off-chain value generating mechanism. After receiving the event, the off-chain service integrating the BN254 curve algorithm generates the random values and proofs, and then verifies them on the chain before fulfilling the values to the user contract.

The brief contract structure design is as follows:

![contracts_overview](./imgs/contracts_overview.png)

- BLS Service : use multiple BLS private keys to sign seeds separately and aggregate the signatures.

## How to use

[VRFConsumerV2.sol](https://github.com/realran/VRFContract/blob/main/sample/VRFConsumerV2.sol) is a sample contract, you can refer to this contract and do the following steps to easily enable VRF integration :

1. Get the `Key Hash` and `VRFCoordinator` address based on the network in the and update the `keyHash` and `vrfCoordinator` address in the  `VRFConsumerV2.sol`.
2. Deploy the `VRFConsumerV2.sol` contract. This example contract includes the `createNewSubscription()` function in the `constructor()` that creates the subscription and adds itself as a consumer automatically when you deploy it.
3. Call the `requestRandomWords()` function in the `VRFConsumerV2.col` contract to asynchronously request random values which are returned via the callback function `fulfillRandomWords()`.

For more, please refer to：[Get a Random Number](../Get%20a%20Random%20Number)



















