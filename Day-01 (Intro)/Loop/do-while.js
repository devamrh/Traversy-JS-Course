function showLoop() {
    let i = 0;
    let arr = ['Tazkir', 'Ibrahim', 'Amir', 'Sakib', 'Mehedi'];
    let result = '';

    do {
        result += (i+1) + '.' + "Name: " + arr[i] + "<br>";
        i++;
    } while (i < arr.length);

    const resultDiv = document.getElementById('TopicAppend');
    resultDiv.innerHTML = result;
}


function resetContent(){
    const resultDiv = document.getElementById('TopicAppend');
    resultDiv.innerText='';
}