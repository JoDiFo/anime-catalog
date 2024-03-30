import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loading } from "@/widgets/Loading";
import { routeConfig } from "@/shared/config/routeConfig/routeConfig";

export function RouterProvider() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
}
