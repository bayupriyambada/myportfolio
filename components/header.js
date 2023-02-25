import Link from 'next/link';
import { useRouter } from 'next/router';
function Header() {
    const router = useRouter()
    return (
        <>
            <h1 className="text-2xl font-bold text-white text-center">BPRIYAMBADAM</h1>
            <div className="mt-4">
                <div className="flex justify-center items-center gap-3">
                    <div>
                        <Link href="/" className={router.asPath === '/' ? "text-yellow-500 md:text-xl text-base underline" : "text-slate-50 hover:text-slate-300 md:text-xl text-base hover:underline"}>About Me</Link>
                    </div>
                    <div>
                        <Link href="/certification" className={router.asPath === '/certification' ? "text-yellow-500 md:text-xl text-base underline" : "text-slate-50 hover:text-slate-300 md:text-xl text-base hover:underline"}>Certification</Link>
                    </div>
                    <div>
                        <Link href="#" className={router.asPath === '#' ? "text-yellow-500  md:text-xl text-base underline" : "text-slate-50 hover:text-slate-300 md:text-xl text-base hover:underline"}>Projects</Link>
                    </div>
                    <div>
                        <Link href="#" className={router.asPath === '#' ? "text-yellow-500 md:text-xl text-base underline" : "text-slate-50 hover:text-slate-300 md:text-xl text-base hover:underline"}>Contact</Link>
                    </div>
                    <div>
                        <Link href="#" className={router.asPath === '#' ? "text-yellow-500 md:text-xl text-base underline" : "text-slate-50 hover:text-slate-300 md:text-xl text-base hover:underline"}>Download CV</Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header

