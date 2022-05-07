"use strict";(self.webpackChunkrealran=self.webpackChunkrealran||[]).push([[6],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1449:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"overview",title:"Overview",sidebar_position:1},c="RealRan",s={unversionedId:"Getting Started/overview",id:"Getting Started/overview",title:"Overview",description:"RealRan is dedicated to building the Multi-party Trust Protocol in cryptography to power the next generation computing scenario, including Hybrid Smart Contract, Web3 and Metaverse.",source:"@site/docs/Getting Started/Overview.md",sourceDirName:"Getting Started",slug:"/Getting Started/overview",permalink:"/Docs/Getting Started/overview",editUrl:"https://github.com/realran/Docs/tree/main/docs/Getting Started/Overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Get a Random Number",permalink:"/Docs/Getting Started/Get a Random Number"}},u={},d=[{value:"About VRF",id:"about-vrf",level:2},{value:"How to use",id:"how-to-use",level:2}],p={toc:d};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"realran"},"RealRan"),(0,a.kt)("p",null,"RealRan is dedicated to building the Multi-party Trust Protocol in cryptography to power the next generation computing scenario, including Hybrid Smart Contract, Web3 and Metaverse."),(0,a.kt)("h2",{id:"about-vrf"},"About VRF"),(0,a.kt)("p",null,"The on-chain random number of PlatON comes from the Nonce field in the block header, which uses the Nonce of the parent block as the seed and generates the random number with the private key signature of the proposer of the current block. In practical use, the ","[1,33]"," byte of this field can be taken as the random source of the verifiable random number."),(0,a.kt)("p",null,"Giskard, PlatON\u2019s consensus algorithm, uses the VRF algorithm to select validators, and its on-chain Nonce (VRF and proof) is inherently secure, verifiable, random, and non-tamperable. Since all validators in the PlatON network will verify the Nonce field in the block header, this field will also be applied to the random selection of PlatON consensus nodes, the security of which has been fully proved."),(0,a.kt)("p",null,"We launched ",(0,a.kt)("inlineCode",{parentName:"p"},"VRF V1")," version. In this version, we refer to Chainlink's subscription model and provide a developer-friendly VRF service on PlatON based on the use of PlatON's built-in random numbers. Soon, we will release an off-chain MPC version of VRF based on this version, and developers will not need to make major changes to their contracts."),(0,a.kt)("p",null,"The brief contract structure design is as follows:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"contracts_overview",src:n(1823).Z,width:"952",height:"156"})),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/realran/VRFContract/blob/main/sample/VRFConsumer.sol"},"VRFConsumer.sol")," is a sample contract, you can refer to this contract and do the following steps to easily enable VRF integration :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Get the ",(0,a.kt)("inlineCode",{parentName:"li"},"VRFCoordinator")," address based on the network in the and update the ",(0,a.kt)("inlineCode",{parentName:"li"},"vrfCoordinator")," address in the  ",(0,a.kt)("inlineCode",{parentName:"li"},"VRFConsumer.col"),"."),(0,a.kt)("li",{parentName:"ol"},"Deploy the ",(0,a.kt)("inlineCode",{parentName:"li"},"VRFConsumer.col")," contract. This example contract includes the ",(0,a.kt)("inlineCode",{parentName:"li"},"createNewSubscription()")," function in the ",(0,a.kt)("inlineCode",{parentName:"li"},"constructor()")," that creates the subscription and adds itself as a consumer automatically when you deploy it."),(0,a.kt)("li",{parentName:"ol"},"Call the ",(0,a.kt)("inlineCode",{parentName:"li"},"syncRequestRandomWords()")," function in the ",(0,a.kt)("inlineCode",{parentName:"li"},"VRFConsumer.col")," contract to synchronously get random values."),(0,a.kt)("li",{parentName:"ol"},"Or call the ",(0,a.kt)("inlineCode",{parentName:"li"},"requestRandomWords()")," function in the ",(0,a.kt)("inlineCode",{parentName:"li"},"VRFConsumer.col")," contract to asynchronously request random values which are returned via the callback function ",(0,a.kt)("inlineCode",{parentName:"li"},"fulfillRandomWords()"),".")),(0,a.kt)("p",null,"For more, please refer to\uff1a",(0,a.kt)("a",{parentName:"p",href:"./Get%20a%20Random%20Number"},"Get a Random Number")))}m.isMDXComponent=!0},1823:function(e,t,n){t.Z=n.p+"assets/images/contracts_overview-2fac63b52ecff3a0431bd50fded7b6c7.png"}}]);