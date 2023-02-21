import { useEffect, useState } from "react";
import { getLogo } from "../../utils/Home";

export const useGetLogo = (database: any) => {
  const [logo, setLogo] = useState<any>({});

  const getClientLogo = async (database: any) => {
    setLogo(await getLogo(database));
  }

  useEffect(() => {
    getClientLogo(database);
  }, [database]);

  return { logo }
}