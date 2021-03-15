function ham1()
{
    var dulieunhap1 = +document.getElementById('input1').value;

    switch(dulieunhap1) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("result1").innerHTML = "Tháng " + dulieunhap1 + " có 31 ngày ";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("result1").innerHTML="Tháng "+ dulieunhap1+ " có 30 ngày ";
            break;
        case 2:
            document.getElementById("result1").innerHTML="Tháng" + dulieunhap1 +" có 28 hoặc 29 ngày";
            break;
    }
}
function ham2()
{
    var dulieunhap2 = +document.getElementById('input2').value;
    switch (dulieunhap2) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("result2").innerHTML = "tháng " + dulieunhap2 + " có 31 ngày ";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("result2").innerHTML="tháng "+ dulieunhap2+ " có 30 ngày ";
            break;
        case 2:
            document.getElementById("result2").innerHTML="Tháng " + dulieunhap2+ " có 28 hoặc 29 ngày";
            break;
    }
}