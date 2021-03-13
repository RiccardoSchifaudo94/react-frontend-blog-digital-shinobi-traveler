class UtilityObj{
    stripHtml(html)
    {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }
}


export default UtilityObj;