const makeHeadlines = (elem , text) => {
    elem.innerHTML = `<h1>${text}</h1>`;
    console.log(`${text}`);
}

export {makeHeadlines};

