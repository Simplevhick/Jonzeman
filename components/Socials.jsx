import Link from "next/link"

import {FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaTiktok} from "react-icons/fa"

const Socials = ({containerStyles}) => {
  return (
    <ul className={`${containerStyles}`}>
        <li>
            <Link href="https://www.youtube.com/channel/UCry0TQ0n77oJaG-SC5tJyTg" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
            </Link>
        </li>
        <li>
            <Link href="https://web.facebook.com/abraham.joseph.357/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
            </Link>
        </li>
        {/* <li>
            <Link href="/" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
            </Link>
        </li> */}
        <li>
            <Link href="https://www.instagram.com/jonzeman_finishing.08064764446/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </Link>
        </li>
        <li>
            <Link href="https://www.tiktok.com/@user77087503991048?lang=en" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
            </Link>
        </li>
    </ul>
  )
}

export default Socials