import React from 'react';
import {Box, Heading, ListItem, UnorderedList} from "@chakra-ui/react";

const Tasklist = ({ tasks }) => {
    const taskItems = tasks.map(task => <ListItem>{task}</ListItem>);

    return (
        <Box mt={16}>
            <Heading fontWeight={600} mb={4} size="xl" sx={{lineHeight: '135%'}}>Tasks</Heading>
            <UnorderedList color="gray.50" fontSize="lg" spacing={4}>
                {taskItems}
            </UnorderedList>
        </Box>
    )
}

export default Tasklist;
