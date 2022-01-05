```jsx
import React, { useState } from 'react';
import Button from '../Button/Button';
const [isOpen, setIsOpen] = useState(false);
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <div id="container" />
  <Button text="Open Modal" onClick={() => setIsOpen(true)} />
  <Modal
    withBackdrop
    withCloseButton
    isOpen={isOpen}
    // parentId="container"
    // anchorSelector="#anchorSelector"
    onClose={() => setIsOpen(false)}
    enableScrollLock
    closeOnOutsideClick
  >
    <div style={{ padding: '1rem', width: '12rem' }}>This is a Modal</div>
  </Modal>
</span>;
```
