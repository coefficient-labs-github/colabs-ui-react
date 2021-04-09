```jsx
<span
  style={{
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Textfield />
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
  <Textfield placeholder="Placeholder" label="This is a label" />
  <Textfield placeholder="Placeholder" label="This is a label" />
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
  <Textfield />
  <Textfield />
</span>
```
