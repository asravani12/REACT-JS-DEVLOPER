const intialstate={items:[] filteredItems:[],size:''};
export dafault function (State=initialState,action){
    Switch(action,type){
        case FECTH products;
        return{...State,items:action.playload,filtereditems:action.palyload};
        case FILTER-PRODUCTS-BY-SIZE:
            return{...State,filteredItems:action.playload.item;size:action.palyload.size}
    }
}