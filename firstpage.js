const makeFirstPage = (elem , text) => {
    elem.innerHTML = `<a href="./quality.html">${text}</a>`;
    console.log(`${text}`);
}
export {makeFirstPage};