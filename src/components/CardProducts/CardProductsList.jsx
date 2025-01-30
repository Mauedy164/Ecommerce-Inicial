import React from "react";
import { useSearchParams } from "react-router-dom";
import { CardProduct } from "./CardProducts";
import serviciosFisioterapia from '../../../data';

export function CardProductsList() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    const filteredServices = category
        ? serviciosFisioterapia.filter(service => service.category === category)
        : serviciosFisioterapia;

    const list = filteredServices.map((product) => (
        <CardProduct
            key={product.id}
            {...product}
        />
    ));

    return (
        <div>
            {list}
        </div>
    );
}