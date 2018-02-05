export var remove = () => {
    var data = document.getElementById("get").value;
    var ul = document.getElementById("dynamic");
    var item = document.getElementById(data.toLowerCase());
    if (item == undefined) {
        alert("Entered value must match with the list items!");
        document.getElementById("get").value = "";
        return false;
    }
    ul.removeChild(item);
    document.getElementById("get").value = "";
    alert(`${data} has been removed successfully!`);
}
