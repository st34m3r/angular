import { Component, OnInit } from "@angular/core";
declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
  children : { 
    path: string,
    title: string 
  }[]
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: "",
    children : []
    
  },
  {
    path: "/products",
    title: "Products and services",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-bag-16",
    class: "",
    children : [
      {path: "/ProductsNewProduct",title: "newProduct"},
      {path: "/ProductsList",title: "list"},
      {path: "/ProductsStocks",title: "Stocks"},
      {path: "/ProductsStocksByLots",title: "Stocks by lot"},
       {path: "/ProductsLot",title: "lots"},
      {path: "/ProductsVA",title: "Variant attributes"},
      {path: "/ProductsStatistics",title: "Statistics"},
      {path: "/ProductsCategories",title: "tags/categories"},
    ]
  },
  {
    path: "/warehouses",
    title: "warehouses",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-bag-16",
    class: "",
    children : [
      {path: "/WarehousesNewWarehouse",title: "newWarehouse"},
      {path: "/WearhousesList",title: "list"},
      {path: "/WearhousesMouvements",title: "mouvements"},
       {path: "/WearhousesMST",title: "mass stock transfer"},
      {path: "/WearhousesRep",title: "Replenishment"},
      {path: "/WearhousesCategories",title: "Tags/categories"},
    ]
  },
  {
    path: "/icons",
    title: "Users",
    rtlTitle: "الرموز",
    icon: "icon-single-02",
    class: "",
    children : []
  },
  {
    path: "/maps",
    title: "Company",
    rtlTitle: "خرائط",
    icon: "icon-components",
    class: "",
    children : []
   },
  {
    path: "/notifications",
    title: "Customers and Suppliers",
    rtlTitle: "إخطارات",
    icon: "icon-link-72",
    class: "",
    children : []
  },
  {
    path: "/tables",
    title: "Purshases",
    rtlTitle: "قائمة الجدول",
    icon: "icon-money-coins",
    class: "",
    children : []
  },
  {
    path: "/typography",
    title: "Sales",
    rtlTitle: "طباعة",
    icon: "icon-coins",
    class: "",
    children : []
  },
  {
    path: "/typography",
    title: "Financial Statements",
    rtlTitle: "طباعة",
    icon: "icon-bank",
    class: "",
    children : []
  },
  {
    path: "/typography",
    title: "Digital Marketing",
    rtlTitle: "طباعة",
    icon: "icon-chart-bar-32",
    class: "",
    children : []
  },
  {
    path: "/typography",
    title: "Reports",
    rtlTitle: "طباعة",
    icon: "icon-notes",
    class: "",
    children : []
  },
  {
    path: "/typography",
    title: "Setting",
    rtlTitle: "طباعة",
    icon: "icon-settings",
    class: "",
    children : []
  },
  {
    path: "/typography",
    title: "Support",
    rtlTitle: "طباعة",
    icon: "icon-support-17",
    class: "",
    children : []
  },
  {
    path: "/rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: "",
    children : []
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
   


  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    return window.innerWidth <= 991;

  }
}
