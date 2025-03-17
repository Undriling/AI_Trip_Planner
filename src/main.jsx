import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router'
import CreateTrip from './create_trip/index.jsx'
import Header from './components/custom/header.jsx'
import { Provider } from 'react-redux'
import AppStore from './store/appStore.jsx'
import { Toaster } from 'sonner'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ViewItinary from './view-itinary/viewItinary.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import MyItinaries from './myItineries/myItinaries.jsx'
import Footer from './components/custom/footer.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/create-trip',
    element: <CreateTrip />,
  },
  {
    path: '/view-itinerary/:tripId',
    element: <ViewItinary />,
  },
  {
    path: '/my-itineraries',
    element: <MyItinaries />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={AppStore}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLEOAuth_CLIENT_ID}>
          <ErrorBoundary>
              <Header />
              <Toaster />
            <RouterProvider router={router}/>
          </ErrorBoundary>
        </GoogleOAuthProvider>
      </Provider>
  </StrictMode>,
)
