/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import Dashboard from "./views/template/Dashboard.jsx";
// import Notifications from "./views/template/Notifications.jsx";
// import Icons from "./views/template/Icons.jsx";
// import Typography from "./views/Typography.jsx";
// import TableList from "./views/template/Tables.jsx";
// import Maps from "./views/template/Map.jsx";
// import UserPage from "./views/User.jsx";
// import UpgradeToPro from "./views/Upgrade.jsx";

import React from "react";
import {FaTwitter, FaWhatsapp, FaInstagram, FaFacebook} from 'react-icons/fa';
import Twitter from "./views/Twitter";
import WhatsApp from "./views/WhatsApp";
import Instagram from "./views/Instagram";
import Facebook from "./views/Facebook";

var routes = [
  {
    path: "/twitter",
    name: "Twitter",
    icon: <FaTwitter/>,
    component: Twitter,
    layout: "/admin"
  },
  {
    path: "/whatsapp",
    name: "WhatsApp",
    icon: <FaWhatsapp/>,
    component: WhatsApp,
    layout: "/admin"
  },
  {
    path: "/instagram",
    name: "Instagram",
    icon: <FaInstagram/>,
    component: Instagram,
    layout: "/admin"
  },
  {
    path: "/facebook",
    name: "Facebook",
    icon: <FaFacebook/>,
    component: Facebook,
    layout: "/admin"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-diamond",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "nc-icon nc-single-02",
  //   component: UserPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "nc-icon nc-tile-56",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship",
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // }
];
export default routes;
