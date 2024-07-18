class QuizContent {
  #container;
  #data;

  constructor(container) {
    this.#container = container;
  }

  setQuizData(data) {
    console.log(data);
    this.#data = data;
  }
}

export default QuizContent;
