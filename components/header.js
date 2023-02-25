import Link from 'next/link';
import { useRouter } from 'next/router';
function Header() {
    const router = useRouter()
    const IsActiveMenu = "menuactive text-yellow-300 md:text-xl text-base"
    const IsNonActiveMenu = "menuhover text-slate-50 hover:text-yellow-300 md:text-xl text-base"
    return (
        <>
            <h1 className="text-2xl font-bold text-white text-center">BPRIYAMBADAM</h1>
            <div className="mt-4">
                <div className="flex justify-center items-center gap-3">
                    <div>
                        <Link href="/" className={router.asPath === '/' ? IsActiveMenu : IsNonActiveMenu}>About Me</Link>
                    </div>
                    <div>
                        <Link href="/certification" className={router.asPath === '/certification' ? IsActiveMenu : IsNonActiveMenu}>Certification</Link>
                    </div>
                    <div>
                        <Link href="/projects" className={router.asPath === '/projects' ? IsActiveMenu : IsNonActiveMenu}>Projects</Link>
                    </div>
                    <div>
                        <Link href="/technology" className={router.asPath === '/technology' ? IsActiveMenu : IsNonActiveMenu}>Technology</Link>
                    </div>
                    <div>
                        <Link href="/contact" className={router.asPath === '/contact' ? IsActiveMenu : IsNonActiveMenu}>Contact</Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header

