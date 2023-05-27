import { SmallPokemon } from "@/interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
    pokemon: SmallPokemon;
}

export const PokemonCards:FC<Props>= ({pokemon}) => {

    const {name,img, id} = pokemon
    const router = useRouter()
    const onClick = () => {
        router.push(`/pokemon/${id}`)
    }



  return (
    <Grid xs={6} sm={3} md={2} xl={1}
        key={id}>
        <Card isHoverable isPressable onClick={onClick}>
            <Card.Body css={{p:1}}>
                <Card.Image
                    src={img}
                    width="100%"
                    height={140}
                >
                </Card.Image>
            </Card.Body>
            <Card.Footer>
                <Row justify='space-between'>
                    <Text transform='capitalize'>{name}</Text>
                    <Text>#{id}</Text>

                </Row>
            </Card.Footer>

        </Card>
    </Grid>
  )
}
