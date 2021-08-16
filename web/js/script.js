function show DOM() {
   console.log(document.body); 
}

// body's yra elemtas. kikvienas elementas yra nodas, vadinasi boduy nodás

function printTags(el) {
    if (el) {}
        if (el instanceof Element) {
            console.log(" ".repeat(indent) + el.tagName);
            for (const child of elchildNodes) {
                printTags(child, ident + 4);
            }
        } else {
            console.log(" ".repeat(indent) + "'" el.tagName)
        }
}