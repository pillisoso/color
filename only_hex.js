// ----------   function to display color bank   ---------------
function colorBank(){
    
    var mydata = data;  // Get the stored colors
        
    let list3 = document.getElementById("color_showcase");


    // accessing the colors
    for(var i = 0; i < mydata.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = '<div class="color_box" style = "background: ' + mydata[i].hex + '";><span>' + mydata[i].name + '</span></div>';
            list3.appendChild(li);
    }
    
    checkColr()
}




//var colrBank_button = document.getElementById("color_btn")
//colrBank_button.addEventListener("click", colorBank)
colorBank()


//------- RGB to HEXAdecimal color -----------
function rgbToHex(col)
{
    if(col.charAt(0)=='r')
    {
        col=col.replace('rgb(','').replace(')','').split(',');
        var r=parseInt(col[0], 10).toString(16);
        var g=parseInt(col[1], 10).toString(16);
        var b=parseInt(col[2], 10).toString(16);
        r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
        var colHex='#'+r+g+b;
        return colHex;
    }
}

//var col=document.getElementById('myDiv').style.backgroundColor;
//alert(rgbToHex(col)); // alerts hex value


function checkColr(){
    var sqrs = document.querySelectorAll(".color_box");    /*All 6 square divs*/
    //-------------------------This loop copies the clicked colors ---------------------------
        for(var i = 0; i < sqrs.length; i++) {
            /*add click  addEventListener*/
            sqrs[i].addEventListener("click", function(){
                var clkdColr = this.style.backgroundColor;      /*grab color from clicked color*/
                hex_color = rgbToHex(clkdColr)
                console.log("RGB Color code : " + clkdColr + ".   HEXADECIMAL color code : " + hex_color);
                navigator.clipboard.writeText(hex_color);
            });
        }
}
