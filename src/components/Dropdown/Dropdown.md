It also has different weights:

```jsx
import Text from '../Text/Text';

<span
  style={{
    display: 'grid',
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
</span>;
```
