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
   
}

export default UtilityObj;