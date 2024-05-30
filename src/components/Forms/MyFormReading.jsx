// Reading the select box value when submitting a form

export default function EditPost() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    // You can pass formData as a fetch body directly:
    fetch('/some-api', { method: form.method, body: formData });
    // You can generate a URL out of it, as the browser does by default:
    console.log(new URLSearchParams(formData).toString()); //selectedFruit=orange&selectedVegetables=corn&selectedVegetables=tomato
    // You can work with it as a plain object.
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson); // (!) This doesn't include multiple select values
    //  {selectedFruit: 'orange', selectedVegetables: 'tomato'}
    // Or you can get an array of name-value pairs.
    console.log([...formData.entries()]); //[['selectedFruit', 'orange'],['selectedVegetables', 'corn'],['selectedVegetables', 'tomato']]

    const formJson2 = Object.fromEntries([...formData.entries()]);
    console.log(formJson2);

    const formDataObject = [...formData.entries()].reduce(
      (acc, [key, value]) => {
        // acc[key] = acc[key] ? [].concat(acc[key], value) : value;
        acc[key] = acc[key] ? [...acc[key], value] : value;

        return acc;
      },
      {}
    );

    //   acc[key] Здесь проверяется, существует ли уже в объекте acc значение по ключу key. Если значение существует, acc[key] вернет true
    //   [].concat(acc[key], value) Если ключ уже существует в объекте, то мы используем метод concat для создания нового массива, который включает в себя старое значение acc[key] и новое значение value. Метод concat всегда возвращает новый массив, не изменяя исходный массив (в данном случае, если acc[key] уже массив, он будет объединен с value; если это одно значение, оно будет преобразовано в массив с добавлением value).
    console.log(formDataObject);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Pick your favorite fruit:
        <select name="selectedFruit" defaultValue="orange">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </label>
      <label>
        Pick all your favorite vegetables:
        <select
          name="selectedVegetables"
          multiple={true}
          defaultValue={['corn', 'tomato']}
        >
          <option value="cucumber">Cucumber</option>
          <option value="corn">Corn</option>
          <option value="tomato">Tomato</option>
        </select>
      </label>
      <hr />
      <button type="reset">Reset</button>
      <button type="submit">Submit</button>
    </form>
  );
}
