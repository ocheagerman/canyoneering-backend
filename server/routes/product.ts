import express from "express";
import { Route } from "./types";
import debug from "debug";

interface PackageOption {
  description: string;
  price: number;
}

interface PackageOptionHistory extends PackageOption {
  index: number;
}

interface SelectedPackageOption extends PackageOption {
  index: number;
}

interface Products {
  [key: string]: {
    pickup: PackageOption[];
    addons: PackageOption[];
    videos: string[];
    images: string[];
  };
}

const log = debug("server:products");

const products: Products = {
  "kawasan-canyoneering": {
    pickup: [
      { description: "No Pick-up", price: 0 },
      { description: "Pick-up from Moalboal - P0.00", price: 0 },
      { description: "Pick-up from Badian - P0.00", price: 0 },
      {
        description: "Pick-up from Cebu City (2-3 pax) - P5,000.00",
        price: 5000,
      },
      {
        description: "Pick-up from Cebu City (4-5 pax) - P5,500.00",
        price: 5000,
      },
      {
        description: "Pick-up from Cebu City (6-11 pax) - P6,000.00",
        price: 6000,
      },
      {
        description: "Pick-up from Mandaue city (2-3 pax) - P5,000.00",
        price: 5000,
      },
      {
        description: "Pick-up from Mandaue city (4-5 pax) - P5,500.00",
        price: 5000,
      },
      {
        description: "Pick-up from Mandaue city (6-11 pax) - P6,000.00",
        price: 6000,
      },
      { description: "Pick-up from Mactan (2-3 pax) - P5,000.00", price: 5000 },
      { description: "Pick-up from Mactan (4-5 pax) - P5,500.00", price: 5500 },
      {
        description: "Pick-up from Mactan (6-11 pax) - P6,000.00",
        price: 6000,
      },
      { description: "Pick-up from Oslob (2-3 pax) - P3,500.00", price: 3500 },
      { description: "Pick-up from Oslob (4-5 pax) - P4,000.00", price: 4000 },
      { description: "Pick-up from Oslob (6-11 pax) - P4,500.00", price: 4500 },
      {
        description: "Pick-up from Liloan Port (2-3 pax) - P3,500.00",
        price: 3500,
      },
      {
        description: "Pick-up from Liloan Port (4-5 pax) - P4,000.00",
        price: 4000,
      },
      {
        description: "Pick-up from Liloan Port (6-11 pax) - P4,500.00",
        price: 4500,
      },
    ],
    addons: [
      { description: "No Add-ons", price: 0 },
      {
        description: "Moalboal Sardines Run and Turtle Chase - P600.00",
        price: 600,
      },
      {
        description: "Oslob Whale Shark - P800.00",
        price: 600,
      },
      {
        description: "Snorkeling - P00.00",
        price: 0,
      },
    ],
    videos: [],
    images: [],
  },
};

const router = express.Router();
const url = "/api/products";

router.get("/:productName", (req, res) => {
  log("request received: " + req.path);
  return res
    .status(200)
    .setHeader("Access-Control-Allow-Origin", "*")
    .json(products[req.params.productName]);
});

const route: Route = {
  url: url,
  route: router,
};

export default route;
