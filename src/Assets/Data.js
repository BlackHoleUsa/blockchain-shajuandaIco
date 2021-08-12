import { Routes } from "../Routes/Routes";
import { BsGraphUp } from 'react-icons/bs';
import { Images } from "./Images";

export const sidebarContent = [
    { id: 0, item: 'Statics', route: Routes.dashboard, icon: <BsGraphUp className="side-icons mr-2" /> }
];

// features data

export const featureData = [
    { id: 1, heading: 'Lorem Ipsum', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever", image: Images.jig },
    { id: 2, heading: 'Lorem Ipsum', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever", image: Images.bulb },
    { id: 3, heading: 'Lorem Ipsum', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever", image: Images.profit },
    { id: 4, heading: 'Lorem Ipsum', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever", image: Images.line },
    { id: 5, heading: 'Lorem Ipsum', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever", image: Images.mind },
    { id: 6, heading: 'Lorem Ipsum', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever", image: Images.db }
];

export const teamMembers = [
    { id: 1, name: 'Calvin McDavis', role: 'Real-Estate Investor', image: Images.teamMembers[0] },
    { id: 2, name: 'Ramesh Nallasamy-Sr.', role: 'Solution Architect', image: Images.teamMembers[1] },
    { id: 3, name: 'Andrew Markony', role: 'Head of Marketing', image: Images.teamMembers[2] },
    { id: 4, name: 'Yolonda Davis Kennedy', role: 'Prosci CM', image: Images.teamMembers[3] }
];

export const questions = [
    { question: '1. Why You Like to Invest In Crypto ?', ans: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believabledon't look even slightly believable" },
    { question: '1. Why You Like Cryptocurrency Business ?', ans: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believabledon't look even slightly believable" },
    { question: '1. How Can You Start a Business With Us ?', ans: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believabledon't look even slightly believable" },
    { question: '1. Why You Like to Inves In Crypto ?', ans: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believabledon't look even slightly believable" }
];

export const footerLinks = [
    "Advertiser Agreement", "Acceptable Use Policy", 
    "Privacy Policy", "Technology Privacy", "Developer Agreement", "Home", "About Us", 
    "Roadmap", "Blog", "Partner"
];