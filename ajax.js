// client --> server---request goes in 5 steps which are called readyState they are 0:request not initialized 1:connection esatblished 2:request received 3:processing request 4:response is ready to be sent back

// response has 2 parts --> status and responseText/XML

// http staus codes --> 100- Intermediate status 200- file received OK 300-some sort of redirection one file insted of requested one 400- something wrong with the request 500- server side error

// The readyState property holds the status of the XMLHttpRequest.

// The onreadystatechange property defines a function to be executed when the readyState changes.

// The status property and the statusText property holds the status of the XMLHttpRequest object.

// The onreadystatechange function is called every time the readyState changes.

function loadDoc() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      console.log(this.statusText);
      console.log(this.responseText);
      // console.log(this.responseXML);
    } else {
      console.log(`eror:some error happened`);
    }
  };

  xhr.open("GET", "./content/text.txt", true);
  xhr.send();
}

loadDoc();

// https://jsonplaceholder.typicode.com/posts

// ajax with json data

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    console.log(this); //XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
    const res = this.responseText;
    console.log(res);
    // console.log(this.statusText);
  } else {
    console.log(`error happend`);
  }
};

xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xhttp.send();
