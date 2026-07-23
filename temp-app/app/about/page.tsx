import styles from './about.module.css'
import MemberCard from '@/components/MemberCard'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Blockbuster",
};

export default function About(){
    return(
        <>
        <section className = {styles.history}> About section </section>

        <section className = {styles.teamSection}> 
        <div className = {styles.titleColumn}>
            <h1> LEADERSHIP </h1>
        </div>

        <div className = {styles.membersColumn}> 
            <div className = {`${styles.memberGrid} ${styles.leadGrid}`}>
                <MemberCard name="Rohum Zaman" role="President" letterboxd='https://boxd.it/5NHqb' image="/placeholder/Ash.jpg" alt="pres" className="large"></MemberCard>
                <MemberCard name="Amara" role="Vice President" letterboxd='https://boxd.it/5NHqb' image="/placeholder/Ash.jpg" alt="pres" className="large"></MemberCard>
                <MemberCard name="Quincy" role="Vice President" letterboxd='https://boxd.it/5NHqb' image="/placeholder/Ash.jpg" alt="pres" className="large"></MemberCard>
                <MemberCard name="Jasmine Xu" role="Vice President" letterboxd='https://letterboxd.com/filmwithjasmine/' image="/placeholder/Ash.jpg" alt="pres" className="large"></MemberCard>
                <MemberCard name="Nicole" role="Vice President" letterboxd='https://boxd.it/5NHqb' image="/placeholder/Ash.jpg" alt="pres" className="large"></MemberCard>
            </div>
        </div>

        <div className={styles.infoColumn}>

            <div className={styles.infoPanel} />
            <div className={styles.infoPanel}></div>
            <div className={styles.infoPanel}>
                <p> Engine of the club </p>
            </div>

        </div>
        </section>

        <section className={styles.teamSection}> 

            <div className={styles.titleColumn}>
                <h1>BUSINESS</h1>
            </div>

            <div className={styles.membersColumn}>

                <div className={`${styles.memberGrid} ${styles.businessGrid}`}>
                    <MemberCard name="Name" role="Sponsorship" image="/placeholder/saiki3.jpg" alt= "vpSponsorship"></MemberCard>
                    <MemberCard name="Name" role="Finance" image="/placeholder/haiba.jpg" alt= "vpFinance"></MemberCard>
                    <MemberCard name="Amara" role="VP Marketing" image="/placeholder/kyoka.jpg" alt= "vpMarketing"></MemberCard>
                    <MemberCard name="Ongkush Banik" letterboxd="https://letterboxd.com/ongkushbanik/" role="VP Events" image="/placeholder/yatora.jpg" alt= "vpEvents"></MemberCard>
                </div>
            </div>
            <div className={styles.infoColumn}>

                <div className={styles.infoPanel}></div>
                <div className={styles.infoPanel}></div>
                <div className={styles.infoPanel}>
                    <p> Our club has a prominent business division dedicated to acquiring and managing finances, as well as marketing all of our projects. </p>
                </div>

            </div>

        </section>

        <section className={styles.teamSection}> 

            <div className={styles.titleColumn}>
                <h1>CREATIVE</h1>
            </div>

            <div className={styles.membersColumn}>

                <div className="grid grid-cols-6 gap-4">
                    <MemberCard name="Quincy" role="VP Production" image="/placeholder/Ash.jpg" alt="vpProduction" className="col-span-2"></MemberCard>
                    <MemberCard name="Jasmine" role="VP Production" image="/placeholder/Ash.jpg" alt="vpProduction" className="col-span-2"></MemberCard>
                    <MemberCard name="Nicole" role="VP Production" image="/placeholder/Ash.jpg" alt="vpProduction" className="col-span-2"></MemberCard>
                    <MemberCard name="Cameron" role="VP Design" letterboxd="https://boxd.it/5fk3P" image="/placeholder/Ash.jpg" alt="vpDesign" className="col-span-3"></MemberCard>
                    <MemberCard name="Ella" role="VP Design" letterboxd="https://boxd.it/9iE8d" image="/placeholder/Ash.jpg" alt="vpDesign" className="col-span-3"></MemberCard>
                    <MemberCard name="Oswin" role="VP Camera" image="/placeholder/Ash.jpg" alt="vpCamera" className="col-span-3"></MemberCard>
                    <MemberCard name="Michael" role="VP Camera" image="/placeholder/Ash.jpg" alt="vpCamera" className="col-span-3"></MemberCard>
                    <MemberCard name="Name" role="VP Composition" image="/placeholder/Ash.jpg" alt="vpComposition" className="col-span-2"></MemberCard>
                    <MemberCard name="Jonelle" role="VP Makeup & Hair" image="/placeholder/jonelle.jpg" alt="vpMakeupHair" className="col-span-2"></MemberCard>
                    <MemberCard name="Sierra" role="VP Performance" image="/placeholder/Ash.jpg" alt="vpPerformance" className="col-span-2"></MemberCard>
                    <MemberCard name="Wally" role="VP Post" image="/placeholder/Ash.jpg" alt="vpPost" className="col-span-2"></MemberCard>
                    <MemberCard name="Jite" letterboxd="https://boxd.it/5wFHF" role="VP Recruitment" image="/placeholder/Ash.jpg" alt="vpRecruitment" className="col-span-3"></MemberCard>
                    <MemberCard name="Claire Yu" letterboxd="https://letterboxd.com/cyul8er/" role="VP Logistics" image="/placeholder/Ash.jpg" alt="vpLogistics" className="col-span-3"></MemberCard>
                </div>

            </div>

            <div className={styles.infoColumn}>

                <div className={styles.infoPanel}></div>
                <div className={styles.infoPanel}></div>
                <div className={styles.infoPanel}>
                    <p> The creative division of the club is dedicated to holding community events and making some banger movies that we hope to screen at the western undergraduate film festival (WUFS) and other local film festivals.</p>
                </div>

            </div>

        </section>
        </>
    )
}