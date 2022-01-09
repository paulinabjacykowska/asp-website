import { axios } from './utils/axios';

export const fetchDegrees = ({
  yearId,
  departmentId,
  fieldOfStudyId,
  bestDegree,
}) =>
  axios
    .get('/degrees', {
      params: {
        ...(yearId && { year: yearId }),
        ...(departmentId && { 'field_of_study.department': departmentId }),
        ...(fieldOfStudyId && { field_of_study: fieldOfStudyId }),
        ...(bestDegree && { best_degree: bestDegree }),
      },
    })
    .then(res => res.data);
