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
]