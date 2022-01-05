```jsx
import React, { useState } from 'react';
import Button from '../Button/Button';
const [isOpen, setIsOpen] = useState(false);
const [positionIndex, setPositionIndex] = useState(0);
const positionCombos = [
  ['top', 'left'],
  ['top', 'right'],
  ['bottom', 'left'],
  ['bottom', 'right'],
];
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <div id="container" />
  <Button
    text="Open Popper"
    id="anchorSelector"
    onClick={() => {
      if (positionIndex === 3) {
        setPositionIndex(0);
      } else {
        setPositionIndex(positionIndex + 1);
      }
      setIsOpen(true);
    }}
  />
  <Popper
    isOpen={isOpen}
    parentId="container"
    anchorSelector="#anchorSelector"
    withArrow
    yPosition={positionCombos[positionIndex][0]}
    xPosition={positionCombos[positionIndex][1]}
    onClose={() => setIsOpen(false)}
    enableScrollLock
    closeOnOutsideClick
  >
    <div style={{ padding: '1rem', width: '12rem' }}>This is a Popper</div>
  </Popper>
</span>;
```

It comes in two variants

```jsx
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Popper type="Popper" checked={true} onChange={(e) => null} />
  <Popper type="radio" checked={true} onChange={(e) => null} />
</span>
```
