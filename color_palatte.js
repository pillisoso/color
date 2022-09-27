
// -----------   function to display project mode colors    ------------

function projectMode(){
    let list = document.getElementById("color_showcase"); // first unordered list

    var mydata = data; // Get the stored colors

    
    for(var i = 0; i < mydata.length; i++) {
        // creating nested unordered list with heading
        let ul = document.createElement("ul");
        ul.innerHTML ='<ul id="'+mydata[i].Project_name+'"><h1>'+mydata[i].Project_name +'</h1></ul>';
        list.appendChild(ul);


        let list2 = document.getElementById(mydata[i].Project_name);    // Selecting new ul

        // accessing the colors
        mydata[i].used_colors.forEach((item)=>{
            let li = document.createElement("li");  // creating new list element
            li.innerHTML = '<div class="color_box" style = "background: ' + item.color + '";><span class = "name_span">' + item.name + '</span></div>';
            list2.appendChild(li);  // appending new list element to ul
        })

    }
    
    checkColr()
}




// ----------   function to display color bank   ---------------
function colorBank(){
    
    var mydata = data;  // Get the stored colors
    
    // Hide the previous project mode colors
    for(var j = 0; j < mydata.length; j++) {
        if(document.getElementById(mydata[j].Project_name)){
           var old_ul = document.getElementById(mydata[j].Project_name);
            old_ul.style.display = "none";         
        }
    }
    
    
    let list3 = document.getElementById("color_showcase");


    // accessing the colors
    for(var i = 0; i < mydata.length; i++) {
        mydata[i].used_colors.forEach((item)=>{
            let li = document.createElement("li");
            li.innerHTML = '<div class="color_box" style = "background: ' + item.color + '";><span class = "name_span">' + item.name + '</span></div>';
            list3.appendChild(li);
        })
    }
    
    checkColr()
}






// ------------ EnetListeners for buttons ------------
//var project_button = document.getElementById("prj_btn")
//project_button.addEventListener("click", projectMode)
//
//var colrBank_button = document.getElementById("color_btn")
//colrBank_button.addEventListener("click", colorBank)
projectMode()





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
