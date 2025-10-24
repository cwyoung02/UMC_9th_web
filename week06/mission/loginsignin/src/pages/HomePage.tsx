import { useEffect, useState } from "react";
import LpCard from "../components/LpCard";
import { useGetLpList } from "../hooks/queries/useGetLpList"
import { PAGINATION_ORDER } from "../enums/common";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [sort, setSort] = useState<PAGINATION_ORDER>(PAGINATION_ORDER.asc); // "asc" || "desc"
  const {data, isPending, isError} = useGetLpList({order: sort});
  const navigate = useNavigate();

  useEffect(() => {
    const postLoginRedirect = localStorage.getItem("postLoginRedirect");

    if (postLoginRedirect){
    localStorage.removeItem("postLoginRedirect");
    navigate(`${postLoginRedirect}`);
  }
  },[navigate]);

  if (isPending) {
    return <div className="text-white text-3xl">Loading...</div>
  }

  if (isError) {
    return <div className="text-white text-3xl">Error</div>
  }

  return (
    <>
      <div className="flex justify-end mr-10 mb-3">
        <div className="flex border border-white rounded-md overflow-hidden">
          <button
            onClick={() => setSort(PAGINATION_ORDER.asc)}
            className={`px-4 py-1.5 text-sm font-medium
              ${sort === PAGINATION_ORDER.asc
                ? "bg-white text-black"
                : "text-white hover:bg-white/10"}
            `}
          >
            오래된순
          </button>

          <button
            onClick={() => setSort(PAGINATION_ORDER.desc)}
            className={`px-4 py-1.5 text-sm font-medium
              ${sort === PAGINATION_ORDER.desc
                ? "bg-white text-black"
                : "text-white hover:bg-white/10"}
            `}
          >
            최신순
          </button>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-2">
        {data?.map((lp) => (
          <LpCard key={lp.id} lp={lp} />
        ))}
      </div>
    </>
  )
}

export default HomePage
