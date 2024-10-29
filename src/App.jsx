import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { StrictMode, lazy, Suspense } from "react";
import PageLoader from "./pages/client/components/Loaders/PageLoader";
import CursosBiblico from "./pages/client/pages/CursosBiblicos";
import { AuthProvider } from "./context/Usuario_context";

const AboutUs = lazy(() => import("@/pages/client/pages/AboutUs"));
const Programas = lazy(() => import("@/pages/client/pages/Programs"));
const Niños = lazy(() => import("@/pages/client/pages/Programs/Niños"));
const Familia = lazy(() => import("@/pages/client/pages/Programs/Familia"));
const CreciendoFamilia = lazy(() => import("@/pages/client/pages/Program/CreciendoFamilia"));
const EquipandoSantos = lazy(() =>
  import("@/pages/client/pages/Programs/EquipandoSantos")
);
const Home = lazy(() => import("@/pages/client/pages/Home"));
const Ebooks = lazy(() => import("@/pages/client/pages/Ebooks"));
const Noticia = lazy(() => import("@/pages/client/pages/Noticias"));
const Oracion = lazy(() => import("@/pages/client/pages/Oracion"));
const Devocional = lazy(() => import("@/pages/client/pages/Devocional"));
const DevocionalesDiarios = lazy(() =>
  import("@/pages/client/pages/DevocionalesDiarios")
);
const Navbar = lazy(() => import("@/pages/client/components/Navbar"));
const Fotter = lazy(() => import("@/pages/client/components/Fotter"));

const Donate = lazy(() => import("@/pages/client/pages/Donate"));
const CursosBiblicos = lazy(() =>
  import("@/pages/client/pages/CursosBiblicos")
);
const CursosCompletos = lazy(() =>
  import("@/pages/client/pages/CursosCompletos")
);
const Joel = lazy(() => import("@/pages/client/pages/Program/Joel"));
const ProgramaEspecifico = lazy(() => import("@/pages/client/pages/Program"));
const ProgramaDescripcion = lazy(() => import("@/pages/client/pages/ProgramaDescripcion"));
const Pasi = lazy(() => import("@/pages/client/pages/Program/Pasi"));
const JuntosComunidad = lazy(() =>
  import("@/pages/client/pages/Program/JuntosComunidad")
);
const Contact = lazy(() => import("@/pages/client/pages/Contact"));
const NewsEvents = lazy(() => import("@/pages/client/pages/NewsEvents"));
const NotFound = lazy(() => import("@/pages/client/pages/ExtraPages/NotFound"));

// Admin const
const LoginAdmin = lazy(() => import("@/pages/admin/LoginAdmin"));
const RegisterAdmin = lazy(() => import("@/pages/admin/RegisterAdmin"));
const DevoAd = lazy(() => import("@/pages/admin/DevoAdmin"));
const NewsAdmin = lazy(() => import("@/pages/admin/NewsAdmin"))
const EventsAdmin = lazy(() => import("@/pages/admin/EventsAdmin"))
const ProgramaAdmin = lazy(() => import("@/pages/admin/ProgramaAdmin"))
// const Navbar = lazy(() => import("@/pages/client/components/Navbar"));
const Administracion = lazy(() => import("@/pages/admin/Administracion"))
const TablaEvento = lazy(() => import("@/pages/admin/TablaEvento"))
const TablaDevocional = lazy(() => import("@/pages/admin/TablaDevocional"))
const TablaNews = lazy(() => import("@/pages/admin/TablaNews"))
const TablaCategoria = lazy(() => import("@/pages/admin/TablaCategoria"))
const TablaEbooks = lazy(() => import("@/pages/admin/TablaEbooks"))
const TablaOracion = lazy(() => import("@/pages/admin/TablaOracion"))
const CategoriaAdmin = lazy(() => import("@/pages/admin/CategoriaAdmin"))
const EbooksAdmin = lazy(() => import("@/pages/admin/EbooksAdmin"))
const TablaContactanos = lazy(() => import("@/pages/admin/TablaContactanos"))
const TablaProgramas = lazy(() => import("@/pages/admin/TablaProgramas"))
const Tablacursosbiblicos = lazy(() => import("@/pages/admin/TablaCursosBi"))
const TablaresEbooks = lazy(() => import("@/pages/admin/TablaresEbooks"))


const App = () => {
  return (
    <>
      <StrictMode>
        <AuthProvider>
          <div className="bg-[#EAE9E5]">
            <Suspense fallback={<PageLoader />}>
              {/* <Navbar color="bg-l_color_r-600"/>           */}
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Navbar color="bg-l_color_r-600" />}>
                    <Route index element={<Home />} />
                    <Route path="aboutus" element={<AboutUs />} />
                    {/* <Route path="programas" element={<Programas />} /> */}
                    {/* <Route
                      path="programas/niños-adolescentes"
                      element={<Niños />}
                    />
                    <Route
                      path="programas/niños-adolescentes/joel"
                      element={<Joel />}
                    />
                    <Route
                      path="programas/niños-adolescentes/pasi"
                      element={<Pasi />}
                    />
                    <Route
                      path="programas/niños-adolescentes/juntos-en-comunidad"
                      element={<JuntosComunidad />}
                    />

                    <Route path="programas/familia" element={<Familia />} />
                    <Route
                      path="programas/creciendo-en-familia"
                      element={<CreciendoFamilia />}
                    /> */}

                    <Route
                      path="programas/"
                      element={<Programas />}
                    />
                    <Route
                      path="programas/:nombre"
                      element={<ProgramaEspecifico/>}
                    />

                    <Route
                      path="programas/:categoria/programa/:programa"
                      element={<ProgramaDescripcion/>}
                    />

                    <Route
                      path="programa/:programa"
                      element={<ProgramaDescripcion/>}
                    />

                    {/* <Route path="/programas/joel" element={<Joel/>}/>
                <Route path="/programas/pasi" element={<Joel/>}/>
                <Route path="/programas/juntos-en-comunidad" element={<Joel/>}/> */}

                    <Route path="noticia/:id" element={<Noticia />} />
                    <Route path="recursos/ebooks" element={<Ebooks />} />
                    <Route
                      path="recursos/devocional-diario"
                      element={<Devocional />}
                    />

                    <Route
                      path="recursos/devocional/:id"
                      element={<Devocional />}
                    />

                    <Route
                      path="recursos/cursos-biblicos"
                      element={<CursosBiblicos />}
                    />
                    <Route
                      path="recursos/cursos-biblicos/curso-completo"
                      element={<CursosCompletos />}
                    />
                    <Route
                      path="noticias-y-eventos"
                      element={<NewsEvents />}
                    />
                    <Route path="donate" element={<Donate />} />
                    <Route path="contactanos" element={<Contact />} />
                    <Route path="oracion" element={<Oracion />} />
                    <Route
                      path="recursos/devocionales"
                      element={<DevocionalesDiarios />}
                    />
                    <Route path="*" element={<NotFound />} />
                  </Route>

                  
                  {/* <Route path="/admin" element={<Administracion />}>
                    <Route path="register" element={<RegisterAdmin />} />
                    <Route path="devoAd" element={<DevoAd />} />
                    <Route path="login" element={<LoginAdmin />} />
                    <Route path="newsad" element={<NewsAdmin />} />
                    <Route path="eventad" element={<EventsAdmin />} />
                    <Route path="tablaevento" element={<TablaEvento />} />
                    <Route path="tablaevento/:id" element={<EventsAdmin />} />
                    <Route
                      path="tabladevocional"
                      element={<TablaDevocional />}
                    />
                    <Route path="tabladevocional/:id" element={<DevoAd />} />
                    <Route path="tablanews" element={<TablaNews />} />
                  </Route> */}
                  <Route path="/admin" element={<Administracion/>}>
                    <Route path="register" element={<RegisterAdmin />} />
                    <Route path="devoAd" element={<DevoAd />} />
                    <Route path="login" element={<LoginAdmin />} />
                    <Route path="newsad" element={<NewsAdmin />} />
                    <Route path="eventad" element={<EventsAdmin />} />
                    <Route path="categorias" element={<CategoriaAdmin />} />
                    <Route path="ebooks" element={<EbooksAdmin />} />
                    <Route path="programas" element={<ProgramaAdmin />} />

                    <Route index element={<TablaEvento />} />
                    <Route path="tablaevento/:id" element={<EventsAdmin />} />
                    <Route path="tabladevocional" element={<TablaDevocional />} />
                    <Route path="tabladevocional/:id" element={<DevoAd/>} />
                    <Route path="tablanews" element={<TablaNews />} />
                    <Route path="tablanews/:id" element={<NewsAdmin />} />
                    <Route path="tablaebooks" element={<TablaEbooks/>} />
                    <Route path="tablaoracion" element={<TablaOracion/>} />
                    <Route path="tablacontactos" element={<TablaContactanos/>} />


                    <Route path="tablacategoria" element={<TablaCategoria />} />
                    <Route path="tablacategoria/:id" element={<CategoriaAdmin />} />
                    <Route path="tablaprogramas" element={<TablaProgramas/>}/>
                    <Route path="tablaprogramas/:id" element={<ProgramaAdmin/>}/>
       

                    <Route path="tablacursosbi" element={<Tablacursosbiblicos/>}/>
                    <Route path="tablapeticionebooks" element={<TablaresEbooks/>}/>
                    {/* <Route path="tablaprogramas"/> */}

                    {/* <Route path="test" element={<TestView />} /> */}
                    {/* <Route path="/programas" element={<Programs/>} /> */}
                  </Route>

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
              {/* <Fotter /> */}
            </Suspense>
          </div>
        </AuthProvider>
      </StrictMode>
    </>
  );
};

export default App;
