"use strict";(self.webpackChunkrealran=self.webpackChunkrealran||[]).push([[792],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4770:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"Examples",title:"Examples",sidebar_position:3},l=void 0,c={unversionedId:"Getting Started/Examples",id:"Getting Started/Examples",title:"Examples",description:"This is an example of a consumer with subscription management. This tutorial will show how to use Remix to deploy this contract and get random numbers from it.",source:"@site/docs/Getting Started/Examples.md",sourceDirName:"Getting Started",slug:"/Getting Started/Examples",permalink:"/Docs/Getting Started/Examples",editUrl:"https://github.com/realran/Docs/tree/main/docs/Getting Started/Examples.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"Examples",title:"Examples",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Get a Random Number",permalink:"/Docs/Getting Started/Get a Random Number"},next:{title:"Contract Parameters",permalink:"/Docs/Getting Started/Contract Parameters"}},u={},p=[{value:"Deploy the ConsumerWithSubManager.sol contract",id:"deploy-the-consumerwithsubmanagersol-contract",level:2},{value:"Import Contract",id:"import-contract",level:3},{value:"Compile the <code>VRFConsumerV2.sol</code> contract",id:"compile-the-vrfconsumerv2sol-contract",level:3},{value:"Deploy the  contract",id:"deploy-the--contract",level:3},{value:"Funds the subscription",id:"funds-the-subscription",level:3},{value:"Request random values",id:"request-random-values",level:3},{value:"Analyze the ConsumerWithSubManager contract",id:"analyze-the-consumerwithsubmanager-contract",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is an example of a consumer with subscription management. This tutorial will show how to use Remix to deploy this contract and get random numbers from it."),(0,o.kt)("p",null,"This tutorial will be conducted on the ",(0,o.kt)("strong",{parentName:"p"},"PlatON devnet2")," network, the contract address and parameters information about the network can be found in ",(0,o.kt)("a",{parentName:"p",href:"/Contract%20Parameters"},"Contract Parameters"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Table of contents")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deploy the ",(0,o.kt)("a",{parentName:"li",href:"https://remix.ethereum.org/#url=https://github.com/realran/VRFContract/blob/main/sample/ConsumerWithSubManager.sol"},"ConsumerWithSubManager.sol")," contract"),(0,o.kt)("li",{parentName:"ul"},"Funds for the subscription"),(0,o.kt)("li",{parentName:"ul"},"Request random number")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": This contract is both a Consumer and a subscription manager, and the owner of the subscription is this contract, not the address that created the contract. So you will be able to see the subscription information in the ",(0,o.kt)("a",{parentName:"p",href:"https://vrf.realran.com/"},"Subscription Management Dapp"),", but it will not appear in ",(0,o.kt)("strong",{parentName:"p"},"My Subscriptions")," page because you cannot import contract accounts into Metamask.")),(0,o.kt)("h2",{id:"deploy-the-consumerwithsubmanagersol-contract"},"Deploy the ",(0,o.kt)("a",{parentName:"h2",href:"https://remix.ethereum.org/#url=https://github.com/realran/VRFContract/blob/main/sample/ConsumerWithSubManager.sol"},"ConsumerWithSubManager.sol")," contract"),(0,o.kt)("h3",{id:"import-contract"},"Import Contract"),(0,o.kt)("p",null,"Click ",(0,o.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/#url=https://github.com/realran/VRFContract/blob/main/sample/ConsumerWithSubManager.sol"},"ConsumerWithSubManager.sol")," to open it in Remix, you will get this\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/realran/Docs/blob/main/docs/Getting%20Started/imgs/file-structure.png?raw=true",alt:"file-structure"})),(0,o.kt)("p",null,"This contract imports the following dependencies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"VRFCoordinatorV2Interface.sol")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"VRFConsumerBaseV2.sol"))),(0,o.kt)("h3",{id:"compile-the-vrfconsumerv2sol-contract"},"Compile the ",(0,o.kt)("inlineCode",{parentName:"h3"},"VRFConsumerV2.sol")," contract"),(0,o.kt)("p",null,"Before you compile it, plevase check that the values of the ",(0,o.kt)("strong",{parentName:"p"},"KeyHash")," and ",(0,o.kt)("strong",{parentName:"p"},"Coordinator")," ",(0,o.kt)("strong",{parentName:"p"},"address")," in your contract are correct!"),(0,o.kt)("p",null,"Right click on the contract file and select compile:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/realran/Docs/blob/main/docs/Getting%20Started/imgs/compile.jpg?raw=true",alt:"compile"})),(0,o.kt)("h3",{id:"deploy-the--contract"},"Deploy the  contract"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/realran/Docs/blob/main/docs/Getting%20Started/imgs/deploy.jpg?raw=true",alt:"deploy"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the Remix left sidebar, click the ",(0,o.kt)("strong",{parentName:"p"},"Deploy & run transactions")," tab.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"select the ",(0,o.kt)("strong",{parentName:"p"},"Injected Provider - Metamask")," Environment.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConsumerWithSubManager")," contract.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Deploy")," button.  Then Metamask will detect your transaction and request to send it."))),(0,o.kt)("p",null,"When you finish the contract deployment, you will find that you have completed the creation of the subscription, the creation of the consumer, and the addition of the consumer to the subscription."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/realran/Docs/blob/main/docs/Getting%20Started/imgs/subId.png?raw=true",alt:"subId"})),(0,o.kt)("h3",{id:"funds-the-subscription"},"Funds the subscription"),(0,o.kt)("p",null,"Find your ",(0,o.kt)("inlineCode",{parentName:"p"},"subId")," in ",(0,o.kt)("a",{parentName:"p",href:"https://vrf.realran.com/"},"Subscription Management Dapp"),", connect to your wallet and click ",(0,o.kt)("strong",{parentName:"p"},"Add Funds")," to recharge for you subscription. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/realran/Docs/blob/main/docs/Getting%20Started/imgs/fund.jpg?raw=true",alt:"fund"})),(0,o.kt)("h3",{id:"request-random-values"},"Request random values"),(0,o.kt)("p",null,"In remix to initiate a request by calling the ",(0,o.kt)("strong",{parentName:"p"},"requestRandomWords")," method. Before that, enter the number of random numbers you want in the input box."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/realran/Docs/blob/main/docs/Getting%20Started/imgs/request.jpg?raw=true",alt:"request"})),(0,o.kt)("p",null,"When you see both ",(0,o.kt)("inlineCode",{parentName:"p"},"Request")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Request fulfilled")," transactions are successful on the ",(0,o.kt)("strong",{parentName:"p"},"Subscription Management Dapp")," page, like the following, it proves that you have successfully obtained the random number."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/realran/Docs/blob/main/docs/Getting%20Started/imgs/result.jpg?raw=true",alt:"result"})),(0,o.kt)("p",null,"The random numbers are stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"s_randomWords"),", you can verify your results by querying the value of this parameter."),(0,o.kt)("h2",{id:"analyze-the-consumerwithsubmanager-contract"},"Analyze the ConsumerWithSubManager contract"),(0,o.kt)("p",null,"As a consumer of random numbers, the Consumer contract also has subscription management functions, including ",(0,o.kt)("inlineCode",{parentName:"p"},"createSubscription"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"addConsumer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"removeConsumer"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"cancelSubscription"),". Therefore, this contract has the authority to manage subscriptions. You can split Consumer and Subscription Management according to your actual usage scenarios."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport "@realrancrypto/contracts@2.1.0/src/interfaces/VRFCoordinatorV2Interface.sol";\nimport "@realrancrypto/contracts@2.1.0/src/VRFConsumerBaseV2.sol";\n\ncontract ConsumerWithSubManager is VRFConsumerBaseV2 {\n\n  VRFCoordinatorV2Interface COORDINATOR;\n\n  // The proving key hash key associated with the bls public key\n  bytes32 keyHash = 0xefa695190d528bcfb742f4bc74f637209844727c71bcadf1e175aee94ded9d8e;\n\n  // Your subscription ID.\n  uint64 public s_subscriptionId;\n\n  // PlatON Devnet coordinator.\n  address vrfCoordinator = 0x3fB03626eDB28320cdD92656f1814b425D69d595;\n\n  // A reasonable default is 2000000, but this value could be different\n  // on other networks.\n  uint32 callbackGasLimit = 2000000;\n\n  // The default is 3, but you can set this higher.\n  uint16 requestConfirmations = 3;\n\n  uint256 public s_requestId;\n  address s_owner;\n\n  uint256[] public s_randomWords;\n\n  constructor() VRFConsumerBaseV2(vrfCoordinator) {\n    COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);\n    s_owner = msg.sender;\n    createNewSubscription();\n  }\n\n  // Assumes the subscription is funded sufficiently.\n  function requestRandomWords(uint32 numWords) external onlyOwner {\n    // Will revert if subscription is not set and funded.\n    s_requestId = COORDINATOR.requestRandomWords(\n      keyHash,\n      s_subscriptionId,\n      requestConfirmations,\n      callbackGasLimit,\n      numWords\n    );\n  }\n\n  function fulfillRandomWords(\n    uint256, /* requestId */\n    uint256[] memory randomWords\n  ) internal override {\n    s_randomWords = randomWords;\n  }\n\n  // Create a new subscription when the contract is initially deployed.\n  function createNewSubscription() private onlyOwner {\n    // Create a subscription with a new subscription ID.\n    address[] memory consumers = new address[](1);\n    consumers[0] = address(this);\n    s_subscriptionId = COORDINATOR.createSubscription();\n    // Add this contract as a consumer of its own subscription.\n    COORDINATOR.addConsumer(s_subscriptionId, consumers[0]);\n  }\n\n  function addConsumer(address consumerAddress) external onlyOwner {\n    // Add a consumer contract to the subscription.\n    COORDINATOR.addConsumer(s_subscriptionId, consumerAddress);\n  }\n\n  function removeConsumer(address consumerAddress) external onlyOwner {\n    // Remove a consumer contract from the subscription.\n    COORDINATOR.removeConsumer(s_subscriptionId, consumerAddress);\n  }\n\n  function cancelSubscription(address receivingWallet) external onlyOwner {\n    // Cancel the subscription and send the remaining Token to a wallet address.\n    // In this version, receivingWallet is a reserved field that users can fill out as they please.\n    COORDINATOR.cancelSubscription(s_subscriptionId, receivingWallet);\n    s_subscriptionId = 0;\n  }\n\n  modifier onlyOwner() {\n    require(msg.sender == s_owner);\n    _;\n  }\n}\n')),(0,o.kt)("p",null," The contract includes the following parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s_subscriptionId"),": the subscription ID."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"keyHash"),": the proving key hash key associated with the bls public key."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"vrfCoordinator"),": the address of the VRFCoordinator contract."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s_randomWords"),": used to store random values.")),(0,o.kt)("p",null," The contract includes the following functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"createNewSubscription()"),": creates a new subscription and add the consumer itself to the subscription when the contract is initially deployed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"requestRandomWords()"),": requests random values asynchronously."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fulfillRandomWords()"),": receives random values and stores them with the contract."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"addConsumer()"),": add a consumer contract to the subscription."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"removeConsumer()"),": remove a consumer contract from the subscription."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cancelSubscription()"),": cancel the subscription.")))}d.isMDXComponent=!0}}]);