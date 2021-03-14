class UtilityObj{
    stripHtml(html)
    {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }
    getJSON(url){
        alert("call getJSON");
        fetch(url)
        .then(res => res.json())
        .then((out) => {
                        console.log('Checkout this JSON! ', out);
                        return out;
        })
        .catch(err => { throw err });
    }
}


export default UtilityObj;