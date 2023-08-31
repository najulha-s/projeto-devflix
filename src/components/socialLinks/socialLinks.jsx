import "./socialLinks.module.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"

const SocialLinks = ({icon,href})=> {
    return(
        <a href={href} target="_blanck">
         <ion-icon name={icon} size="large"/>
        </a>
    )
}

export default SocialLinks;