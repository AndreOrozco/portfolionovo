import { LanguageContext } from "@/app/context/language/LanguageContext";
import { memo, useContext } from "react";
import Image from 'next/image'

function BrandsSection() {
    const { dictionary } = useContext(LanguageContext);
    var brands: string[] = ['/brands/elcom.png','/brands/uxbank.png','/brands/ibipay.png', '/brands/aval.png', '/brands/enfluencer.png', '/brands/takel.svg', '/brands/patriagames.png', '/brands/atm.png']
    return (<>
         <div>
            <div className="flex p:40 mt:-150 bg:linear-gradient(90deg,#AF6CAA,#282E68) r:0|0|80|80 rel z:6">
                <div className="r:15 m:auto max-w:1200 mt:110">
                    <h2 className="text:center p:50 font:22 fg:white "><span className="pb:10 bb:3|solid|#ede4ec mb:10">
                    {dictionary.brands.title}
                        </span></h2>

                    <div className="grid pb:80 grid-cols:4@desktop grid-cols:2@mobile">
                        {brands.map((item,i) => (
                            <div key={i} className="p:50@desktop p:20@mobile  object-fit:contain>img  "><Image src={item} className="filter brightness(50) grayscale(1) invert(10) " width={120} height={60} alt={''} /></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>)


}
export default memo(BrandsSection)