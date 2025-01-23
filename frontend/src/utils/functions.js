




export const convertHTML = (tagName, content) => {
    const fragment = document.getElementById('fragments');
    const newElement = document.createElement(tagName);
    newElement.textContent = content

    fragment.appendChild(newElement)
    return newElement;
} 


export const getTitle = async (title, setTitle) => {
    let recievedData;
    await fetch(`http://127.0.0.1:8000/api/title/`)
        .then(res => res.json())
        .then(data => {
            recievedData = data
            setTitle(data)
        })

    return recievedData;
}

export const getSubtitle = async (subTitle, setSubtitle) => {
    let recievedData;
    await fetch(`http://127.0.0.1:8000/api/subtitle/`)
        .then(res => res.json())
        .then(data => {
            recievedData = data
            setSubtitle(data)
        })

    return recievedData;
}
export const getFragment = async (fragment, setFragment) => {
    let recievedData;
    await fetch(`http://127.0.0.1:8000/api/fragment/`)
        .then(res => res.json())
        .then(data => {
            recievedData = data
            setFragment(data)
        })

    return recievedData;
}



