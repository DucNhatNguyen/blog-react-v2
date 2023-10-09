import React from "react";
import { Link } from "react-router-dom";

interface props {
  pathname: string;
}

const Breadcrumbs: React.FC<props> = ({ pathname }) => {
  const [data, setData] = React.useState<string[]>([]);

  React.useEffect(() => {
    setData(pathname.split("/"));
  }, [pathname]);

  return (
    <div className="breadcrumbs mb-4">
      <a href="/">Trang chủ</a>
      {data.map((item, i) => {
        if (data.length - 1 === i) {
          return <Link to="#">{item}</Link>;
        } else {
          return (
            <>
              <span className="mx-1">{item}</span>
              <span className="mx-1">/</span>
            </>
          );
        }
      })}
    </div>
  );
};

export default Breadcrumbs;
