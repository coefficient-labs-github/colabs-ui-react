It comes in two variants

```jsx
import LeftArrow from '../../../assets/LeftArrowIcon';
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem',
    justifyItems: 'center',
  }}
>
  <Chip label="Primary" size="md" variant="primary" />
  <Chip label="Secondary" size="md" variant="secondary" />
</span>;
```

The icon can be placed in either side

```jsx
import LeftArrow from '../../../assets/LeftArrowIcon';
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem',
    justifyItems: 'center',
  }}
>
  <Chip
    label="Primary"
    size="md"
    variant="primary"
    iconPos="right"
    icon={<LeftArrow />}
  />
  <Chip
    label="Primary"
    size="md"
    variant="primary"
    iconPos="left"
    icon={<LeftArrow />}
  />
</span>;
```

It comes in three sizes

```jsx
import LeftArrow from '../../../assets/LeftArrowIcon';
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gridGap: '1rem',
    justifyItems: 'center',
  }}
>
  <Chip label="Small" size="sm" variant="primary" icon={<LeftArrow />} />
  <Chip label="Medium" size="md" variant="primary" icon={<LeftArrow />} />
  <Chip label="Large" size="lg" variant="primary" icon={<LeftArrow />} />
  <Chip label="Small" size="sm" variant="primary" />
  <Chip label="Medium" size="md" variant="primary" />
  <Chip label="Large" size="lg" variant="primary" />
</span>;
```
