const ADD_ITEM = 'ADD_ITEM'
const INC_ITEM = 'INC_ITEM'
const DEC_ITEM = 'DEC_ITEM'
const DEL_ITEM = 'DEL_ITEM'
const SEARCH_ITEM = 'SEARCH_ITEM'
const RESET_SEARCH = 'RESET_SEARCH'

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
export const searchItemInTheListAction = payload => ({type: SEARCH_ITEM, payload})
export const resetSearchAction = () => ({type: RESET_SEARCH})

export const listReducer = (state = [], action) => {
    if (action.type === ADD_ITEM) {
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
    }else if (action.type === DEL_ITEM) {
        return state.filter(({id}) => id !== action.payload)
    }else if (action.type === SEARCH_ITEM) {
        return state.map(item => ({
            ...item,
            show: item.title.toLowerCase().startsWith(action.payload.toLowerCase()) 
        }))
    }else if (action.type === RESET_SEARCH) {
        return state.map(item => ({
            ...item,
            show: true
        }))
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