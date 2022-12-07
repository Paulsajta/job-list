import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    allJobs: [],
    skillsForFilter: [],
    allJobsSorted: [],
}

const jobs_slice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        printAllJobs (state, action) {
            state.allJobs.push(...action.payload)
        },

        sortedJobs (state) {
            state.allJobsSorted = state.allJobs.filter(job => {
                const skills = [].concat(job.role, job.level, ...job.languages, ...job.tools);
                return state.skillsForFilter.every(elem => skills.includes(elem))
            })
        },

        addSkillFilter (state, action) {
            if (state.skillsForFilter.indexOf(action.payload) === -1) {
                state.skillsForFilter.push(action.payload)
            }
        },
        deleteSkillFilter(state,action) {
           state.skillsForFilter = state.skillsForFilter.filter(elem =>
               elem !== action.payload
           )
        },
        clearSkillFilter(state) {
            state.skillsForFilter = []
        }
    }
})

export const {printAllJobs, addSkillFilter, sortedJobs, deleteSkillFilter, clearSkillFilter} = jobs_slice.actions

export default jobs_slice.reducer

