```jsx
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '2fr 2fr 1fr',
    gap: '3rem',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Stepper
    steps={[{ hidden: true }, { label: 1 }, { label: 2 }, { label: 3 }]}
    variant="numbers"
    activeStepIndex={2}
    onStepClick={(e) => alert(e)}
  />
  <Stepper
    steps={[{ hidden: true }, { label: 1 }, { label: 2 }, { label: 3 }]}
    variant="lines"
  />
  <Stepper
    steps={[{ hidden: true }, { label: 1 }, { label: 2 }, { label: 3 }]}
    variant="dots"
  />
</span>
```
