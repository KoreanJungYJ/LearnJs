//예외 처리를 할 때 사용자는 객체를 명시할 수 있다.
//catch문 안에서 객체의 특성들을 참조할 수 있고 throw문에서 사용한다.
/* 1번 */
function UserException(CallMessage) {
    this.CallMessage = CallMessage;
    this.name = "UserException";
}
UserException.prototype.toString = function () {
    return this.name + ': "' + this.CallMessage + '"';
}
throw new UserException("The Exception is occured.");
/* 2번 */
function getMonth(month) {
    month = month - 1;
    var months = ["Je", "F", "Mar", "Ap", "May", "Ju", "Jul", "Au", "S", "N", "O", "D"];
    if (months[month] != null) {
        return months[month];
    }
    else {
        throw "InvalidMonthNumber";
    }
}
try {
    monthName = getMonth(myMonth);
}
catch (e) {
    monthName = "Unknown Value";
    logMyErrors(e);
}