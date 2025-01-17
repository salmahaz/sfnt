import Link from "next/link";

export default function NavBar(){
    return (
        <div>
            <nav className="bg-gray-300 width-full py-5">
            <ul className="text-white flex gap-5 items-center justify-end pr-10" >
                <li className="hover:text-gray-500"><Link href="/">Home</Link></li>
                <li className="hover:text-gray-500"><Link href="/about">About</Link></li>
                <li className="hover:text-gray-500"><Link href="/profile">Profile</Link></li>
                <li className="hover:text-gray-500"><Link href="/categories">Categories</Link></li>
                
            </ul>
            </nav>
            </div>
    )
}