document.addEventListener('DOMContentLoaded', function() {
    const decrementBtn = document.getElementById('decrement');
    const incrementBtn = document.getElementById('increment');
    const countDisplay = document.getElementById('count');
  
    let count = 0;
  
    // Function to decrement count
    decrementBtn.addEventListener('click', function() {
      if (count > 0) {
        count--;
        countDisplay.textContent = count;
        showAlert(`Count decremented to ${count}`);
      } else {
        showAlert(`Count cannot be less than zero`);
      }
    });
  
    // Function to increment count
    incrementBtn.addEventListener('click', function() {
      count++;
      countDisplay.textContent = count;
      showAlert(`Count incremented to ${count}`);
    });
  
    // Function to show alert
    function showAlert(message) {
      alert(message);
    }
  });
  