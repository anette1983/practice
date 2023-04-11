export const Controls = ({ onChange, current, total }) => {
  return (
    <section>
      <button
        type="button"
        // disabled={this.state.index === 0}
        disabled={current === 1}
        onClick={() => onChange(-1)}
      >
        Назад
      </button>
      <button
        type="button"
        // disabled={this.state.index + 1 === this.props.items.length}
        disabled={current === total}
        onClick={() => onChange(1)}
      >
        Вперед
      </button>
    </section>
  );
};
