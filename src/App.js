import { FilterPanel } from 'components/FilterPanel';
import { JobList } from 'components/JobList';
import { TheHeader } from 'components/TheHeader';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sortedJobs} from "./store/jobs_slice";


function App() {


    const skillsForFilter = useSelector(state => state.jobs.skillsForFilter)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(sortedJobs())
    }, [skillsForFilter])

  return (
    <>
     <TheHeader />
     <div className='container'>
      <FilterPanel />
      <JobList />
     </div>
    </>
  );
}

export default App;
