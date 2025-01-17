"use client"

import { useParams } from "next/navigation";

export default function Products() {
    const params = useParams();
    const {productId} = params;
    return(
        <>
        <div className="p-4">
            <h2>Product Details</h2>
            <p>Details For Product Id: {productId} </p>
        </div>
        </>
    )
}