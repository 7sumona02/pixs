import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="fixed z-50 md:top-5 top-3 mx-auto w-80 p-8 rounded-2xl flex items-center justify-between text-sm font-medium text-white bg-[#0a0a0a]/40 backdrop-blur-3xl mix-blend-difference transition-all ease-out">
            <Link href='/'>Pix Studio</Link>
            <Link href="/works" className="flex items-center gap-1">
                View works <ArrowRight size={14} strokeWidth={2} />
            </Link>
        </div>
    )
}

export default Navbar