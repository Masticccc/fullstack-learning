class QuizSelection {
  #container;
  #select;
  #onChange;

  constructor(container, onChange) {
    this.#container = container;
    this.#render();
    this.#onChange = onChange;
    this.#setup();
  }

  #render() {
    this.#container.innerHTML = `
        <select class="form-select d-inline-block w-auto mb-5">
            <option>-- Select a quiz --</option>
            <option value="javascript-quiz">Javascript Quiz</option>
            <option value="au-history-quiz">Australian History Quiz</option>
            <option value="electric-car-quiz">Electric Cars Quiz</option>
        </select>`;
  }

  #setup() {
    this.#select = this.#container.querySelector('select');
    this.#select.addEventListener('change', this.#onSelectChange.bind(this));
  }

  #onSelectChange() {
    let selectedValue = this.#select.value;

    // Disable first option so they can't select it
    this.#select.querySelector('option').disabled = true;

    this.#onChange(selectedValue);
  }
}

export default QuizSelection;
