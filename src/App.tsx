import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlobCursor from './components/reactbits/BlobCursor'
import ErrorBoundary from './components/ErrorBoundary'
import GlassSurface from './components/reactbits/GlassSurface'
import './App.css'

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'))
const CatsPage = React.lazy(() => import('./pages/CatsPage'))
const MenuPage = React.lazy(() => import('./pages/MenuPage'))
const AboutPage = React.lazy(() => import('./pages/AboutPage'))
const EventsPage = React.lazy(() => import('./pages/EventsPage'))
const GalleryPage = React.lazy(() => import('./pages/GalleryPage'))
const BlogPage = React.lazy(() => import('./pages/BlogPage'))
const ReservationsPage = React.lazy(() => import('./pages/ReservationsPage'))
const ShopPage = React.lazy(() => import('./pages/ShopPage'))

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <GlassSurface className="p-8 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-300 mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </GlassSurface>
  </div>
)

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <BlobCursor />
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<ErrorBoundary><HomePage /></ErrorBoundary>} />
                <Route path="/cats" element={<ErrorBoundary><CatsPage /></ErrorBoundary>} />
                <Route path="/menu" element={<ErrorBoundary><MenuPage /></ErrorBoundary>} />
                <Route path="/about" element={<ErrorBoundary><AboutPage /></ErrorBoundary>} />
                <Route path="/events" element={<ErrorBoundary><EventsPage /></ErrorBoundary>} />
                <Route path="/gallery" element={<ErrorBoundary><GalleryPage /></ErrorBoundary>} />
                <Route path="/blog" element={<ErrorBoundary><BlogPage /></ErrorBoundary>} />
                <Route path="/reservations" element={<ErrorBoundary><ReservationsPage /></ErrorBoundary>} />
                <Route path="/shop" element={<ErrorBoundary><ShopPage /></ErrorBoundary>} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
