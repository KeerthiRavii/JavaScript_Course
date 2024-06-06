let calculation = localStorage.getItem('calculation') || '';
      displayCalculation();

      function updateCalculation(value) {
        calculation += value;
        //calculation.classList.
      displayCalculation();
      localStorage.setItem('calculation', calculation);
      }

     function displayCalculation(){
      document.querySelector('.res').innerHTML=calculation;   
     }

      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
      }