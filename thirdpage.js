const makeThirdPage = (elem , text) => {
    elem.innerHTML = `<a href="./badexample.html">${text}</a>`;
    console.log(`${text}`);
}

export {makeThirdPage};