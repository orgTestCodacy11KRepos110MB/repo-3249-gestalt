// @flow strict
import { Text, Box, Flex, Heading } from 'gestalt';
import { type Node } from 'react';

type Props = {|
  heading: string,
  text: string | Node,
|};

export default function PrincipleItem({ heading, text }: Props): Node {
  return (
    <Flex
      direction="column"
      gap={{
        row: 0,
        column: 4,
      }}
    >
      <Heading size="400">{heading}</Heading>
      <Box marginBottom={6}>
        <Text>{text}</Text>
      </Box>
    </Flex>
  );
}
