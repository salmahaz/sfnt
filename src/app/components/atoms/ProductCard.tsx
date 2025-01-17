import Link from "next/link";

type ProductCardProps = {
    productTitle : String,
    buttonTitle : String,
    id : String

}

export default function ProductCard({productTitle , buttonTitle, id} : ProductCardProps) {
    return (
        <>
        <div className="border shadow-lg rounded flex flex-col overflow-hidden gap-2 p-4">
            <h1>{productTitle}</h1>
            <p>This is a product card</p>
            <Link className="bg-gray-400 text-white rounded py-2 px-2 inline-block mt-2" href={`/categories/${id}`}>Card Details</Link>
        </div>
        </>
    )
}