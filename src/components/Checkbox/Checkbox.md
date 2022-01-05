```jsx
import React, { useState } from 'react';
const [isChecked, setIsChecked] = useState(false);

<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Checkbox
    checked={isChecked}
    onChange={(e) => setIsChecked(e.target.checked)}
    label="This is a Checkbox"
  />
</span>;
```

It comes in two variants

```jsx
import React, { useState } from 'react';
const [isChecked, setIsChecked] = useState(false);
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Checkbox
    type="checkbox"
    checked={isChecked}
    onChange={(e) => setIsChecked(e.target.checked)}
  />
  <Checkbox
    type="radio"
    checked={isChecked}
    onChange={(e) => setIsChecked(e.target.checked)}
  />
</span>;
```
