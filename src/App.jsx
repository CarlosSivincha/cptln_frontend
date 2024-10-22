import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { StrictMode, lazy, Suspense } from "react";
import  PageLoader from "./pages/client/components/Loaders/PageLoader";
import CursosBiblico from "./pages/client/pages/CursosBiblicos";

const AboutUs = lazy(() => import("@/pages/client/pages/AboutUs"));
const Programas = lazy(() => import("@/pages/client/pages/Programs"));
const Niños = lazy(() => import("@/pages/client/pages/Programs/Niños"));
const Familia = lazy(() => import("@/pages/client/pages/Programs/Familia"));
const EquipandoSantos = lazy(() => import("@/pages/client/pages/Programs/EquipandoSantos"));
const Home = lazy(() => import("@/pages/client/pages/Home"));
const Ebooks = lazy(() => import("@/pages/client/pages/Ebooks"));
const Noticia = lazy(() => import("@/pages/client/pages/Noticias"));
const Oracion = lazy(() => import("@/pages/client/pages/Oracion"));
const Devocional = lazy(() => import("@/pages/client/pages/Devocional"));
const DevocionalesDiarios = lazy(() => import("@/pages/client/pages/DevocionalesDiarios"));
const Navbar = lazy(() => import("@/pages/client/components/Navbar"));
const Fotter = lazy(() => import("@/pages/client/components/Fotter"));

const Donate = lazy(() => import("@/pages/client/pages/Donate"));
const CursosBiblicos = lazy(() => import("@/pages/client/pages/CursosBiblicos"));
const Joel = lazy(() => import("@/pages/client/pages/Program/Joel"));
const Pasi = lazy(() => import("@/pages/client/pages/Program/Pasi"));
const JuntosComunidad = lazy(() => import("@/pages/client/pages/Program/JuntosComunidad"));
const Contact = lazy(() => import("@/pages/client/pages/Contact"));
const NewsEvents = lazy(() => import("@/pages/client/pages/NewsEvents"));
const NotFound = lazy(() => import("@/pages/client/pages/ExtraPages/NotFound"))

// Admin const
const LoginAdmin = lazy(() => import("@/pages/admin/LoginAdmin"));
const RegisterAdmin = lazy(() => import("@/pages/admin/RegisterAdmin"));
const DevoAd = lazy(() => import("@/pages/admin/DevoAdmin"));
const NewsAdmin = lazy(() => import("@/pages/admin/NewsAdmin"))
const EventsAdmin = lazy(() => import("@/pages/admin/EventsAdmin"))
// const Navbar = lazy(() => import("@/pages/client/components/Navbar"));
const Administracion = lazy(() => import("@/pages/admin/Administracion"))
const TablaEvento = lazy(() => import("@/pages/admin/TablaEvento"))
const TablaDevocional = lazy(() => import("@/pages/admin/TablaDevocional"))
const TablaNews = lazy(() => import("@/pages/admin/TablaNews"))

const App = () => {
  return (
    <>
      <StrictMode>
        <div className="bg-[#EAE9E5]">
        <Suspense fallback={<PageLoader/>}>
          <Navbar color="bg-l_color_r-600"/>          
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/aboutus" element={<AboutUs/>} />
              <Route path="/programas" element={<Programas/>}/>
              <Route path="/programas/niños-adolescentes" element={<Niños/>}/>
                <Route path="/programas/niños-adolescentes/joel" element={<Joel/>}/>
                <Route path="/programas/niños-adolescentes/pasi" element={<Pasi/>}/>
                <Route path="/programas/niños-adolescentes/juntos-en-comunidad" element={<JuntosComunidad/>}/>

              <Route path="/programas/familia" element={<Familia/>}/>
              <Route path="/programas/equipando-los-santos" element={<Familia/>}/>
                {/* <Route path="/programas/joel" element={<Joel/>}/>
                <Route path="/programas/pasi" element={<Joel/>}/>
                <Route path="/programas/juntos-en-comunidad" element={<Joel/>}/> */}

              <Route path="/noticia/:id" element={<Noticia/>}/>
              <Route path="/recursos/ebooks" element={<Ebooks/>} />
              <Route path="/recursos/devocional-diario" element={<Devocional/>} />
              <Route path="/recursos/cursos-biblicos" element={<CursosBiblicos/>} />
              <Route path="/noticias-y-eventos" element={<NewsEvents/>} />
              <Route path="/donate" element={<Donate/>}   />
              <Route path="/contactanos" element={<Contact/>} />
              <Route path="/oracion" element={<Oracion />} />
              <Route path="/recursos/devocionales" element={<DevocionalesDiarios />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/admin" element={<Administracion/>}>
                <Route path="register" element={<RegisterAdmin />} />
                <Route path="devoAd" element={<DevoAd />} />
                <Route path="login" element={<LoginAdmin />} />
                <Route path="newsad" element={<NewsAdmin />} />
                <Route path="eventad" element={<EventsAdmin />} />
                <Route path="tablaevento" element={<TablaEvento />} />
                <Route path="tablaevento/:id" element={<EventsAdmin />} />
                <Route path="tabladevocional" element={<TablaDevocional />} />
                <Route path="tabladevocional/:id" element={<DevoAd/>} />
                <Route path="tablanews" element={<TablaNews />} />
                {/* <Route path="/programas" element={<Programs/>} /> */}
              </Route>

            </Routes>
          </BrowserRouter>
          <Fotter />
        </Suspense>
        </div>
      </StrictMode>
    </>
  );
};

export default App;
