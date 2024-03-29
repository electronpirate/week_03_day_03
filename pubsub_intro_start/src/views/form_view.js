const PubSub = require('../helpers/pub_sub.js');

class FormView{

  bindEvents(){
    const form = document.querySelector('#wordcounter-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const inputtedText = event.target.text.value;
      PubSub.publish('FormView:text-submitted', inputtedText);
    })
  }

}


module.exports = FormView;
