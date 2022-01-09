import { ROUTES } from './src/constants';
import { generateStaticPages } from './src/utils/strapi';
import * as path from 'path';

export const createPages = async ({ actions, graphql }) => {
  const departments = generateStaticPages({
    modules: { graphql, actions, path },
    collectionField: 'allStrapiDepartment',
    nameField: 'name',
    routePath: ROUTES.departments,
    componentPath: './src/components/Department/Department.js',
  });
  const diplomaDetails = generateStaticPages({
    modules: { graphql, actions, path },
    collectionField: 'allStrapiDegree',
    nameField: 'title',
    routePath: ROUTES.diplomas,
    componentPath: './src/components/DiplomaDetails/DiplomaDetails.js',
  });
  return Promise.all([departments, diplomaDetails]);
};
