import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/global.scss';
import {createBrowserRouter, RouterProvider, ScrollRestoration} from "react-router-dom";
import DefaultLayout from "./layouts/default-layout/DefaultLayout.tsx";
import AboutProjectPage from "./pages/about-project-page/AboutProjectPage.tsx";
import MapPage from "./pages/map-page/MapPage.tsx";
import PointsOfInterestsCatalogPage from "./pages/points-of-interests-catalog-page/PointsOfInterestsCatalogPage.tsx";
import RoutesCatalogPage from "./pages/routes-catalog-page/RoutesCatalogPage.tsx";
import OurTeamPage from "./pages/our-team-page/OurTeamPage.tsx";
import RoutePage from "./pages/route-page/RoutePage.tsx";
import PointOfInterestPage from "./pages/point-of-interest-page/PointOfInterestPage.tsx";
import HistoryPage from "./pages/history-page/HistoryPage.tsx";
import HistoryLayout from "./layouts/history-layout/HistoryLayout.tsx";
import LinkPointPage from "./pages/link-point-page/LinkPointPage.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <>
        <DefaultLayout />
        <ScrollRestoration
          getKey={(location) => {
            return location.pathname;
          }}
        />
      </>,
    children: [
      {
        path: '/',
        element: <AboutProjectPage />,
      },
      {
        path: '/points',
        element: <PointsOfInterestsCatalogPage />,
      },
      {
        path: '/routes',
        element: <RoutesCatalogPage />,
      },
      {
        path: '/map',
        element: <MapPage />,
      },
      {
        path: '/team',
        element: <OurTeamPage />,
      },

      {
        path: '/routes/:id',
        element: <RoutePage />
      },
      {
        path: '/point/:id',
        element: <PointOfInterestPage />
      },
      {
        path: "/point/:id/link/:linkId",
        element: <LinkPointPage />,
      },
    ],
  },
  {
    path: '/point/:id/history',
    element: <HistoryLayout />,
    children: [
      {
        path: '/point/:id/history/story',
        element: <HistoryPage />
      }
    ],
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
