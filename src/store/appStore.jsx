import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './placeSlice';
import itinaryReducer from './itinarySlice';
import userReducer from './userSlice';
import dialogReducer from './dialogSlice';

const AppStore = configureStore ({
    reducer: {
        user: userReducer,
        dialog: dialogReducer,
        places: placesReducer,
        itinaryDetails: itinaryReducer,
    }
})

export default AppStore;