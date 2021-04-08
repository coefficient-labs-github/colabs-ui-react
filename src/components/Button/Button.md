```jsx
<Button text="Test Button" handleClick={() => false} />
```

It comes in three variants

```jsx
import LeftArrow from '../../../assets/LeftArrowIcon';
<span
  style={{
    display: 'grid',
    background: '#efefef',
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyItems: 'center',
  }}
>
  <Button
    text="Primary"
    size="md"
    variant="primary"
    onClick={() => false}
    icon={<LeftArrow />}
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

The icon could be on the left or on the right:

```jsx
import LeftArrow from '../../../assets/LeftArrowIcon';
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Button
    text="Button with Icon"
    icon={<LeftArrow />}
    iconPos="left"
    size="md"
    onClick={() => false}
  />
  <Button
    text="Button with Icon"
    icon={<LeftArrow />}
    size="md"
    iconPos="right"
    onClick={() => false}
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
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Button
    text="Large"
    size="lg"
    variant="primary"
    onClick={() => false}
    icon={<LeftArrow />}
  />
  <Button
    text="Medium"
    size="md"
    variant="primary"
    onClick={() => false}
    icon={<LeftArrow />}
  />
  <Button
    text="Small"
    size="sm"
    variant="primary"
    onClick={() => false}
    icon={<LeftArrow />}
  />
</span>;
```

You can combine all options as you wish

```jsx
import LeftArrow from '../../../assets/LeftArrowIcon';
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
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
    icon={<LeftArrow />}
  />
  <Button
    text="Test"
    size="sm"
    variant="primary"
    onClick={() => false}
    icon={<LeftArrow />}
  />
  <Button
    text="Test"
    size="lg"
    variant="tertiary"
    onClick={() => false}
    icon={<LeftArrow />}
  />
</span>;
```
