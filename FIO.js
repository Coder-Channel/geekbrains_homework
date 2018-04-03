module.exports = function (Creator, OnClickFunction) {
    let FIOText = document.createElement("p");
    FIOText.innerHTML = (Creator.SecondName + " " + Creator.Name + " " + Creator.Patronymic);
    FIOText.onclick = OnClickFunction;
    document.body.appendChild(FIOText);
}