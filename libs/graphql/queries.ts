export const getAnimeShortInfoQuery = `
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (id: $id, type: ANIME, sort: SCORE_DESC, search: $search) {
        id
        title {
          romaji
        }
        coverImage{
            extraLarge
        }
        genres
        averageScore
        popularity
        description
      }
    }
  }
`;
export const getAnimeById = (id: number) => {
    return `
query  {
    Media (id: ${id}, type: ANIME) {
        id
        title {
          romaji
        }
        coverImage{
          extraLarge
        }
    bannerImage
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    startDate {
        year
        month
        day
    }
    trailer{
      site
      thumbnail
      
    }
    status
        genres
        averageScore
        popularity
        description
    }
  }
`;
};
