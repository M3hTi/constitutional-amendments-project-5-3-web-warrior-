import { Headings,description } from "./data.js";



const createDocument = function () {
    const sourceDoc = document.querySelector('#source_doc')
    const toc = document.querySelector('#toc')
    const heading = "H2"
    let headingCount = 1

    Headings.forEach((Heading,index) => {
        const h2 = document.createElement('h2')
        h2.textContent = Heading
        sourceDoc.appendChild(h2)

        const p = document.createElement('p')
        p.textContent = description[index]
        sourceDoc.appendChild(p)
    });


    for (let i = sourceDoc.firstElementChild;  i != null ; i = i.nextElementSibling) {
        if(i.nodeName === heading) {
            const anchor = document.createElement('a')
            anchor.name = 'doclink' + headingCount
            i.insertBefore(anchor, i.firstElementChildChild)

            const listItem = document.createElement('li')
            const link = document.createElement('a')
            link.textContent = i.textContent
            link.href = "#doclink" + headingCount
            


            listItem.appendChild(link)

            

            toc.appendChild(listItem)


            headingCount++
        } 
     }
    
}












window.addEventListener('load', createDocument)