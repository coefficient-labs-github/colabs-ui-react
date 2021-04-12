```jsx
<div
  style={{
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    gridTemplateColumns: '1fr 1fr 1fr',
  }}
>
  <Textfield />
</div>
```

It has two variants:

```jsx
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
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
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Textfield placeholder="Placeholder" label="This is a label" />
  <Textfield placeholder="Placeholder" label="This is a label" />
</span>
```
