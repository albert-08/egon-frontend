import { useEffect, useState } from "react";
import { getInfo } from "../../utils/Home";

export const useGetInfo = (database: any) => {
  const [info, setInfo] = useState<any>({});

  const getClientInfo = async (database: any) => {
    setInfo(await getInfo(database));
  }

  useEffect(() => {
    getClientInfo(database); 
  }, [database]);

  return { info }
}