import { useEffect, useState } from "react";
import { BASE_API_URL } from "../../utils/constants";
import { getClientData, getSpaces } from "../../utils/Home";

export const useGetClientData = ({ params, path}: any) => {
  const [data, setData] = useState<any>({});

  const url = `${BASE_API_URL}/${path}`;

  const getData = async (db: any) => {
    setData(await getClientData(url, db));
  }

  useEffect(() => {
    const db = getSpaces(params)
    getData(db);
  }, [params]);

  return data;
}