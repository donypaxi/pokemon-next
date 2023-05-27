import Image from "next/image"
import Link from 'next/link';

import { Spacer, Text, useTheme } from "@nextui-org/react";
import { Suspense } from "react";


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
          <Link href="/" style={{display:'flex'}} >
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okémon</Text>
          </Link>
      <Spacer css={{ flex:1}}/>
      <Link style={{marginRight:'20px'}} href="/favorites" passHref>
        <Text color="white" h3>Favoritos</Text>
      </Link>
    </div>
  )
}
