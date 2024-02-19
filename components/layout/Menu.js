import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                <li className=""><Link href="/">Home</Link>
                </li>
                <li><Link href="/about-us">About Us</Link></li>
                <li className="dropdown"><Link href="#">Services</Link>
                    <ul>
                        <li><Link href="/tax-management">Tax Management</Link></li>
                        <li><Link href="/strategy-planning">Strategy & Planning</Link></li>
                        <li><Link href="/program-manager">Program Manager</Link></li>
                        <li><Link href="/investment-policy">Investment Policy</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Careers</Link>
                    <ul>
                        <li><Link href="/portfolio">Work at vida</Link></li>
                        <li><Link href="/career">Current Vacancies</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Advocacy</Link>
                    <ul>
                        <li><Link href="/shop">Podcast</Link></li>
                        <li><Link href="/product-details">VIDA CEO/Founder Blog</Link></li>
                    </ul>
                </li>
                {/* <li className="dropdown"><Link href="#">Blog</Link>
                    <ul>
                        <li><Link href="/blog">Blog Grid</Link></li>
                        <li><Link href="/blog-2">Blog Standard</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                </li>  */}
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
