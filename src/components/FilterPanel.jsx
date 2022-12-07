import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import {useDispatch, useSelector} from "react-redux";
import {deleteSkillFilter, clearSkillFilter} from "../store/jobs_slice";


const FilterPanel = () => {


    const dispatch = useDispatch()
    const filters = useSelector(state => state.jobs.skillsForFilter)

    if (filters.length === 0) {
        return null
    }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
            {filters.map(item => <Badge
                key={item}
                variant="clearable"
                onClear={() => dispatch(deleteSkillFilter(item))}
            > {item} </Badge>)}
        </Stack>

        <button className='link' onClick={() => dispatch(clearSkillFilter())}>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};