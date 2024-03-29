---
id: Contract Parameters
title: Contract Parameters
sidebar_position: 4
---

## Coordinator Parameters

These parameters are configured in the coordinator contract. You can view them by running `getConfig` on the coordinator. 

- `uint16 minimumRequestConfirmations`: The minimum number of confirmation blocks on VRF requests before oracles respond
- `uint32 maxGasLimit`: The maximum gas limit supported for a `fulfillRandomWords` callback.
- `uint32 gasAfterPaymentCalculation`: This is additional Gas, which is used to cover the extra operation cost during the callback process, as well as the cost paid to VRF Node.

## Fee parameters

Fee parameters are configured in the coordinator contract and specify the premium you pay per request in addition to the gas cost for the transaction. You can view them by running `getFeeConfig` on the coordinator. 

## Configurations

#### PlatON Mainnet

- RPC URL: https://openapi2.platon.network/rpc
- Explorer: https://scan.platon.network/

| **Parameter**                 | Value        |
| :---------------------------- | :----------- |
| VRF Coordinator               | comming soon |
| KeyHash                       | comming soon |
| Premium                       | comming soon |
| Maximum Request Confirmations | 200          |
| Minimum Confirmations         | 3            |
| Maximum Consumers             | 100          |
| Maximum Random Values         | 500          |
| Maximum GasLimit              | 2500000      |

#### PlatON Devnet2 Testnet

- RPC URL: https://devnet2openapi.platon.network/rpc  
- Faucet: https://devnet2faucet.platon.network/faucet
- Explorer: [https://devnet2scan.platon.network](https://devnet2scan.platon.network/)

| Item                          | Value                                                        |
| :---------------------------- | :----------------------------------------------------------- |
| VRF Coordinator               | 0x67dc19ca89EA3D322B8C7cC4AD2B3BA7bDF2d089                   |
| KeyHash                       | 0x818b4b257c281d2e4db77e3bb13733185a31ab805d863047ef7093e2379e87cd |
| Premium                       | 1000000 Gas （Assuming gasprice = 0.000000001, the premium is 0.001 LAT） |
| Maximum Request Confirmations | 200                                                          |
| Minimum Confirmations         | 3                                                            |
| Maximum Consumers             | 100                                                          |
| Maximum Random Values         | 500                                                          |
| Maximum GasLimit              | 2500000                                                      |