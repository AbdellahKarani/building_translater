// Start Translation Using Google API
function translate() {
    var sourceText = document.querySelector('textarea#sourceText').value;
    var sourceLang = 'en';
    var targetLang = 'ar';
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" 
    + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
    fetch(url)
        .then(response => response.json())
        .then(data => {
        document.querySelector('textarea#resultText').value = data[0][0][0];
        })
        .catch(error => console.error('Error:', error));
}
document.getElementById('button').addEventListener('click', function() {
    var sourceText = document.getElementById('sourceText');
    sourceText.value = sourceText.value.split("").filter(function(ele) {
        return /^[a-zA-Z0-9 ]$/.test(ele); // Allow alphabets, numbers, and space
    }).join("");
    console.log(sourceText.value);
    translate();
});




