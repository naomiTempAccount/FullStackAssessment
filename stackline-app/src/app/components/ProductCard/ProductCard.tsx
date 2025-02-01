"use client";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import React from "react";
import { Chip } from '@mui/material';
import styles from "./ProductCard.module.css";


interface ProductCardProps {
    photo: string;
    title: string;
    subtitle: string;
    tags: string[]
}

export default function ProductCard(props: ProductCardProps) {

    return (
        <Card sx={{
            maxWidth: 280,
            margin: "0 auto",
            padding: "0.1em",
        }}>
            <CardActionArea>
                <CardMedia
                    alt="ProductPhoto"
                    component="img"
                    title="Product Photo"
                    height="250"
                    image={props.photo}
                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                />
                <CardContent>
                    <Typography gutterBottom align="center" variant="h5" component="div">
                        {props.title}                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                        {props.subtitle}
                    </Typography>
                    {props.tags.map((tag, index) => (
                        <Chip className = {styles.chip} label={tag} key={index} variant="outlined" />
                    ))}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
