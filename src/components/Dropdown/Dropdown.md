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
    variant="primary"
    toggle={<Text>Select an option</Text>}
    items={['option 1', 'option 2'].map((option) => (
      <Text onClick={() => alert(`Clicked on ${option}`)}>{option}</Text>
    ))}
  />
</span>;
```

It has two variants, use Primary when the Dropdown is the page's main action or when it's high in the page's visual hierarchy.

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
    variant="primary"
    chevronShown
    toggle={<Text>Primary Dropdown</Text>}
    items={['option 1', 'option 2'].map((option) => (
      <Text onClick={() => alert(`Clicked on ${option}`)}>{option}</Text>
    ))}
  />
  <Dropdown
    variant="secondary"
    toggle={<Text>Secondary Dropdown</Text>}
    items={['option 1', 'option 2'].map((option) => (
      <Text onClick={() => alert(`Clicked on ${option}`)}>{option}</Text>
    ))}
  />
</span>;
```

It can open on click or on hover.

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
    variant="primary"
    chevronShown
    toggle={<Text>This opens on click</Text>}
    openOnClick
    items={['option 1', 'option 2'].map((option) => (
      <Text onClick={() => alert(`Clicked on ${option}`)}>{option}</Text>
    ))}
  />
  <Dropdown
    variant="secondary"
    toggle={<Text>This opens on hover</Text>}
    items={['option 1', 'option 2'].map((option) => (
      <Text onClick={() => alert(`Clicked on ${option}`)}>{option}</Text>
    ))}
  />
</span>;
```

It has 5 sizes.

```jsx
import Text from '../Text/Text';

<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gap: '1rem',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Dropdown
    variant="secondary"
    chevronShown
    size="xs"
    toggle={
      <Text noWrap size={1}>
        XSmall
      </Text>
    }
    items={['option 1', 'option 2'].map((option) => (
      <Text noWrap onClick={() => alert(`Clicked on ${option}`)}>
        {option}
      </Text>
    ))}
  />
  <Dropdown
    variant="secondary"
    chevronShown
    size="sm"
    toggle={
      <Text noWrap size={2}>
        Small
      </Text>
    }
    items={['option 1', 'option 2'].map((option) => (
      <Text noWrap onClick={() => alert(`Clicked on ${option}`)}>
        {option}
      </Text>
    ))}
  />
  <Dropdown
    variant="secondary"
    chevronShown
    size="md"
    toggle={
      <Text noWrap size={3}>
        Medium
      </Text>
    }
    items={['option 1', 'option 2'].map((option) => (
      <Text noWrap onClick={() => alert(`Clicked on ${option}`)}>
        {option}
      </Text>
    ))}
  />
  <Dropdown
    variant="secondary"
    chevronShown
    size="lg"
    toggle={
      <Text noWrap size={4}>
        Large
      </Text>
    }
    items={['option 1', 'option 2'].map((option) => (
      <Text noWrap onClick={() => alert(`Clicked on ${option}`)}>
        {option}
      </Text>
    ))}
  />
  <Dropdown
    variant="secondary"
    chevronShown
    size="xl"
    toggle={
      <Text noWrap size={5}>
        XLarge
      </Text>
    }
    items={['option 1', 'option 2'].map((option) => (
      <Text noWrap onClick={() => alert(`Clicked on ${option}`)}>
        {option}
      </Text>
    ))}
  />
</span>;
```

In case the toggle is wider than all of the items, the item's container will take the toggle's width, otherwise, the toggle's container will adjust to fit the content and the item's container will be wider. In that case, we can change which side the selected box is going to be aligned to.

```jsx
import Text from '../Text/Text';

<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: '1rem',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Dropdown
    chevronShown
    toggle={<Text>Select an option</Text>}
    items={['1', '2'].map((option) => (
      <Text noWrap>{option}</Text>
    ))}
  />
  <Dropdown
    chevronShown
    toggle={<Text>S</Text>}
    items={['long option 1', 'long option 2'].map((option) => (
      <Text noWrap>{option}</Text>
    ))}
  />
  <Dropdown
    chevronShown
    align="right"
    toggle={<Text>S</Text>}
    items={['long option 1', 'long option 2'].map((option) => (
      <Text noWrap>{option}</Text>
    ))}
  />
  <Dropdown
    chevronShown
    align="left"
    toggle={<Text>S</Text>}
    items={['long option 1', 'long option 2'].map((option) => (
      <Text noWrap>{option}</Text>
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
    toggle={<Text>Full width dropdown</Text>}
    items={['option 1', 'option 2'].map((option) => (
      <Text onClick={() => alert(`Clicked on ${option}`)}>{option}</Text>
    ))}
  />
</span>;
```
