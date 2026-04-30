
const inputBtn = document.getElementById("input-btn")
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const dltBtn=document.getElementById("dlt-btn")
const tabBtn=document.getElementById("tab-btn")
let myLeads=[]

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))


if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}


function render(leads){
    let listItems=""
    for(let i=0;i<leads.length;i++){
        listItems+=`
        <li>
                <a href='${leads[i]}' target='_blank'>
                                    ${leads[i]}
                </a>
        </li>`
    }
    //listItems+="<li><a href=' " +myLeads[i] +" ' target='_blank'>" + myLeads[i] + "</a></li>"
    ulEl.innerHTML=listItems
    

}

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
})
dltBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})
inputBtn.addEventListener("click",function(){
    let val=inputEl.value
    if(val!='')myLeads.push(val)
    inputEl.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
   
}
)

