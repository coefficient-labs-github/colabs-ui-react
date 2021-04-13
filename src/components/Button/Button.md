```jsx
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '1rem',
    justifyItems: 'center',
  }}
>
  <Button text="Test Button" handleClick={() => false} />
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
  <Button
    text="Primary"
    size="md"
    variant="primary"
    onClick={() => false}
    icon={<LeftArrow fill="white" />}
  />
  <Button
    text="Secondary"
    size="md"
    variant="secondary"
    onClick={() => false}
    icon={<LeftArrow />}
  />
  <Button
    text="Tertiary"
    size="md"
    variant="tertiary"
    onClick={() => false}
    icon={<LeftArrow />}
  />
</span>;
```

The button can have one of three sizes:

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
  <Button
    text="Large"
    size="lg"
    variant="primary"
    onClick={() => false}
    icon={<LeftArrow fill="white" />}
  />
  <Button
    text="Medium"
    size="md"
    variant="primary"
    onClick={() => false}
    icon={<LeftArrow fill="white" />}
  />
  <Button
    text="Small"
    size="sm"
    variant="primary"
    onClick={() => false}
    icon={<LeftArrow fill="white" />}
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
  <Button
    size="lg"
    variant="secondary"
    onClick={() => false}
    icon={<LeftArrow />}
  />
  <Button
    size="md"
    variant="tertiary"
    iconPos="right"
    onClick={() => false}
    icon={<LeftArrow />}
  />
  <Button
    size="sm"
    variant="primary"
    onClick={() => false}
    icon={<LeftArrow fill="white" />}
  />
  <Button
    size="md"
    variant="secondary"
    iconPos="right"
    onClick={() => false}
    icon={<LeftArrow />}
  />
  <Button
    size="lg"
    variant="primary"
    onClick={() => false}
    icon={<LeftArrow fill="white" />}
  />
  <Button
    size="sm"
    variant="tertiary"
    onClick={() => false}
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
  <Button
    text="Button with Icon"
    icon={<LeftArrow fill="white" />}
    iconPos="left"
    size="md"
    onClick={() => false}
  />
  <Button
    text="Button with Icon"
    icon={<LeftArrow fill="white" />}
    size="md"
    iconPos="right"
    onClick={() => false}
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
  <Button
    text="Test"
    size="lg"
    variant="tertiary"
    iconPos="right"
    disabled
    onClick={() => false}
    icon={<LeftArrow fill="#868686" />}
  />
  <Button
    text="Test"
    size="md"
    disabled
    variant="secondary"
    onClick={() => false}
    icon={<LeftArrow fill="#868686" />}
  />
  <Button
    text="Test"
    size="sm"
    disabled
    variant="primary"
    onClick={() => false}
    icon={<LeftArrow fill="#868686" />}
  />
</span>;
```

If used over transparent surfaces, it will need to have the elevation styling. For that, just pass 'elevated' as prop:

```jsx
import LeftArrow from '../../../assets/LeftArrowIcon';
<div
  style={{
    backgroundColor: '#8BA85D',
    padding: '2rem',
    position: 'relative',
  }}
>
  <span
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffffdd',
    }}
  />
  <span
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: '1rem',
      justifyItems: 'center',
      alignItems: 'center',
    }}
  >
    <Button
      text="Test"
      size="lg"
      variant="tertiary"
      iconPos="right"
      onClick={() => false}
      icon={<LeftArrow />}
    />
    <Button
      text="Test"
      size="md"
      variant="secondary"
      onClick={() => false}
      elevated
      icon={<LeftArrow />}
    />
    <Button
      text="Test"
      size="sm"
      variant="primary"
      elevated
      onClick={() => false}
      icon={<LeftArrow fill="white" />}
    />
  </span>
</div>;
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
  <Button
    size="lg"
    variant="primary"
    onClick={() => false}
    text="Full Width Example"
    icon={<LeftArrow fill="white" />}
    fullWidth
  />
  <Button
    size="md"
    variant="primary"
    onClick={() => false}
    text="Full Width Example"
    icon={<LeftArrow fill="white" />}
    fullWidth
  />
</span>;
```
