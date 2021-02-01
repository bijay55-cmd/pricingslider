
const slider = document.getElementById("myRange");  
const text1 = document.getElementsByClassName("text1");
const text2 = document.getElementsByClassName("text2");
const year = document.getElementById("year");
const month = document.getElementById("month");
const views = document.getElementById("pageviews");
const price = [8,12,16,24,36];
const discount = [72,108,144,216,324];
const pageView = ["10k","50k","100k","500k","1M"];



slider.oninput = function() {
year.innerHTML = price[this.value] + ' / month';
month.innerHTML = discount[this.value] + ' / yearly';
views.innerHTML = pageView[this.value];
}

//toggle switch
function check()
{
    const checkbox = document.getElementById("checkbox");
 
    for (let i = 0; i < text1.length; i++)
    {
        if (checkbox.checked == true)
        {
            text1[i].style.display = "block";
            text2[i].style.display = "none";
        }
        else if (checkbox.checked == false)
        {
            text1[i].style.display = "none";
            text2[i].style.display = "block";
        }
    }

}   
//Pricing change check
check(); 
