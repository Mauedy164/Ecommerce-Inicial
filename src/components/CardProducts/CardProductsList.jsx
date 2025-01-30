import React from "react";
import { CardProduct } from "./CardProducts";
import serviciosFisioterapia from '../../../data';

export function CardProductsList(){ 
    const list = serviciosFisioterapia.map(({id, image,
        title,description,duration,objetive,technique,benefits,price,category}) => 
        <CardProduct 
        id={id}
        image={image}
        title= {title}
        description={description}
        duration={duration}
        objetive={objetive}
        technique={technique}
        benefits={benefits}
        price={price}
        category={category}
        />)
    return (
        <div>
            {list}
        </div>
    )
}