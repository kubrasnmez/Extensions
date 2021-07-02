
const getNameText = () => {
    const tag = document.querySelector('div.ph5 div.display-flex.justify-space-between.pt2 div div:nth-child(1) h1') as HTMLSpanElement;
    return tag?.innerText ?? "No data";
}

const getDesctiptionText = () => {
    const tag = document.querySelector("div.ph5 > div.display-flex.justify-space-between.pt2 > div > div.text-body-medium.break-words") as HTMLSpanElement;
    return tag?.innerText ?? "No Data";


}
const getAddressText  = () => {
    const tag = document.querySelector('div.ph5 > div.display-flex.justify-space-between.pt2 > div > div.pb2 > span.text-body-small.inline.t-black--light.break-words') as HTMLSpanElement;
    return tag?.innerText ?? "No Data";

}

chrome.runtime.onMessage.addListener((msg, sender, callback) =>{
    callback(`Ad Soyad : :${getNameText()}\nAçıklama : ${getDesctiptionText()}\nAddress :${ getAddressText()}`);

});
 