import { useEffect, useState } from "react";
import { BASE_API_URL } from "../../utils/constants";
import { getClientData } from "../../utils/Home";

export const useGetClientData = ({ db, path}: any) => {
  const [data, setData] = useState<any>({});

  const url = `${BASE_API_URL}/${path}`;

  const getData = async (db: any) => {
    setData(await getClientData(url, db));
  }

  useEffect(() => {
    getData(db);
  }, [db]);

  return data;
}