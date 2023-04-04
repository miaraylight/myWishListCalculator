const ADD_ITEM = 'ADD_ITEM'
const INC_ITEM = 'INC_ITEM'
const DEC_ITEM = 'DEC_ITEM'
const DEL_ITEM = 'DEL_ITEM'

const defaultState = [
    {
        id: Date.now() + Math.random()*1000,
        title: "Nokia",
        category: "Gadjets",
        price: 155,
        discount: 3,
        count: 1
    },
    {
        id: Date.now() + Math.random()*1000,
        title: "Morkovka",
        category: "Food",
        price: 15,
        discount: 2,
        count: 1
    }
]

export const addItemToListAction = payload => ({type: ADD_ITEM, payload})
export const incItemListAction = payload => ({type: INC_ITEM, payload})
export const decItemListAction = payload => ({type: DEC_ITEM, payload})
export const delItemfromListAction = payload => ({type: DEL_ITEM, payload})

export const listReducer = (state = defaultState, action) => {
    if (action.type === ADD_ITEM) {
        console.log([...state, {...action.payload}]);
        return [...state, {...action.payload}] 
    }else if (action.type === INC_ITEM) {
        const target = state.find(({id}) => id === action.payload)
        target.count++
        return [...state]
    }else if (action.type === DEC_ITEM) {
        const target = state.find(({id}) => id === action.payload)
        target.count--
        target.count = target.count <= 0 ? target.count = 0 : target.count 
        return [...state]
    }
    else if (action.type === DEL_ITEM) {
        const target = state.find(({id}) => id === action.payload)
        return state.filter(({id}) => id !== action.payload)
    }
    return state
}

// fetch(value)
//     .then(res => res.json())
//     .then(data => [{},{},{}])

//     <a href="http://server.com/download?" + itag>
//     {
//         'itag'
//             'res'
//             'mime_type'
//             'fps'
//             'bitrate'
//             'acodec'
//             'vcodec'
//             'progressive'
//             'file_size'
//             'title'
//             'type'
//     }