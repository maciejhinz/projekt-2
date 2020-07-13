const div = document.querySelector(".primary");

fetch("https://totalfootballanalysis.com/wp-json/wp/v2/posts?categories=40890")
  .then((response) => response.json())
  .then((response) => {
    const res = response[0].content.rendered;
    // console.log(response);
    // div.innerHTML = response[0].content.rendered;
    // console.log(response[0].content.rendered);
    // div.innerHTML = res;
    console.log(res);
  });

//   .then((data) => console.log(JSON.stringify));
