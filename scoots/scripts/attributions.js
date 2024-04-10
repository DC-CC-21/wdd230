let attributionEl = document.getElementById("imageAttributions")
let attributionData = {}
fetch('./data/data.json').then(res => res.json()).then(jsObj => {
    Object.keys(jsObj).forEach(key => {
        attributionData[`${key} hero image`] = {
            source: jsObj[key].source,
            originalUrl: jsObj[key].url,
            relativePath: jsObj[key].image
        }
        jsObj[key].data.forEach(value => {
            attributionData[`${value.type} image`] = {
                source: value.source,
                originalUrl: value.url,
                relativePath: value.image
            }
        })
    })
    showAttributionData()
})

function showAttributionData(){
    Object.keys(attributionData).forEach(key => {
        let value = attributionData[key]

        let div = document.createElement("div")
        let h4 = document.createElement("h4")
        let source = document.createElement("p")

        let urlP = document.createElement("p")
        let url = document.createElement("a")
        let relativePath = document.createElement("p")
        let img = document.createElement("img")


        h4.innerHTML = `Image use: ${key}`
        
        source.innerHTML = `Sourced from: ${value.source}`

        relativePath.innerHTML = `Relative Path: ${value.relativePath}`
        
        urlP.innerHTML = "Original Url:"
        urlP.append(url)
        url.innerHTML = value.originalUrl;
        url.href = value.originalUrl
        url.setAttribute("target", "_blank")
        
        img.src = value.relativePath
        img.setAttribute('alt', key)
        img.setAttribute("width", 100)
        img.setAttribute("height", 100)
        
        div.append(h4, source, relativePath, urlP, img)
        attributionEl.append(div)
    })
}