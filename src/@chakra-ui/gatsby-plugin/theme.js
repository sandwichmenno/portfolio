import { extendTheme } from '@chakra-ui/react';

const fonts = {
    heading: "Montserrat",
    body: "Montserrat"
};

const components = {
    Heading: {
        baseStyle: {
            color: "gray.50"
        }
    },
    Text: {
        baseStyle: {
            color: "gray.50"
        }
    },
};

const styles = {
    global: {
        body: {
            bg: "gray.900"
        },
    },
}

const theme = {
    styles,
    fonts,
    components
}

export default extendTheme(theme)
