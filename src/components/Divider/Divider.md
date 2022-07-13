```jsx
<span
  style={{
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Divider />
</span>
```

It can be of any of the colabs-ui colors:

```jsx
<span
  style={{
    display: 'grid',
    gap: '1rem',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Divider color="red" />
  <Divider color="green" />
  <Divider color="blue" />
  <Divider color="orange" />
  <Divider color="purple" />
  <Divider color="gray" />
</span>
```

It can have from 1-3px of thickness

```jsx
<span
  style={{
    display: 'grid',
    gap: '1rem',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Divider px={1} />
  <Divider px={2} />
  <Divider px={3} />
</span>
```
