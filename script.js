const available_keywords = [
    'kalank',
    'kedarnath',
    'fighter',
    'dhadak',
    'dil bechara',
    'dunki'
]
const input = document.getElementById("input");
const resultBox = document.querySelector('.resultBox');


input.onkeyup = function () {
    let result = [];
    let inputValue = input.value;
    if (inputValue.length) {
      result = available_keywords.filter((keyword => {
            return keyword.toLowerCase().includes(inputValue)
        }))
    }
    display(result);
}

function display(result) {
    
    const content = result.map((item => {
        return "<li onclick = selectItem(this)>" + item + "</li>";
    })).join("")
    
    resultBox.innerHTML = "<ul>" + content + "</ul>"
    console.log(typeof(content))
}
 
function selectItem(list) {
    input.value = list.innerHTML;
}
