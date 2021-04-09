```jsx
<span
  style={{
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Divider variant="primary" />
</span>
```

It has two variants:

```jsx
<span
  style={{
    display: 'grid',
    gap: '1rem',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Divider />
  <Divider variant="primary" />
</span>
```

It could have a middle "Or" text

```jsx
<span
  style={{
    display: 'grid',
    gap: '1rem',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Divider orOn />
  <Divider orOn variant="primary" />
</span>
```
