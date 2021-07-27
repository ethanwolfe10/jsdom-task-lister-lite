document.addEventListener("DOMContentLoaded", function(e) {
  // your code here
  
  let form = document.getElementById('create-task-form');

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    let data = document.getElementById('new-task-description').value;
    let ul = document.getElementById('list').querySelector('ul');
    let list = document.createElement('li');

    list.textContent = data;
    ul.appendChild(list);

    let delBut = document.createElement('button');
    delBut.textContent = 'X';
    delBut.dataset.description = data;
    list.appendChild(delBut);

    delBut.addEventListener("click", function() {
      let delList = this.parentNode;
      delList.remove();
    });

  });

});
