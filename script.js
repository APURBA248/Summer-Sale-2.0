    let total = 0;

function handler(target) {
    const selectedItem = document.getElementById("title-item")
    const titleName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = titleName;
    selectedItem.appendChild(li);

    const price =  target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);
    console.log(total);
    document.getElementById("total").innerText = total;
 } 
 