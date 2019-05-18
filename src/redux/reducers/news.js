
Array.prototype.unique = function () {
    var a = this.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i].id === a[j].id)
                a.splice(j--, 1);
        }
    }

    return a;
};
const news = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NEW':
            return state.concat(action.data).unique()
        case 'DELETE_NEW': 
            return state.filter((item) => item.id !== action.id)
        default:
            return state
    }
}


export default news