let promises = [];
for (let number = 1; number <= 10; number++) {
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://jsonplaceholder.typicode.com/users/" + number,
      true
    );
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState != 4) {
        return;
      }
      if (xhr.status != 200) {
        reject("JSON: Error", xhr.status, xhr.statusText);
      } else {
        resolve(JSON.parse(xhr.responseText));
      }
    };
  });
  promise.then(
    result => {
      console.log("Promise №" + number + ":", promise.name);
      promises.push(result);
    },
    error => {
      console.log(error);
    }
  );
}
console.log("Итоговый массив данных:", promises);
