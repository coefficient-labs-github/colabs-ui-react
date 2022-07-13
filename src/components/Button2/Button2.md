```jsx
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '1rem',
    justifyItems: 'center',
  }}
>
  <Button2 text="Test Button" onClick={() => alert('Button Clicked')} />
</span>
```

It comes in three variants

```jsx
import LeftArrow from '../../../assets/LeftArrowIcon';
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '1rem',
    justifyItems: 'center',
  }}
>
  <Button2
    text="Primary"
    size="md"
    variant="primary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Secondary"
    size="md"
    variant="secondary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Tertiary"
    size="md"
    variant="tertiary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
</span>;
```

It can have 5 sizes

```jsx
import LeftArrow from '../../../assets/LeftArrowIcon';
<span
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridGap: '1rem',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Button2
    text="XLarge"
    size="xl"
    variant="primary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Large"
    size="lg"
    variant="primary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Medium"
    size="md"
    variant="primary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Small"
    size="sm"
    variant="primary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="XSmall"
    size="xs"
    variant="primary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
</span>;
```

The button compontent can either have a text, an icon, or both.

```jsx
import LeftArrow from '../../../assets/LeftArrowIcon';
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    gridGap: '1rem',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Button2
    size="lg"
    variant="secondary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    size="md"
    variant="tertiary"
    iconPos="right"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    size="sm"
    variant="primary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    size="md"
    variant="secondary"
    iconPos="right"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    size="lg"
    variant="primary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    size="sm"
    variant="tertiary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
</span>;
```

And when both are present, the icon can be on either side:

```jsx
import LeftArrow from '../../../assets/LeftArrowIcon';
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Button2
    text="Button with Icon"
    icon={<LeftArrow />}
    iconPos="left"
    size="md"
    onClick={() => alert('Button Clicked')}
  />
  <Button2
    text="Button with Icon"
    icon={<LeftArrow />}
    size="md"
    iconPos="right"
    onClick={() => alert('Button Clicked')}
  />
</span>;
```

It can be disabled to not allow execute event onClick:

```jsx
import LeftArrow from '../../../assets/LeftArrowIcon';
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '1rem',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Button2
    text="Test"
    size="lg"
    variant="tertiary"
    iconPos="right"
    disabled
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Test"
    size="md"
    disabled
    variant="secondary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Test"
    size="sm"
    disabled
    variant="primary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
</span>;
```

Colors:

```jsx
import LeftArrow from '../../../assets/LeftArrowIcon';
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '1rem',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Button2
    text="Test"
    size="lg"
    color="red"
    variant="primary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Test"
    size="lg"
    color="red"
    variant="secondary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Test"
    size="lg"
    color="red"
    variant="tertiary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Test"
    size="md"
    color="green"
    variant="primary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Test"
    size="md"
    color="green"
    variant="secondary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Test"
    size="md"
    color="green"
    variant="tertiary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Test"
    size="sm"
    color="orange"
    variant="primary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Test"
    size="sm"
    color="orange"
    variant="secondary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Test"
    size="sm"
    color="orange"
    variant="tertiary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Test"
    size="sm"
    color="purple"
    variant="primary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Test"
    size="sm"
    color="purple"
    variant="secondary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Test"
    size="sm"
    color="purple"
    variant="tertiary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Test"
    size="sm"
    color="gray"
    variant="primary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Test"
    size="sm"
    color="gray"
    variant="secondary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
  <Button2
    text="Test"
    size="sm"
    color="gray"
    variant="tertiary"
    onClick={() => alert('Button Clicked')}
    icon={<LeftArrow />}
  />
</span>;
```

For special situations, it also can be set to take its parent width. Mostly for usage in small containers like cards and modals. Use this sparingly.

```jsx
import LeftArrow from '../../../assets/LeftArrowIcon';
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Button2
    size="lg"
    variant="primary"
    onClick={() => alert('Button Clicked')}
    text="Full Width Example"
    icon={<LeftArrow />}
    fullWidth
  />
  <Button2
    size="md"
    variant="primary"
    onClick={() => alert('Button Clicked')}
    text="Full Width Example"
    icon={<LeftArrow />}
    fullWidth
  />
</span>;
```
