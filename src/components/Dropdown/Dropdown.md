It also has different weights:

```jsx
import Text from '../Text/Text';

<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '1rem',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Dropdown
    chevronShown
    toggle={<Text>Select an option</Text>}
    items={['option 1', 'option 2'].map((option) => (
      <span>
        <Text>{option}</Text>
      </span>
    ))}
  />
  <Dropdown
    chevronShown
    toggle={<Text>S</Text>}
    items={['long option 1', 'long option 2'].map((option) => (
      <span>
        <Text noWrap>{option}</Text>
      </span>
    ))}
  />
</span>;
```
