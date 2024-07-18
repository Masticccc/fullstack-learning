import QuizSelection from './components/quizSelection.js';
import QuizNavigation from './components/quizNavigation.js';
import QuizContent from './components/quizContent.js';

class QuizApp {
  #container;
  #quizSelection;
  #activeQuiz;
  #quizNavigation;
  #quizContent;

  constructor(container) {
    this.#container = container;
    this.#render();
    this.#setup();
  }

  #render() {
    this.#container.innerHTML = `
    <div class="container mt-5 text-center">
       <div data-component="selection"></div>
       <div data-component="content"></div>
       <div data-component="timer"></div>
       <div data-component="navigation"></div>
       <div data-component="report"></div>
     </div>`;
  }

  #setup() {
    let container = this.#container;

    this.#quizSelection = new QuizSelection(
      container.querySelector('[data-component="selection"]'),
      this.#onQuizSelectionChange.bind(this)
    );

    let navigationEvents = {
      onChange: this.#onQuizNavigationChange.bind(this),
      onSubmit: this.#onSubmit.bind(this),
    };
    this.#quizNavigation = new QuizNavigation(
      container.querySelector('[data-component="navigation"]'),
      navigationEvents
    );

    this.#quizContent = new QuizContent(
      container.querySelector('[data-component="content"]')
    );
  }

  #onQuizSelectionChange(selectedValue) {
    console.log(selectedValue);
    //to do fetch we need to know the url we are about to fetch
    //1. construct the url so we can fetch
    // What do we want: data/javascript-quiz.json
    //
    let url = 'data/' + selectedValue + '.json';
    console.log(url);

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(
        function (result) {
          // to this point, we know which quiz we have selected
          console.log('Selected quiz data', result);

          //we need to save this selected quiz to our #ActiveQuiz so we can reuse it later
          this.#activeQuiz = result;

          // we need to call setQuizData and pass that data in
          this.#quizNavigation.setQuizData(this.#activeQuiz);
          this.#quizContent.setQuizData(this.#activeQuiz);
        }.bind(this)
      );
  }
}

const app = new QuizApp(document.querySelector('#app'));
