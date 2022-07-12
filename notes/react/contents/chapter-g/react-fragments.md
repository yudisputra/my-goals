# React Fragments

Kita sudah mengetahui cara membuat `Wrapper Component` dari pembahasan sebelumnya. Sebenarnya dari `React` sendiri menyediakan komponent serupa yaitu yang bernama `React.Fragment`.

`React Fragment` bekerja sama persis dengan `Wrapper Component` yang kita buat sebelumnya. Cara pakai nya adalah seperti berikut :

```tsx
import React from 'react';

<React.Fragment>
    <h2>Hi There</h2>
    <p>This does not work</p>
</React.Fragment>
```

atau

```tsx
import React, { Fragment } from 'react';

<Fragment>
    <h2>Hi There</h2>
    <p>This does not work</p>
</Fragment>
```

Atau ada cara lain yang sering digunakan juga tetapi tergantung dari environment projectnya dapat mendukung atau tidak yaitu menggunakan `Empty Tag`.

```tsx
import React from 'react';

<>
    <h2>Hi There</h2>
    <p>This does not work</p>
</>
```

### [Back To React Index](../../README.md)

