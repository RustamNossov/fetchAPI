// get

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

  //POST

  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      body: JSON.stringify({name: "Alex"}),
      headers: {
          "content-type" : "application/json"
      }
  })
  .then((response) => response.json())
  .then((json) => console.log(json));



  // отправка данных на сервер в формате FormData

  const statusMessage = document.createElement('img');
  statusMessage.src = message.loading;
  statusMessage.style.cssText = `
      display: block;
      margin: 0 auto;
      `;
  form.insertAdjacentElement('afterend', statusMessage);


  const formData = new FormData(form);

  fetch('server.php', {
                method: "POST",
                body: formData
    })
    .then(data => data.text())
    .then(data => {
        console.log(data);
        statusMessage.remove();
        showThanksModal(message.success);
        setTimeout(()=>{statusMessage.remove();}, 3000);
    })
    .catch(()=> {
        showThanksModal(message.failure);
        statusMessage.remove();
    })
    .finally(() => {
        form.reset();
    });


    // отправка данных на сервер в формате JSON

    const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });
            //console.log(object);

            fetch('server.php', {
                method: "POST",
                body: JSON.stringify(object),
                headers: {
                    'Content-type': 'application/json',
                }
            })
            .then(data => data.text())
            .then(data => {
                console.log(data);
                statusMessage.remove();
                showThanksModal(message.success);
                setTimeout(()=>{statusMessage.remove();}, 3000);
            })
            .catch(()=> {
                showThanksModal(message.failure);
                statusMessage.remove();
            })
            .finally(() => {
                e.target.reset();
            });