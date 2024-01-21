

function customAlertMessage(message){
    let shareData = {
         title: "MDN",
          text: "Learn web development on MDN!",
          url: "https://developer.mozilla.org",
     }
  navigator.share(shareData)
}

function alertMessage(text) {
      alert(text)
}

function customAlertMessage2(message){
const shareData = {
  title: "MDN",
  text: "Learn web development on MDN!",
  url: "https://developer.mozilla.org",
};
  navigator.share(shareData)
}

