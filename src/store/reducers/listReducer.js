const ADD_ITEM = 'ADD_ITEM'
const INC_ITEM = 'INC_ITEM'
const DEC_ITEM = 'DEC_ITEM'
const DEL_ITEM = 'DEL_ITEM'
const SEARCH_ITEM = 'SEARCH_ITEM'
const SORT_ITEM = 'SORT_ITEM'
const SHOW_ALL = 'SHOW_ALL'

const icons = [
    {other: '/icons/otherIcon.png'},
    {home: '/icons/homeIcon.png'},
    {food: '/icons/foodIcon.png'},
    {clothes: '/icons/clothesIcon.png'},
    {appliances: '/icons/gadjetsIcons.png'}
]

const defaultState = JSON.parse(localStorage.getItem('myWishList')) ?? []
const writeToLocalStorage = (list) => localStorage.setItem('myWishList', JSON.stringify(list))

export const addItemToListAction = payload => ({type: ADD_ITEM, payload})
export const incItemListAction = payload => ({type: INC_ITEM, payload})
export const decItemListAction = payload => ({type: DEC_ITEM, payload})
export const delItemfromListAction = payload => ({type: DEL_ITEM, payload})
export const searchItemInTheListAction = payload => ({type: SEARCH_ITEM, payload})
export const sortItemAction = payload => ({type: SORT_ITEM, payload})
export const showAllItemAction = () => ({type: SHOW_ALL})

export const listReducer = (state = defaultState, action) => {
    if (action.type === ADD_ITEM) {
        const itemIcon = icons.find(item => item[action.payload.category])[action.payload.category]
        const newList = [...state, {...action.payload, icon: itemIcon}]
        writeToLocalStorage(newList)
        return newList 
    }else if (action.type === INC_ITEM) {
        const target = state.find(({id}) => id === action.payload)
        target.count++
        writeToLocalStorage([...state])
        return [...state]
    }else if (action.type === DEC_ITEM) {
        const target = state.find(({id}) => id === action.payload)
        target.count--
        target.count = target.count <= 0 ? target.count = 0 : target.count 
        writeToLocalStorage([...state])
        return [...state]
    }else if (action.type === DEL_ITEM) {
        writeToLocalStorage(state.filter(({id}) => id !== action.payload))
        return state.filter(({id}) => id !== action.payload)
    }else if (action.type === SEARCH_ITEM) {
        return state.map(item => ({
            ...item,
            show: item.title.toLowerCase().startsWith(action.payload.toLowerCase()) 
        }))
    }else if (action.type === SORT_ITEM) {
        return state.map(item => ({...item, sorted: action.payload === item.category ? true : false}))
    }else if (action.type === SHOW_ALL) {
        return state.map(item => ({...item, sorted: true}))
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