# Dynamic Styles

Dalam beberapa kasus kita perlu memberi style tergantung dari suatu data dan hal ini membuat style kita pada suatu komponen menjadi dinamis.

```js
let barFillHeight = '0%';

    if(props.maxValue > 0){
       // barFillHeight hatus menghitung dari props
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div
                    className='chart-bar__fill'
                    // style yang kita gunakan menjadi dinamis
                    style={{height: barFillHeight}}
                ></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    )
```