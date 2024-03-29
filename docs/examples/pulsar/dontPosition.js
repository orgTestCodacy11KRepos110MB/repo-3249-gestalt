// @flow strict
import { type Node, useEffect, useRef, useState } from 'react';
import { Box, Button, Flex, Popover, Pulsar, Text } from 'gestalt';

export default function Example(): Node {
  const [showEducation, setShowEducation] = useState(false);
  const anchorRef = useRef();

  useEffect(() => {
    setShowEducation(true);
  }, []);

  return (
    <Flex justifyContent="center" height="100%" width="100%">
      <Box dangerouslySetInlineStyle={{ __style: { marginTop: 140 } }} position="relative">
        <Button onClick={() => {}} text="Switch to 3-step ad creation" />

        <Box
          ref={anchorRef}
          position="absolute"
          top
          dangerouslySetInlineStyle={{
            __style: {
              marginTop: -130,
              marginLeft: -30,
            },
          }}
        >
          <Pulsar size={300} />
        </Box>
      </Box>

      {showEducation && (
        <Popover
          anchor={anchorRef.current}
          color="blue"
          idealDirection="down"
          showCaret
          onDismiss={() => {}}
          positionRelativeToAnchor={false}
          size="sm"
        >
          <Box paddingX={6} paddingY={4}>
            <Flex alignItems="center" direction="column" gap={3}>
              <Text color="inverse" align="center">
                Our 3-step ad creation tool makes setting up an ad even faster
              </Text>

              <Button text="Got it" onClick={() => {}} />
            </Flex>
          </Box>
        </Popover>
      )}
    </Flex>
  );
}
