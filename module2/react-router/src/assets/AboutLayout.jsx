import { Link, Outlet, useSearchParams } from "react-router-dom";

/* 
  Hooks provide a ton of utility like useSearchParams
  sets a search param by default, can be used with click events to set data from user
  Outlet component  should be used if parent route elements to show the child route elements
*/

export function AboutLayout() {
  const [searchParams, setSearchParams] = useSearchParams({ num: 3 });
  const number = searchParams.get("num")
  return (
    <>
      <Link to="/about/1">about 1</Link>
      <Link to="/about/2">about 2</Link>
      <Link to={`/about/${number}`}>about {number}</Link>
      <Link to="/about/new">NewBook</Link>
      <Outlet context={{ hello: "world" }} />
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({num: e.target.value })}
      />
    </>
  );
}
