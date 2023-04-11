import { Component } from 'react';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publication';
// життєвий цикл компонента

const LS_KEY = 'reader_item_index';
// шаг один - созд компонент и рендер разметки
// шаг два - создаем методы, ке по клику на кнопки будут ув и ум в стейте значение индекса (онпрев, он некст), а затем передаем значение текущ индекса + 1 (тк нач с нуля) и длину массива заметок в пешку для отображ на стр
export class Reader extends Component {
  state = {
    index: 0,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  componentDidMount() {
    // const index = Number(localStorage.getItem(LS_KEY));
    // this.setState({ index });
    //   исправляем ощшибку при пустом значении
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      this.setState({ index: Number(savedState) });
    }
  }

  //   onPrev = () => {
  //     // this.setState(prevState => prevState.index - 1)
  //     this.setState(state => ({ index: state.index - 1 }));
  //   };

  //   onNext = () => {
  //     this.setState(state => ({ index: state.index + 1 }));
  //   };

  // можем заменить два повторяющихся метода одним общим, в который будем передавать разный аргумент (вот втором случае отрицательный) и это даст нужный резтат, тк +- 1 = -1
  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  render() {
    // console.log(
    //   'this.props.items[this.state.index] :>> ',
    //   this.props.items[this.state.index]
    // );
    // const currentItem = this.props.items[this.state.index];
    //   МОжно деструктуризировать
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length;
    const currentItem = items[index];
    return (
      //   <div>
      //     <section>
      //       <button
      //         type="button"
      //         disabled={this.state.index === 0}
      //         onClick={() => this.changeIndex(-1)}
      //       >
      //         Назад
      //       </button>
      //       <button
      //         type="button"
      //         disabled={this.state.index + 1 === this.props.items.length}
      //         onClick={() => this.changeIndex(1)}
      //       >
      //         Вперед
      //       </button>
      //     </section>
      //     <p>
      //       {this.state.index + 1}/{this.props.items.length}
      //     </p>
      //     <article>
      //       <h2>{currentItem.title}</h2>
      //       <p>{currentItem.text}</p>
      //     </article>
      //   </div>
      <div>
        <Controls
          current={index + 1}
          total={totalItems}
          onChange={this.changeIndex}
        />
        <Progress current={index + 1} total={totalItems} />
        <Publication item={currentItem} />
      </div>
    );
  }
}

// След шаг - можем создать отд компоненты
// Controls, Progres, Publication (секция кнопок для листания, блок отображ прогресса, статья  с разметкой одной публикации)

// След шаг - Хотим ее в локал сторедж записать прогресс
// (обычно это хранится в урл, но мы пока не умеем)
// сделаем это в компоеннт дид апдейт, деалем ключ и создаем
