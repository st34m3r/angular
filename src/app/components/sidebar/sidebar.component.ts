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
    icon: "",
    class: "",
    children : []
    
  },
  {
    path: "/products",
    title: "Products and services",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "",
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
    icon: "",
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
    icon: "",
    class: "",
    children : []
  },
  {
    path: "/maps",
    title: "Company",
    rtlTitle: "خرائط",
    icon: "",
    class: "",
    children : []
   },
  {
    path: "/notifications",
    title: "Customers and Suppliers",
    rtlTitle: "إخطارات",
    icon: "",
    class: "",
    children : []
  },
  {
    path: "/tables",
    title: "Purshases",
    rtlTitle: "قائمة الجدول",
    icon: "",
    class: "",
    children : []
  },
  {
    path: "/typography",
    title: "Sales",
    rtlTitle: "طباعة",
    icon: "",
    class: "",
    children : []
  },
  {
    path: "/typography",
    title: "Financial Statements",
    rtlTitle: "طباعة",
    icon: "",
    class: "",
    children : []
  },
  {
    path: "/typography",
    title: "Digital Marketing",
    rtlTitle: "طباعة",
    icon: "",
    class: "",
    children : []
  },
  {
    path: "/typography",
    title: "Reports",
    rtlTitle: "طباعة",
    icon: "",
    class: "",
    children : []
  },
  {
    path: "/typography",
    title: "Setting",
    rtlTitle: "طباعة",
    icon: "",
    class: "",
    children : []
  },
  {
    path: "/typography",
    title: "Support",
    rtlTitle: "طباعة",
    icon: "",
    class: "",
    children : []
  },
  {
    path: "/rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "",
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
