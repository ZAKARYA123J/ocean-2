// App.js
import "./App.css";
import "./assets/css/tailwind.css";
import "./assets/css/materialdesignicons.min.css";
import "leaflet/dist/leaflet.css";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Index from "./pages";
import Formation from "./pages/formation";
import Service from "./pages/service";
import Jobs from "./components/recruitment/Jobs";
import IndexFive from "./pages/index-five";
import Gallery from "./components/Gallery/gallery";
import GalleryDetail from "./components/Gallery/detailgallery";
import TeamPage from "./components/TeamPage";
import TeamNurse from "./components/TeamNurse";
import ContractPage from "./components/ContractPage";
import LanguagesPage from "./components/LanguagesPage";
import LearnEnglishEx from "./components/English/LearnEnglishEx";
import LearnEnglish from "./components/LearnEnglish";
import ScrollToTop from "./components/ScrollToTop";
import CoursesSection from "./components/English/CoursesSection";
import CourseDetailsEnglish from './components/English/CourseDetails';
import CourseDetailsFrench from './components/French/CourseDetails';
import CourseDetailsSpain from './components/Spain/CourseDetails';
import LearnSpain from './components/LearnSpain';
import LearnFrench from './components/LearnFrench';
import { HelmetProvider } from "react-helmet-async";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      y: -50,
      scale: 0.95,
    },
  };

  const pageTransition = {
    duration: 0.8,
    ease: [0.42, 0.58, 0.42, 1],
  };

  const pageStyle = {
    position: "absolute",
    width: "100%",
  };

  return (
    <HelmetProvider>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                style={pageStyle}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Index />
              </motion.div>
            }
          />
          <Route
            path="/formation"
            element={
              <motion.div
                style={pageStyle}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{
                  ...pageTransition,
                  duration: 1,
                }}
              >
                <Formation />
              </motion.div>
            }
          />
          <Route
            path="/formation/:id"
            element={
              <motion.div
                style={pageStyle}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <IndexFive />
              </motion.div>
            }
          />
          <Route
            path="/service/:id"
            element={
              <motion.div
                style={pageStyle}
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
                transition={{
                  duration: 1,
                  ease: "anticipate",
                }}
              >
                <Service />
              </motion.div>
            }
          />
          <Route
            path="/jobs"
            element={
              <motion.div
                style={pageStyle}
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{
                  duration: 0.5,
                  ease: [0.42, 0.58, 0.42, 1],
                }}
              >
                <Jobs />
              </motion.div>
            }
          />
          <Route
            path="/jobs/:type"
            element={
              <motion.div
                style={pageStyle}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.8,
                  ease: [0.42, 0.58, 0.42, 1],
                }}
              >
                <Jobs />
              </motion.div>
            }
          />
          <Route
            path="/gallery"
            element={
              <motion.div
                style={pageStyle}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Gallery />
              </motion.div>
            }
          />
          <Route
            path="/gallery/:id"
            element={
              <motion.div
                style={pageStyle}
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 150 }}
                transition={{
                  duration: 0.8,
                  ease: [0.42, 0.58, 0.42, 1],
                }}
              >
                <GalleryDetail />
              </motion.div>
            }
          />
          <Route
            path="/courses"
            element={
              <motion.div
                style={pageStyle}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.8,
                  ease: [0.42, 0.58, 0.42, 1],
                }}
              >
                <CoursesSection />
              </motion.div>
            }
          />
          <Route
            path="/course/:courseType"
            element={
              <motion.div
                style={pageStyle}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.8,
                  ease: [0.42, 0.58, 0.42, 1],
                }}
              >
                <CourseDetailComponent />
              </motion.div>
            }
            
          />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/nurse" element={<TeamNurse />} />
          <Route path="/contract" element={<ContractPage />} />
          <Route path="/exercise" element={<LearnEnglishEx />} />
          <Route path="/learn-english" element={<LearnEnglish />} />
          <Route path="/learn-spain" element={<LearnSpain />} />
          <Route path="/learn-french" element={<LearnFrench />} />
          <Route
            path="/languages"
            element={
              <motion.div
                style={pageStyle}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{
                  duration: 0.6,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
              >
                <LanguagesPage />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      <SpeedInsights />
    </HelmetProvider>
  );
}

function CourseDetailComponent() {
  const { courseType } = useParams();

  if (courseType.includes("french")) {
    return <CourseDetailsFrench courseType={courseType} />;
  } else if (courseType.includes("english")) {
    return <CourseDetailsEnglish courseType={courseType} />;
  } else if (courseType.includes("spanish")) {
    return <CourseDetailsSpain courseType={courseType} />;
  } else {
    return <div>Course not found!</div>;
  }
}

export default App;
