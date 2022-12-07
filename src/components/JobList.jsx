import data from '../mock/data.json';
import { JobPosition } from './JobPosition';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {addSkillFilter, printAllJobs} from "../store/jobs_slice";





const JobList = () => {

  const {allJobsSorted} = useSelector(state => state.jobs)
  console.log(allJobsSorted)
  const dispatch = useDispatch()

  const handlerAddFilter = (filter) => {
    dispatch(addSkillFilter(filter))
  }

  useEffect(() => {
    dispatch(printAllJobs(data))
  }, [])

  return (
    <div className='job-list'>
      {allJobsSorted.map(item => (
        <JobPosition key={item.id} {...item} handlerAddFilter={handlerAddFilter}/>
      ))}
    </div>
  )
}

export {JobList};