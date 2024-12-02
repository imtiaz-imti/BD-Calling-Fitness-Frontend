import {configureStore} from '@reduxjs/toolkit'
import { userDetailsReducer,requestTrainerListReducer,requestAdminListReducer,allTrainerListReducer,bookTrainerListReducer,availableTrainerListReducer} from './ProductReducer'
const store = configureStore({
    reducer:{
        userDetails:userDetailsReducer,
        requestTrainer:requestTrainerListReducer,
        availableTrainer:availableTrainerListReducer,
        bookTrainer:bookTrainerListReducer,
        allTrainer:allTrainerListReducer,
        requestAdmin:requestAdminListReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
})
export default store