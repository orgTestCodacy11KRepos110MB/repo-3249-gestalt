// @flow strict
import { useState, useRef, type Node } from 'react';
import { IconButtonFloating, Dropdown, Flex } from 'gestalt';

export default function Example(): Node {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const anchorRef = useRef(null);

  const onSelect = ({ item }) => {
    if (selected.some(({ value }) => value === item.value)) {
      setSelected((selectedValue) => selectedValue.filter(({ value }) => value !== item.value));
    } else {
      setSelected((selectedValue) => [...selectedValue, item]);
    }
  };

  return (
    <Flex width="100%" height="100%" justifyContent="center" alignItems="center">
      <IconButtonFloating
        accessibilityControls="sections-dropdown-example-negative"
        accessibilityExpanded={open}
        accessibilityPopupRole="menu"
        accessibilityLabel="Deletion Menu"
        icon="trash-can"
        onClick={() => setOpen((prevVal) => !prevVal)}
        ref={anchorRef}
        selected={open}
      />
      {open && (
        <Dropdown
          anchor={anchorRef.current}
          id="sections-dropdown-example-negative"
          onDismiss={() => setOpen(false)}
        >
          <Dropdown.Item
            onSelect={onSelect}
            option={{ value: 'Pin', label: 'This Pin' }}
            selected={selected}
          />
          <Dropdown.Item
            onSelect={onSelect}
            option={{ value: 'Story Pin', label: 'Entire Board' }}
            selected={selected}
          />
        </Dropdown>
      )}
    </Flex>
  );
}
