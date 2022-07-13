The Card is a container with a rounded corners and a drop shadow that gives the perception of depth.

```jsx
import Text from '../Text/Text';

<span
  style={{
    display: 'grid',
    gap: '1rem',
    padding: '1rem',
    justifyItems: 'center',
    alignItems: 'center',
    background: '#f5f5f5',
  }}
>
  <Card>
    <div style={{ padding: '1rem' }}>
      <Text>This is the content</Text>
      <Text>Of the card</Text>
    </div>
  </Card>
</span>;
```

It can have from 1-6 levels of elevation

```jsx
import Text from '../Text/Text';

<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '1rem',
    padding: '1rem',
    justifyItems: 'center',
    alignItems: 'center',
    background: '#f5f5f5',
  }}
>
  <Card elevation={1}>
    <div style={{ padding: '1rem' }}>
      <Text>This is the content</Text>
      <Text>Of the card</Text>
    </div>
  </Card>
  <Card elevation={2}>
    <div style={{ padding: '1rem' }}>
      <Text>This is the content</Text>
      <Text>Of the card</Text>
    </div>
  </Card>
  <Card elevation={3}>
    <div style={{ padding: '1rem' }}>
      <Text>This is the content</Text>
      <Text>Of the card</Text>
    </div>
  </Card>
  <Card elevation={4}>
    <div style={{ padding: '1rem' }}>
      <Text>This is the content</Text>
      <Text>Of the card</Text>
    </div>
  </Card>
  <Card elevation={5}>
    <div style={{ padding: '1rem' }}>
      <Text>This is the content</Text>
      <Text>Of the card</Text>
    </div>
  </Card>
  <Card elevation={6}>
    <div style={{ padding: '1rem' }}>
      <Text>This is the content</Text>
      <Text>Of the card</Text>
    </div>
  </Card>
</span>;
```

It can use any of the colors of the colabs-ui palette

```jsx
import Text from '../Text/Text';

<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '1rem',
    padding: '1rem',
    justifyItems: 'center',
    alignItems: 'center',
    background: '#f5f5f5',
  }}
>
  <Card elevation={6} color="red">
    <div style={{ padding: '1rem' }}>
      <Text color="white">This is the content</Text>
      <Text color="white">Of the card</Text>
    </div>
  </Card>
  <Card elevation={6} color="green">
    <div style={{ padding: '1rem' }}>
      <Text color="white">This is the content</Text>
      <Text color="white">Of the card</Text>
    </div>
  </Card>
  <Card elevation={6} color="blue">
    <div style={{ padding: '1rem' }}>
      <Text color="white">This is the content</Text>
      <Text color="white">Of the card</Text>
    </div>
  </Card>
  <Card elevation={6} color="gray">
    <div style={{ padding: '1rem' }}>
      <Text color="white">This is the content</Text>
      <Text color="white">Of the card</Text>
    </div>
  </Card>
  <Card elevation={6} color="orange">
    <div style={{ padding: '1rem' }}>
      <Text color="white">This is the content</Text>
      <Text color="white">Of the card</Text>
    </div>
  </Card>
  <Card elevation={6} color="purple">
    <div style={{ padding: '1rem' }}>
      <Text color="white">This is the content</Text>
      <Text color="white">Of the card</Text>
    </div>
  </Card>
</span>;
```
