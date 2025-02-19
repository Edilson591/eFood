import { ReactNode } from "react"
import { SectionProduct } from "./styles"

interface PropsSectionProducts {
    children: ReactNode
}

const SectionProducts = ({children}:PropsSectionProducts) => {
    return(
        <SectionProduct>
            {children}
        </SectionProduct>
    )
}

export default SectionProducts