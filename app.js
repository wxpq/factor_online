var row_start = 3;
var total_price = 0;
var tax = 0;
var discount = 0;



// add factor row 
document.getElementById("factor-add-row").onclick = ()=>{
    let rowhtml = `<tr>
                    <td>${row_start}</td>
                    <td contenteditable="true"></td>
                    <td contenteditable="true" onkeyup="calculate_expense(event)"></td>
                    <td contenteditable="true" onkeyup="calculate_expense(event)"></td>
                    <td contenteditable="true"></td>
                    <td contenteditable="true"></td>
                    </tr>`;
    row_start++;
    document.querySelector("#factor-table>table>tbody").innerHTML += rowhtml;
}






function calculate_expense(event)
{
    if(event.target.parentNode.cells[2].textContent != '' && event.target.parentNode.cells[3].textContent != ''){
        event.target.parentNode.cells[4].textContent = parseInt(event.target.parentNode.cells[2].textContent)*parseInt(event.target.parentNode.cells[3].textContent);
        var list = document.querySelector("#factor-table>table>tbody").getElementsByTagName("tr");
        for (var i = 1; i < list.length; i++) {
            if(list[i].cells[4].textContent != '')
            {
                total_price += parseInt(list[i].cells[4].textContent); 
            }
        }
        tax = total_price * 0.06;
        document.getElementById("factor-tax").innerText = tax + " تومان";
        document.getElementById("factor-total").innerText = total_price + " تومان";
        document.getElementById("factor-final-price").innerText = total_price+tax + " تومان";
        document.getElementById("factor-final-price-in-words").innerText = Num2persian(total_price+tax) + " تومان";
    }
}





function calculate_discount()
{
    discount = parseInt(document.getElementById("factor-discount").textContent);
    let finalprice = total_price+tax-discount;
    document.getElementById("factor-final-price").innerText = finalprice + " تومان";
    document.getElementById("factor-final-price-in-words").innerText = Num2persian(finalprice) + " تومان";
}

function ready_dom()
{
    
}

function create_img(){
    var container = document.body;
    html2canvas(container).then(function(canvas) {
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "html_image.png";
        link.href = canvas.toDataURL("image/png");
        link.target = '_blank';
        link.click();
    });
}