import type { NextApiRequest, NextApiResponse } from "next";
import Post from "../../app/(user)/post/[slug]/page";

type Props = {
    params: {
        slug: string;
    }
  };


export default function preview(req: NextApiRequest, res: NextApiResponse) {
    res.setPreviewData({});
    res.writeHead(307, { Location: `/`});
    res.end();
}