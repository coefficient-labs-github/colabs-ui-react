```jsx
<div
  style={{
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '1rem',
  }}
>
  <Textfield />
</div>
```

It has three elements, the top label, the input container and the bottom helper text:

```jsx
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '1rem',

    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Textfield label="This is a label" />
  <Textfield placeholder="This is a placeholder" />
  <Textfield helperText="This is a helper text" />
</span>
```

It can be used with an icon on either side

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
  <Textfield placeholder="This has an icon" />
  <Textfield
    placeholder="This has an icon"
    icon={<LeftArrow />}
    iconPos="right"
  />
  <Textfield
    placeholder="This has an icon"
    icon={<LeftArrow />}
    iconPos="left"
  />
</span>;
```

When used over a transparent material, it has to have the elevated styling. For that, pass "elevated" as a prop

```jsx
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
    <Textfield placeholder="Placeholder" label="This is a label" elevated />
    <Textfield placeholder="Placeholder" label="This is a label" elevated />
  </span>
</div>
```

It can also be disabled

```jsx
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '1rem',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Textfield placeholder="Placeholder" label="This is a label" disabled />
  <Textfield
    placeholder="Placeholder"
    label="This is a label"
    disabled
    elevated
  />
</span>
```

It can be set to have fullWidth

```jsx
import Button from '../Button/Button';
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '1rem',

    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Textfield placeholder="Placeholder" fullWidth />
  <Textfield placeholder="Placeholder" />
</span>;
```

It can also be disabled

```jsx
import Button from '../Button/Button';
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '1rem',

    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Textfield
    placeholder="Placeholder"
    label="This is a label"
    inputTag="textarea"
    rows={5}
    backgroundColor="#F7F8FA"
    bottomActions={<Button text="Send" />}
  />
  <Textfield placeholder="Placeholder" label="This is a label" elevated />
</span>;
```
