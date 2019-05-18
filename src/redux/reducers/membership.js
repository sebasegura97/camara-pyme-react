
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

const initialState = {
    step: 1,
    members: [],
    search: [],
    admin: false
}

const membership = (state = initialState , action) => {
    switch (action.type) {
        case 'ADD_FORM_DATA':
            // var nextStep = state.step++
            return {
                // step: nextStep,
                ...state,
                ...action.data
            }

        case 'ADD_MEMBER':
            return {
                ...state,   
                members: state.members.concat(action.data).unique()
            }
        case 'SEARCH_MEMBER':
            var search = state.members.filter(
                (member) => {
                    return member.cuit.toString().includes(action.payload.cuit)
                }
            )
            return {
                ...state,   
                search
            }
        case 'FRONTEND_LOGIN': 
            return {
                ...state,
                admin: true,
            }    
        default:
            return state
    }
}


export default membership