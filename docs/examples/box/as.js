// @flow strict
import { type Node } from 'react';
import { Text, Box, Flex, Heading } from 'gestalt';

export default function Example(): Node {
  return (
    <Flex direction="column" flex="grow" alignItems="center" height="100%" width="100%">
      <Flex height="100%" width="100%">
        <Box
          as="nav"
          title="as prop example nav"
          column={6}
          color="successBase"
          width="100%"
          padding={2}
          borderStyle="sm"
        >
          <Text color="light" weight="bold">
            Top Nav Menu: as=&quot;nav&quot;
          </Text>
        </Box>
        <Box column={6} display="inlineBlock" borderStyle="sm">
          <Box width="100%" padding={2}>
            <Text>HTML output:</Text>
            <Text>{'<nav>Menu</nav>'}</Text>
          </Box>
        </Box>
      </Flex>
      <Flex height="100%" width="100%">
        <Box as="article" column={6} color="successBase" width="100%" padding={2} borderStyle="sm">
          <Heading color="light" size="500">
            Article 1
          </Heading>
          <Text color="light" weight="bold">
            Article: as=&quot;article&quot;
          </Text>
        </Box>
        <Box column={6} display="inlineBlock" borderStyle="sm">
          <Box width="100%" padding={2}>
            <Text>HTML output:</Text>
            <Text>{'<article>'}</Text>
            <Text>{'<h2>Article 1</h2>'}</Text>
            <Text>{'</article>'}</Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
