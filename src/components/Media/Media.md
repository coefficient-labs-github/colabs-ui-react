```jsx
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Media
    style={{ width: '24rem', height: '24rem', objectFit: 'contain' }}
    imgProps={{ alt: 'Carousel 4' }}
    src="https://colabs-ads.s3.amazonaws.com/Carousel_4_Collection_Ad_Smooth_c01d47afa5.png"
  />
</span>
```

It comes in three sizes

```jsx
<span
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyItems: 'center',
    alignItems: 'center',
  }}
>
  <Media
    style={{ width: '24rem', height: '24rem', objectFit: 'contain' }}
    imgProps={{ alt: 'Carousel 4' }}
    src="https://colabs-ads.s3.amazonaws.com/Carousel_4_Collection_Ad_Smooth_c01d47afa5.png"
  />
  <Media
    style={{ width: '24rem', height: '24rem', objectFit: 'contain' }}
    src="https://colabs-ads.s3.amazonaws.com/121820_Better_AP_Rs_c0a77ef039.mp4"
    srcSuffix="#t=2"
  />
  <Media
    style={{ width: '24rem', height: '24rem', objectFit: 'contain' }}
    src=""
    onError={(e) => {
      e.target.src =
        'https://colabs-ads.s3.amazonaws.com/Aa_Dya_R12_Stand_Alone_01_505e9a116f.png';
    }}
  />
</span>
```
