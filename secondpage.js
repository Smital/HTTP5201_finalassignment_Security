const makeSecondPage = (elem , text) => {
    elem.innerHTML = `<a href="./security.html">${text}</a>`;
    console.log(`${text}`);
}

export {makeSecondPage};