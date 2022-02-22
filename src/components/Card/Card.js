import * as React from "react"
import {Box, Heading} from "@chakra-ui/react";
import { Link } from "gatsby";

const Card = ({ title, image, destination, color }) => (
    <Link to={destination}>
        <Box transition="all 0.25s" boxShadow="sm" borderRadius="2xl" position="relative" w="full" h="250px" bgImage={`url('${image}')`} bgSize="cover" bgPosition="center" overflow="hidden" role="group" _hover={{
            transform: "translateY(-8px)"
        }}>
            <Box transition="all 0.5s" w="full" h="full" position="absolute" bgGradient={`linear(to-b, rgba(0, 0, 0, 0) 63%, ${color})`} opacity={0.5} _groupHover={{
                bgGradient: `linear(to-b, rgba(0, 0, 0, 0) 25%, ${color})`,
                opacity: 1
            }} />
            <Heading position="absolute" bottom={0} left={0} p={4}>{ title }</Heading>
        </Box>
    </Link>
)

export default Card;
