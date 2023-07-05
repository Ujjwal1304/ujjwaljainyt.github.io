/*sbse phle hum ek js ka code likhre h hmare menu icon ko collapse krne ke lia mtlb jb bhi user tap kre to vo bnd ho jae yae ya khul jae  */

var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");

//for container also 

var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}