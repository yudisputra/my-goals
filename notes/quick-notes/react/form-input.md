# Form Input

```ts
import React from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" step="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
```

Untuk membuat form kita bisa buat seperti diatas, yang perlu kita perhatikan adalah tag html yang pertama kita gunakan adalah `form` sebagai pembungkusnya. Kemudian untuk setiap fieldnya kita gunakan gabungan antara label dan input.