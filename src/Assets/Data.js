import { Routes } from "../Routes/Routes";

import { FaUsers, FaUserLock,FaLock,
    MdReport, MdAccountBalance, IoIosPricetags, IoDuplicate } from 'react-icons/all';

// Roles
export const Role = {
    superAdmin: { name: 'superAdmin', flag: true },
    admin: { name: 'admin', flag: false }
}

export const sidebarContent = (role) => {

    return [
        { id: 0, item: 'Reports', route: Routes.reports, icon: <MdReport className="side-icons mr-2" /> },
        { id: 1, item: 'All Users', route: Routes.allUsers, icon: <FaUsers className={`side-icons mr-2`} /> },
        { id: 2, item: 'Banned Users', route: Routes.bannedUsers, icon: <FaUserLock className={`side-icons mr-2`} /> },
        { id: 3, item: 'Business Accounts', route: Routes.businessAccounts, icon: <MdAccountBalance className="side-icons mr-2" /> },
        { id: 4, item: 'Pricing', route: Routes.pricing, icon: <IoIosPricetags className={`side-icons mr-2`} /> },
        { id: 5, item: 'Preference Categories', route: Routes.categories, icon: <IoDuplicate className={`side-icons mr-2`} /> },
        { id: 6, item: 'Change Password', route: Routes.changePassword, icon: <FaLock className={`side-icons mr-2`} /> },
    ];

}

export const checkBoxesData = [
    { index: 0, labelText: 'Prking' },
    { index: 1, labelText: 'Indoor Dining' },
    { index: 2, labelText: 'Outdoor Dining' },
    { index: 3, labelText: 'Wifi' },
    { index: 4, labelText: 'Airconditioning' },
    { index: 5, labelText: 'Complementary breakfast' },
    { index: 6, labelText: 'Credit Card payment' },
    { index: 7, labelText: 'Food Delivery' },

    { index: 0, labelText: 'Flexible check-in/check-out' },
    { index: 1, labelText: 'In-room Amenties' },
    { index: 2, labelText: 'Free Breakfast' },
    { index: 3, labelText: 'Free Parking' },
    { index: 4, labelText: 'Bar Lounge' },
    { index: 5, labelText: 'Fitness Center' },
    { index: 6, labelText: 'Coffee Machine' },
    { index: 7, labelText: 'Keyless Entry' },

    { index: 0, labelText: 'Baseball' },
    { index: 1, labelText: 'Basketball' },
    { index: 2, labelText: 'Badmintor' },
    { index: 3, labelText: 'Golf' },
    { index: 4, labelText: 'Soccer' },

    { index: 0, labelText: 'Museums' },
    { index: 1, labelText: 'Theatre play' },
    { index: 2, labelText: 'Zoo' },
    { index: 3, labelText: 'Parks and Wildlife' },
    { index: 4, labelText: 'Adventure Parks' },
];

export const clientTableHeading = ["CLIENT NAME", "PROMOTION AVAILED", "DATE AVAILMENT", "DETAILS"];

export const categoryTableHeading = ["Category", "Sub Category", "Type", "Name"];

export const plansTypes = [
    { id: 1, value: "Weekly" },
    { id: 2, value: "Monthly" },
    { id: 3, value: "Quarterly" },
    { id: 4, value: "Bi-Annually" },
    { id: 5, value: "Yearly" }
];


export const promoDurations = [
    { id: 1, value: "2 Day's" },
    { id: 2, value: "4 Day's" },
    { id: 3, value: "6 Day's" },
    { id: 3, value: "8 Day's" }
];

export const peoplePackages = [
    { id: 1, value: "2" },
    { id: 2, value: "4" },
    { id: 3, value: "6" },
    { id: 3, value: "8" }
];
