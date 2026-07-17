import { ColorSwatch } from "@/components/design-system/colorSwatch";

export default function DesignSystem() {

    return(
        <div className="pl-7 pb-10">
            <div className="font-linearBeam text-[67px] pt-10 -mb-8">blockbuster</div>
            <div className="font-jetbrains text-[20px]">by western.</div>

            <div className="font-jetbrains text-[50px] -ml-1"> Design System</div>
            <div className="font-jetbrains text-[20px] -ml-1"> Colours</div>
            
            <div className="p3 flex items-center gap-8">
                <ColorSwatch name="purple-main" value="#200035" />
                <ColorSwatch name="purple-secondary" value="#755faf" />
                <ColorSwatch name="blue-main" value="#444a93" />
                <ColorSwatch name="offwhite" value="#EAE7ED" />
                
            </div>

        </div>
    )
}

