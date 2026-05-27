import './MemberCard.css'
import Image from 'next/image'

interface memberProps{
    name: string;
    role: string;
    letterboxd?: string;
    image: string;
    alt: string;
    className?: string;
}
export default function MemberCard({name,role,letterboxd, image, alt, className}:memberProps){
    return(
        <div className={`memberCard ${className} `}>
                    <Image
                        src={image} 
                        alt= {alt}
                        width={155}
                        height={155}
                    />
            <div className="memberInfo">
                <a href = {letterboxd}> {name}</a>
                <p>{role}</p>
            </div>
        </div>
    )
}