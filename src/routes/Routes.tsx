import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as RoutePaths from "./paths";

const SignIn = React.lazy(() => import("../pages/auth/SignIn"));
const HomePage = React.lazy(() => import("../pages/homepage/HomePage"));
const EquipmentPage = React.lazy(() => import("../pages/equipment/Equipment"));
const RequestPage = React.lazy(() => import("../pages/request/RequestPage"));

const Routes = () => {
  const userRouter = createBrowserRouter([
    {
      element: <SignIn />,
      path: "*",
    },
    {
      element: <SignIn />,
      path: RoutePaths.SIGNIN,
    },
    {
      element: <HomePage />,
      children: [
        { path: RoutePaths.EQUIPMENT, element: <EquipmentPage /> },
        { path: RoutePaths.REQUEST_PAGE, element: <RequestPage /> },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <Suspense>
        <RouterProvider router={userRouter} />
      </Suspense>
    </React.StrictMode>
  );
};

export default Routes;
