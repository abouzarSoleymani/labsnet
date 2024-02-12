import api from "@/api";

export const getNewsList = async (): Promise<any> => {
    return api.get<any>(`api/panel/type-category/category`);
}
