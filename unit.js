function calUnit() {
    var unit = parseInt(document.getElementById("unit").value);
   
    var total = unit * 4;
    document.getElementById("id4").style.color = "black"
    document.getElementById("id4").style.fontSize = "18px"
    document.getElementById("btn1").style.display = "block"
    
    if (unit >= 1 && unit <= 200) {
        var tax_in_per = 0;
        var tax_in_rs = total * tax_in_per / 100;
        var f_amount = total + tax_in_rs;
        document.getElementById("id1").innerHTML = "***********BILL DETAILS***********"
        document.getElementById("id2").innerHTML = "Total unit is : " + unit
        document.getElementById("id3").innerHTML = "Total bill amount without tax is : " + total + " rs"
        document.getElementById("id4").innerHTML = "Tax in percentage is : " + tax_in_per + " %"
        document.getElementById("id5").innerHTML = "Tax in rs is : " + tax_in_rs + " rs"
        document.getElementById("id6").innerHTML = "Final payable bill amount is : " + f_amount + " rs"
        document.getElementById("id7").innerHTML = "==================================="

    }
    else if (unit > 200 && unit <= 300) {
        var tax_in_per = 2;
        var tax_in_rs = total * tax_in_per / 100;
        var f_amount = total + tax_in_rs;
        document.getElementById("id1").innerHTML = "***********BILL DETAILS************"
        document.getElementById("id2").innerHTML = "Total unit is : " + unit
        document.getElementById("id3").innerHTML = "Total bill amount without tax is : " + total + " rs"
        document.getElementById("id4").innerHTML = "Tax in percentage is : " + tax_in_per + " %"
        document.getElementById("id5").innerHTML = "Tax in rs is : " + tax_in_rs + " rs"
        document.getElementById("id6").innerHTML = "Final payable bill amount is : " + f_amount + " rs"
        document.getElementById("id7").innerHTML = "==================================="

    }
    else if (unit > 300 && unit <= 400) {
        var tax_in_per = 4;
        var tax_in_rs = total * tax_in_per / 100;
        var f_amount = total + tax_in_rs;
        document.getElementById("id1").innerHTML = "***********BILL DETAILS***********"
        document.getElementById("id2").innerHTML = "Total unit is : " + unit
        document.getElementById("id3").innerHTML = "Total bill amount without tax is : " + total + " rs"
        document.getElementById("id4").innerHTML = "Tax in percentage is : " + tax_in_per + " %"
        document.getElementById("id5").innerHTML = "Tax in rs is : " + tax_in_rs + " rs"
        document.getElementById("id6").innerHTML = "Final payable bill amount is : " + f_amount + " rs"
        document.getElementById("id7").innerHTML = "==================================="

    }
    else if (unit > 400 && unit <= 500) {
        var tax_in_per = 6;
        var tax_in_rs = total * tax_in_per / 100;
        var f_amount = total + tax_in_rs;
        document.getElementById("id1").innerHTML = "***********BILL DETAILS***********"
        document.getElementById("id2").innerHTML = "Total unit is : " + unit
        document.getElementById("id3").innerHTML = "Total bill amount without tax is : " + total + " rs"
        document.getElementById("id4").innerHTML = "Tax in percentage is : " + tax_in_per + " %"
        document.getElementById("id5").innerHTML = "Tax in rs is : " + tax_in_rs + " rs"
        document.getElementById("id6").innerHTML = "Final payable bill amount is : " + f_amount + " rs"
        document.getElementById("id7").innerHTML = "==================================="

    }
    else if (unit > 500) {
        var tax_in_per = 10;
        var tax_in_rs = total * tax_in_per / 100;
        var f_amount = total + tax_in_rs;
        document.getElementById("id1").innerHTML = "***********BILL DETAILS***********"
        document.getElementById("id2").innerHTML = "Total unit is : " + unit
        document.getElementById("id3").innerHTML = "Total bill amount without tax is : " + total + " rs"
        document.getElementById("id4").innerHTML = "Tax in percentage is : " + tax_in_per + " %"
        document.getElementById("id5").innerHTML = "Tax in rs is : " + tax_in_rs + " rs"
        document.getElementById("id6").innerHTML = "Final payable bill amount is : " + f_amount + " rs"
        document.getElementById("id7").innerHTML = "==================================="

    }
    else {
        document.getElementById("id1").innerHTML = "***********BILL DETAILS***********"
        document.getElementById("id2").innerHTML = ""
        document.getElementById("id3").innerHTML = ""
        document.getElementById("id4").innerHTML = "Invalid Unit NUmber : " + unit
        document.getElementById("id4").style.color = "red"
        document.getElementById("id4").style.fontSize = "20px"
        document.getElementById("id5").innerHTML = ""
        document.getElementById("id6").innerHTML = ""
        document.getElementById("id7").innerHTML = "==================================="
    }

}

function printBill() {
    document.getElementById("btn").style.display = "none"
    document.getElementById("btn1").style.display = "none"
    document.getElementById("unit").style.display = "none"
    print();

}