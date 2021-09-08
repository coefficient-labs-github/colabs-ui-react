The Card is a container with a border and a drop shadow

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

It can have different elevations

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

It can also have different colors

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
  <Card color="#2B8DFF">
    <div style={{ padding: '1rem' }}>
      <Text color="white">This is the content</Text>
      <Text color="white">Of the card</Text>
    </div>
  </Card>
  <Card elevation={3} color="#2B8DFF">
    <div style={{ padding: '1rem' }}>
      <Text color="white">This is the content</Text>
      <Text color="white">Of the card</Text>
    </div>
  </Card>
  <Card elevation={6} color="#2B8DFF">
    <div style={{ padding: '1rem' }}>
      <Text color="white">This is the content</Text>
      <Text color="white">Of the card</Text>
    </div>
  </Card>
</span>;
```
