// @flow strict
import { useRef, type Node } from 'react';
import { IconButtonFloating, Box, Flex } from 'gestalt';

export default function Example(): Node {
  const anchorRef = useRef(null);

  return (
    <Flex height="100%" flex="grow" alignItems="center" justifyContent="center">
      <Box position="relative" display="flex" width={60} alignContent="center">
        <Box
          position="absolute"
          color="errorBase"
          rounding="circle"
          width={8}
          height={8}
          top
          right
          marginTop={1}
          marginEnd={1}
        />
        <IconButtonFloating
          accessibilityExpanded={false}
          accessibilityPopupRole="menu"
          accessibilityLabel="Create Pin Menu"
          icon="add"
          onClick={() => {}}
          ref={anchorRef}
        />
      </Box>
    </Flex>
  );
}
