"use client"
import { getProducts } from '@/service/getProducts';
import { useParams } from 'next/navigation';
import React from 'react'

const CategoryFilter = () => {
    const {categoryFilter} = useParams();
    
    const { products } = getProducts("/product", categoryFilter);
    // console.log(products);
    
    return (
        <div>
            <h2>Filtered Products</h2>
        </div>
    )
}

export default CategoryFilter;
