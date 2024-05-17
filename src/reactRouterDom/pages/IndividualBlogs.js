import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const BLOG_DATA = {
  1: {
    heading: "Xiomi 14 Ultra releases in India",
    body: "It is prices at 1 lakh rupees",
    footer: "Purchase link",
  },
  2: {
    heading: "lorem iquwhneihewkcaiuhwiu dxOEB YXiddniuh ytdabuyfgdakuyfg",
    body: "lorem ckufydbfj bxdgfdt aguxdfg buxygUKY DNYUGFUY AYFXGB",
    footer: "Lorem uyexgfbwy xnuaywgyu xgbfge xuyguyge.",
  },
  3: {
    heading: "Lorem hnwuyxgn exgbudg gbxduyge xgedgweu bgexudge ytbfed",
    body: "uhcfh ngucyfqg gnfyegw gewygey gfgyu ewyxgb eyuygewf uybwegf ychdbf",
    footer: "ndvkbdodu uyxgwuy gubxyg eu jhvdbs.",
  },
};

export default function IndividualBlogs() {
  const params = useParams();
  const [blogData, setBlogData] = useState({});
  // console.log(params);
  useEffect(() => {
    //make your api call
    // console.log(params.id);
    setBlogData(BLOG_DATA[params.id]);
  }, [params.id]);
  return (
    <>
      <div>
        <h1>{blogData?.heading}</h1>
        <p>{blogData?.body}</p>
        <footer>{blogData?.footer}</footer>
      </div>
    </>
  );
}
