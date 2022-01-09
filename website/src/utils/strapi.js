import { neutralizeString } from './string';
import { compact } from 'lodash';

export const mapStrapiIdToId = document => ({
  id: document.strapiId,
  ...document,
});

export const generateSlug = (id, name) => `${id}-${neutralizeString(name)}`;

export const generateStaticPages = async ({
  modules: { graphql, actions, path },
  collectionField,
  nameField,
  routePath,
  componentPath,
}) => {
  const { createPage } = actions;

  const query = `
    query {
      ${collectionField} {
        nodes {
          strapiId
          ${nameField}
        }
      }
    }
  `;

  return graphql(query).then(response => {
    response.data[collectionField].nodes.map(document =>
      createPage({
        path: `${routePath}/${generateSlug(
          document.strapiId,
          document[nameField]
        )}`,
        component: path.resolve(componentPath),
        context: { id: document.strapiId },
      })
    );
  });
};

export const mapDegreesToYears = degrees => {
  const years = degrees.map(degree => degree.year);
  return compact([...new Set(years)]);
};
