import { Routes } from "../Routes/Routes";
import { BsGraphUp } from 'react-icons/bs';
import { Images } from "./Images";

export const sidebarContent = [
    { id: 0, item: 'Statics', route: Routes.dashboard, icon: <BsGraphUp className="side-icons mr-2" /> }
];

// features data

export const featureData = [
    { id: 1, heading: 'Market efficiency ', text: "SA RA Token will ensure that the market is running smoothly by improving on the trading conditions via giving rewards to the market makers. With time, our platform will have better market conditions which will allow us to expand our market cap to accommodate more participant.", image: Images.bulb },
    { id: 2, heading: 'ERC20 compatibility', text: "The ERC-20 token are among the greatest important Ether tokens. ERC-20 has surfaced as the formal definition; it will be used for all digital signatures on the Ethereum blockchain for asset development and establishes a set of rules that must be followed by all Ethereum-based tokens.", image: Images.jig },
    { id: 3, heading: 'Decentralized ownership', text: "SA RA Token will facilitate in distribution of decentralized ownership of ERC-20 token across the Ethereum Blockchain networks. Our participants will have a chance to distribute their digital wealth across one of the most popular and fastest growing blockchain network in the industry of cryptocurrency.", image: Images.profit },
    { id: 4, heading: 'Continuous distribution', text: "Since our Token is meant to serve as utility token, there it will be distributed across various Ethereum blockchain, it will have a continuous distribution of user in the liquidity as they will contribute in the reward.", image: Images.line },
    { id: 5, heading: 'Super user Loyalty', text: "Our loyalty program with our SA RA Token platform will give all our participant’s chances to enjoy discounted transitions, reduced fees, and valuable benefits. This will reward their loyalty in the long run.", image: Images.mind },
    { id: 6, heading: 'On chain Governance', text: "One of the ultimate goals of the SA RA Token is to make sure that token holders are given chances to give guidance on the development strategies. This is to ensure that holders are involved in making all the decisions which are needed to move the network growing.", image: Images.db }
];

export const teamMembers = [
    { id: 1, name: 'Calvin McDavis', role: 'Real-Estate Investor', image: Images.teamMembers[0] },
    { id: 2, name: 'Ramesh Nallasamy-Sr.', role: 'Solution Architect', image: Images.teamMembers[1] },
    { id: 3, name: 'Andrew Markony', role: 'Head of Marketing', image: Images.teamMembers[2] },
    { id: 4, name: 'Yolonda Davis Kennedy', role: 'Prosci CM', image: Images.teamMembers[3] }
];

export const questions = [
    { question: '1. What is money?', ans: "FIAT Money-is a currency established as money by government regulation or law. The term derives from the Latin used in the sense of an order or decree In Latin FIAT means  “It Shall be” FIAT currency is not based on physical commodities such as Gold or Silver deposits. Over the last 40 years almost all the countries have switched over to FIAT currency. But FIAT currency has failed many times during this period." },
    { question: '2. What is Cryptocurrency?', ans: " A digital representation of value, that is neither issued by a central bank or public authority nor necessarily attached to flat currency, but accepted by two or three parties as a means of exchange, and can be transferred, stored or traded electronically. Cryptocurrency is a type of digital asset which can be used to exchange value between parties. It uses encryption to ensure that how it is transferred and to control the creation of new coins. Algorithms govern generation and entirely manged and governed by mathematics." },
    { question: '3. What is Blockchain?', ans: "What is Blockchain-A database (ecosystem) or a ledger that mains a continuously group list of data records or transaction. Blockchain has the potential to revolutionize the digital world by enabling a distribution consensus where each online transaction, past and present, involving digital assets can be verified at any time in the future. Blocks can store any values could represent transactions, contracts, assets, identities, or practically anything that can be described in digital form. Cross industry block chain trends: Crypto Currency, Financial Services, Insurance, Manufacturing-Supply chain, Retail, Energy and utility, Media and entertainment" }
];

export const footerLinks = [
    { id: 1, link: '', text: 'Advertiser Agreement' },
    { id: 2, link: '', text: 'Acceptable Use Policy' },
    { id: 3, link: '', text: 'Privacy Policy' },
    { id: 4, link: '', text: 'Technology Privacy' },
    { id: 5, link: '', text: 'Developer Agreement' },
    { id: 6, link: 'home-section', text: 'Home', value: 'home' },
    { id: 7, link: 'about-section', text: 'About Us', value: 'about' },
    { id: 8, link: 'roadmap-section', text: 'Roadmap', value: 'roadmap' }
    // { id: 9, link: '', text: 'Blog' },
    // { id: 10, link: '', text: 'Partner' }
];