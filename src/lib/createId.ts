let id =  parseInt(localStorage.getItem('idMax') || '0')
const createId = () => {
    id += 1;
    localStorage.setItem('idMax',id.toString())
    return id;
};

export {createId};