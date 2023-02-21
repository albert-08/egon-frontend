import { useEffect, useState } from "react";
import { getConfiguration } from "../../utils/Home";

export const useGetConfiguration = (database: any) => {
  const [configuration, setConfiguration] = useState<any>({});

  const getClientConfiguration = async (database: any) => {
    setConfiguration(await getConfiguration(database));
  }

  useEffect(() => {
    getClientConfiguration(database);
  }, [database]);

  return { configuration }
}