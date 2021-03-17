class UtilityObj{
    stripHtml(html)
    {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }
    detectLang(){
        var lang = navigator.language || navigator.userLanguage;
        return lang;
    }
    scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    formatDate(wp_date, lang){
        let array_datetime = wp_date.split('T');
        let array_date = array_datetime[0].split('-');
        let array_months;
        
        if(lang!=='it') 
            array_months = ["","January","February","March","April","May","June","July","August","Septmber","October","November","December"]
        else 
            array_months = ["","Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"]

        return array_date[2]+"  "+array_months[Number(array_date[1])]+"  "+array_date[0];
    }
}

export default UtilityObj;