//
//
//function customAlertMessage(message){
//    let shareData = {
//         title: "MDN",
//          text: "Learn web development on MDN!",
//          url: "https://developer.mozilla.org",
//     }
//  navigator.share(shareData)
//}
//
//function alertMessage(text) {
//      alert(text)
//}
//
//function customAlertMessage2(message){
//const shareData = {
//  title: "MDN",
//  text: "Learn web development on MDN!",
//  url: "https://developer.mozilla.org",
//};
//  navigator.share(shareData)
//}

////////////////////////////////////////////////////////////////////////////////////////////


function showAlert(message) {

//alert(message)

//     let shareData = {
//            title: 'MDN',
//            text: message,
//            url: 'https://developer.mozilla.org',
//          }

//console.log('MDN shared successfully');
//            navigator.share(shareData)
//            .then(() =>
//              console.log('MDN shared successfully');
//            )
//            .catch((e) =>
//              console.error('Error: ' + e);
//            )
}



function shareInWeb(content, title) {

    //alert(message)
    let shareData = {
        title: title,
        text: content,
    }

    navigator.share(shareData)
//        .then(() =>
//          resultPara.textContent = 'MDN shared successfully'
//        )
//        .catch((e) =>
//          resultPara.textContent = 'Error: ' + e
//        )

}

