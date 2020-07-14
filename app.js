const div = document.getElementById("primary");

function func() {
  fetch(
    "https://totalfootballanalysis.com/wp-json/wp/v2/posts?categories=40890"
  )
    .then((response) => response.json())
    .then((response) => {
      const res = response[0].content.rendered;

      div.innerHTML = response[0].content.rendered;
    });
}
func();
