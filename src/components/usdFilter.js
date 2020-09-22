function usdFilter(int) {
    let arr = int.toString().split("");
    arr.splice(arr.length - 3, 0, ",");
    if (arr.length > 7) {
        arr.splice(arr.length - 7, 0, ",");
        if (arr.length > 11) {
            arr.splice(arr.length - 11, 0, ",");
        }
    }
    return "$" + arr.join("");
}

export default usdFilter;
