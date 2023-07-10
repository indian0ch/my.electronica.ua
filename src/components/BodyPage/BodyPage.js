import { Fragment} from "react";
import { Outlet } from "react-router";

function BodyPage() {
  return (
    <Fragment>
       <Outlet></Outlet>
    </Fragment>
  );
}
export default BodyPage;
