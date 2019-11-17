import { Router } from "express";
export const router = Router();

import * as products from "../controllers/productdetailscontroller";

router.route("/addproduct")
      .post(products.addproduct)
router.route("/getproducts")
      .get(products.getproducts)