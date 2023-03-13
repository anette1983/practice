import { Component } from 'react';

export class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

      componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
      }


    render() {
    return (
      <div>
        <h1>Привіт, світе!</h1>
        <h2>Зараз {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


/*Коли <Clock /> передається до ReactDOM.render (), React викликає конструктор компонента Clock. Оскільки Clock має відображати поточний час, він ініціалізує this.state з об’єктом, що включає поточний час. Пізніше ми оновимо цей стан.
React потім викликає метод render() компонента Clock. Ось як React дізнається, що саме має відображатися на екрані. Потім React оновлює DOM, щоб він відповідав виводу рендера Clock.
Коли виведення рендера Clock вставляється в DOM, React викликає метод життєвого циклу componentDidMount(). Всередині нього компонент Clock просить браузер налаштувати таймер для виклику методу компонента tick() один раз на секунду.
Кожну секунду браузер викликає метод tick(). У цьому методі компонент Clock планує оновлення UI, викликаючи setState() з об’єктом, що містить поточний час. Завдяки виклику setState() React знає, що стан змінився, і знову викликає метод render(), щоб дізнатися, що має бути на екрані. Цього разу this.state.date в методі render() буде відрізнятися і тому вивід рендера буде включати оновлений час. React оновлює DOM відповідно.
Якщо компонент Clock коли-небудь буде видалений з DOM, React викличе метод життєвого циклу componentWillUnmount(), аби таймер зупинився. */
  