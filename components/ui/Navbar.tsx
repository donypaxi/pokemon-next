import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"

export const Navbar = () => {

    const {theme} = useTheme()
  return (
    <div style={{
        display:'flex',
        width:'100%',
        backgroundColor:theme?.colors.gray300.value 

    }}>
      <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          alt="icono de la App"
          width={70}
          height={70} 
      />
      <Text color="white" h2>P</Text>
      <Text color="white" h3>okémon</Text>
      <Spacer css={{ flex:1}}/>
      <Text color="white" h3>Favoritos</Text>
    </div>
  )
}
