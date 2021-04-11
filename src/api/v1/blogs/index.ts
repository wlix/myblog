import { BlogListResponse } from "../../../types/blog";
import { GetListContentsQuery } from "../../../types/api";

export type Methods = {
  get: {
    query?: GetListContentsQuery;
    resBody: BlogListResponse;
  };
};
