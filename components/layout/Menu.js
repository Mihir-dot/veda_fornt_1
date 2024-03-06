'use client';
import { useEffect, useState } from "react"
import Link from "next/link"
import { fetchServiceName } from "../helper/serviceNameCommonAPI";

export default function Menu() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchDataFromAPI = async () => {
          try {
            const data = await fetchServiceName();
            setServices(data);
          } catch (error) {
            console.error("Error fetching services:", error);
          }
        };
    
        fetchDataFromAPI();
      }, []);
    const handleServiceClick = (serviceId) => {
        window.location.href = `/service-details?id=${serviceId}`;
    };

    return (
        <>
            <ul className="navigation clearfix">
                <li className=""><Link href="/">Home</Link>
                </li>
                <li className="dropdown"><Link href="#">About Us</Link>
                <ul>
                        <li><Link href="/about-us">What we do?</Link></li>
                        <li><Link href="/shop">Our Vision, Pupose, and Values</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">I'm looking for</Link>
                    <ul>
                    {services.map((service) => (
                        <li key={service._id}>
                            <a onClick={() => handleServiceClick(service._id)}>
                                {service.sortName}
                            </a>
                        </li>
                    ))}
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Work with us</Link>
                    <ul>
                        <li><Link href="/career">Current Vacancies</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Advocacy</Link>
                    <ul>
                        <li><Link href="/shop">Podcast</Link></li>
                        <li><Link href="/shop">Resources</Link></li>
                        <li><Link href="/product-details">VIDA CEO/Founder Blog</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
