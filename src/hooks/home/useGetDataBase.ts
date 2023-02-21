import { useEffect, useState } from "react";
import { getSpaces } from "../../utils/Home";

export const useGetDataBase = (params: any) => {
  const [dataBase, setDatabase] = useState<any>({});

  useEffect(() => {
    const db = getSpaces(params);
    setDatabase(db)
  }, [params]);

  return { dataBase }
}