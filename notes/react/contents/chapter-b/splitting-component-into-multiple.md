# Memisahkan Component menjadi Multiple Components

Semakin besar suatu custom component yang dibuat maka akan semakin besar component tersebut dapat dipecah menjadi multiple components. Contohnya adalah seperti dibawah ini:

![Expense Date Plan](../../images/expense-date-plan-component.png)

Dapat dilihat diatas bahwa untuk menampilkan month, day dan year memiliki logicnya sendiri. Sehingga hal ini membuat kita dapat memisahkan bagian dari layout tersebut menjadi komponen sendiri.

![Expense Date Component](../../images/expense-date-component.png)

![Using Expense Date](../../images/using-expense-date.png)

Yang perlu diperhatikan dalam hal ini kita melakukan passing props berkali-kali kedalam component yang berada didalam component lainnya seperti dibawah ini:

a. Dari App

![Expense Item Using Props](../../images/expense-item-using-props.png)

b. Turun ke ExpenseItem

![Using Expense Date](../../images/using-expense-date.png)

c. Terakhir pada Expense Date

![Expense Date Component](../../images/expense-date-component.png)

Hal ini lumrah dilakukan pada react karena menyusung konsep component.

### [Back To React Index](../../README.md)


















