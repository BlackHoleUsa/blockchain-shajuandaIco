export const convertDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
}

export const comaSeparateNames = (arr) => {
    return arr.length ? arr.map((name, i) => { 
            return name + (i < arr?.length - 1 ? ' ,' : '') 
        })
        : [];
};

export const goToSection = (id, start) => {
    document.getElementById(id)
    .scrollIntoView({ behavior: "smooth", block: start ? "start" : "end", inline: start ? "start" : "end" });
}

export const validateEmail = (value) => {
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    return pattern.test(value);
};