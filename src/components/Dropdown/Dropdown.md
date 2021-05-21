The Dropdown component works by passing a toggle and an array of items.

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

In case the toggle is wider than all of the items, the item's container will take the toggle's width, otherwise, the toggle's container will adjust to fit the content and the item's container will be wider.

```jsx
import Text from '../Text/Text';

<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
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

For special situations, it also can be set to take its parent width. Mostly for usage in small containers like cards and modals. Use this sparingly.

```jsx
import Text from '../Text/Text';

<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Dropdown
    chevronShown
    fullWidth
    toggle={<Text>Select an option</Text>}
    items={['option 1', 'option 2'].map((option) => (
      <span>
        <Text>{option}</Text>
      </span>
    ))}
  />
</span>;
```
