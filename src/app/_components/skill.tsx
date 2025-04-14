import { IconType } from "react-icons";
import * as Icon from "react-icons/fa";
type SkillProps = {
    icon: icon;
    color: string;
    name: string;

}
export default function SkillComponent({icon, color, name}:  SkillProps ) {
    return(<>
        <div className="">
            {icon}
        </div>
    
    </>)
}