import { gql } from '@apollo/client';
import configs from '~/configs';
import client from './apollo-client';

export async function getDiscussions() {
  try {
    // eslint-disable-next-line no-undef
    const rs = await client.query<RepositoryQueryResponseDto, {}>({
      query: gql`
        {
          repository(name: "${configs.GH_REPO_NAME}", owner: "${configs.GH_REPO_OWNER}") {
            discussions(first: 100, orderBy: { field: CREATED_AT, direction: DESC }) {
              pageInfo {
                hasNextPage
                hasPreviousPage
                endCursor
                startCursor
              }
              totalCount
              nodes {
                title
                url
                number
                bodyHTML
                bodyText
                createdAt
                lastEditedAt
                author {
                  login
                  url
                  avatarUrl
                }
                publishedAt
                id
                databaseId
                createdViaEmail
                labels(first: 10) { nodes { id } }
              }
            }
          }
        }
      `,
    });

    // console.log('rs:::', rs);
    console.log('rs:::error', rs?.error);
    console.log('rs:::errors', rs?.errors);
    console.log('rs:::data', rs?.data);
    console.log('rs:::data', rs?.data.repository.discussions);
  } catch (error) {
    console.log('rs:::error', error);
  }
}
