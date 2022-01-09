import { useAsync } from 'react-async-hook';
import { fetchDegrees } from '../api';

const useAsyncDegrees = ({
  yearId,
  departmentId,
  fieldOfStudyId,
  bestDegree,
}) => {
  return useAsync(
    (yearId, departmentId, fieldOfStudyId, bestDegree) =>
      fetchDegrees({
        yearId,
        departmentId: fieldOfStudyId ? null : departmentId,
        fieldOfStudyId,
        bestDegree,
      }),
    [yearId, departmentId, fieldOfStudyId, bestDegree]
  );
};

export default useAsyncDegrees;
