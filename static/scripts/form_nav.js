function page1Focus() {
   document.getElementById("form_page_1").style.display="block";
   document.getElementById("form_page_2").style.display="none";
   document.getElementById("form_page_3").style.display="none";
}
function page2Focus() {
   document.getElementById("form_page_1").style.display="none";
   document.getElementById("form_page_2").style.display="block";
   document.getElementById("form_page_3").style.display="none";
}
function page3Focus() {
   document.getElementById("form_page_1").style.display="none";
   document.getElementById("form_page_2").style.display="none";
   document.getElementById("form_page_3").style.display="block";
}

function nextPageFocus(cur_page) {
	var pages = ["form_page_1", "form_page_2", "form_page_3"];
	for (idx = 0; idx < pages.length; idx++){
		if (pages[idx] == (cur_page)){
		document.getElementById(pages[idx]).style.display="block";
	}
	else{
   	    document.getElementById(pages[idx]).style.display="none";
   	}
  	}


}