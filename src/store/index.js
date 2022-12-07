import {configureStore} from '@reduxjs/toolkit'
import jobs_slice from "./jobs_slice";

export const store = configureStore({
    reducer: {
        jobs: jobs_slice
    }
})
