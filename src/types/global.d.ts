export {};

declare global {
  type PageInfoDto = {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    endCursor: string;
    startCursor: string;
  };

  type AuthorDto = {
    login: string;
    url: string;
    avatarUrl: string;
  };

  type Discussion = {
    title: string;
    url: string;
    number: number;
    bodyHTML: string;
    bodyText: string;
    createdAt: string;
    lastEditedAt: string | null;
    author: AuthorDto;
    publishedAt: string;
    id: string;
    databaseId: number;
    createdViaEmail: boolean;
    labels: null;
  };

  type DiscussionConnectionDto<T> = {
    pageInfo: PageInfoDto;
    totalCount: number;
    nodes: T[];
  };

  type RepositoryQueryResponseDto = {
    repository: {
      discussions?: DiscussionConnectionDto<Discussion>;
    };
  };

  type RepositoryQueryErrorResponseDto = {
    errors: {
      type: string;
      path: string[];
      locations: { line: number; column: number }[];
      message: string;
    }[];
  };
}
