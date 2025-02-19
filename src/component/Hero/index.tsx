import { ReactNode } from "react"
import { ContainerHero } from "./styles"

export interface PropsHero {
  $background: string
  children: ReactNode
}

const Hero = ({ $background,children}:PropsHero) => {
  return(
    <ContainerHero $background={$background}>
      {children}
    </ContainerHero>
  )
}

export default Hero
