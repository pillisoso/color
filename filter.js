list = document.getElementsByTagName("td") ;
color_dic = ""
for(var i = 0; i< list.length; i += 4) {
    color_dic+="{'name':'"+list[i+1].innerHTML+"', 'hex':'"+list[i+2].innerHTML+"'},\n";
};


document.write(color_dic)