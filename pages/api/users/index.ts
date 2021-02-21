import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "GET") {
    const fetchedData: AxiosResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = fetchedData.data;
    res.status(200).json({ users });
  } else if (req.method == "POST") {
    res.status(201).json({
      status: "created, Next",
    });
  }
};
