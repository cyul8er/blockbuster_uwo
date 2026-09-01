import Image from 'next/image'
import styles from '../app/about/about.module.css'
import type { Member } from '../app/about/teams'

export default function MemberCard({ name, role, image, letterboxd }: Member) {
    return (
        <div className={styles.memberCard}>
            <div className={styles.memberImage}>
                <Image src={image} alt={name} width={155} height={155} />
            </div>
            {letterboxd ? <a href={letterboxd}>{name}</a> : <p>{name}</p>}
            <p className={styles.role}>{role}</p>
        </div>
    )
}

// import './MemberCard.css'
// import Image from 'next/image'

// interface memberProps{
//     name: string;
//     role: string;
//     letterboxd?: string;
//     image: string;
//     alt: string;
//     className?: string;
// }
// export default function MemberCard({name,role,letterboxd, image, alt, className}:memberProps){
//     return(
//         <div className={`memberCard ${className} `}>
//                     <Image
//                         src={image} 
//                         alt= {alt}
//                         width={155}
//                         height={155}
//                     />
//             <div className="memberInfo">
//                 <a href = {letterboxd}> {name}</a>
//                 <p>{role}</p>
//             </div>
//         </div>
//     )
// }