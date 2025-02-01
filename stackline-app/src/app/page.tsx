"use client"
import React, { useEffect, useState } from 'react';

import styles from "./page.module.css";
import Header from "./components/Header/Header";
import ProductTable from "./components/ProductTable/ProductTable"
import Grid from "@mui/material/Grid2";
import ProductCard from "./components/ProductCard/ProductCard";
type Reviews = {
  customer: string;
  review: string;
  score: number;
}
type Sales = {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

type Product = {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: Reviews[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: Sales[];
}

export default function Home() {

  const [products, setProduct] = useState<Product[] | undefined>();

  useEffect(() => {
    fetch("data/products.json") //Replace this with actual API call
      .then((response) => response.json())
      .then((json) => {
        const responseProducts: Product[] = json.map((responseProduct: Product) => {
          return {
            id: responseProduct.id,
            title: responseProduct.title,
            image: responseProduct.image,
            subtitle: responseProduct.subtitle,
            brand: responseProduct.brand,
            reviews: responseProduct.reviews,
            retailer: responseProduct.retailer,
            details: responseProduct.details,
            tags: responseProduct.tags,
            sales: responseProduct.sales,
          }
        })
        setProduct(responseProducts);
      });
  }, []);

  return (
    <div >
      <main >
        <title >Retail Sales</title>
        <Header />
        {products?.map((product: Product, index) => {
          return (
            <div key={index}>
              <Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid size={3}><ProductCard photo={product.image} title={product.title} subtitle={product.subtitle} tags={product.tags} /></Grid>
                <Grid size={8}>
                  <p className={styles.p} >Retail Sales</p>
                  <ProductTable sales={product.sales} />
                </Grid>
              </Grid>
            </div>
          )
        })}


      </main>

    </div>
  );
}
