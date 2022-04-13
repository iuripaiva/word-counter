var text = "";

function count() {

    // Access and change binary variable
    text = String(document.getElementById("text").value);

    // Delete any empty spaces in the text and converts it to array
    var textArray = text.trim().split(" ");
    
    // Count words based in the length of the array after deleting the empty spaces
    var countWords = textArray.length;

    // If the array don't have any item, zero words will be counted.
    if (textArray == 0){
        document.getElementById("result").innerHTML = "0";
    }else{
        document.getElementById("result").innerHTML = (countWords);
    }
}