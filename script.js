
function ButtonClick(val)
{
    console.log(val)
    document.getElementById("input").value=document.getElementById("input").value+val;
}

function ClearScreen()
{
    document.getElementById("input").value=" "
}
function result()
{
    var text=document.getElementById("input").value
    var result=eval(text)
    document.getElementById("input").value=result
}