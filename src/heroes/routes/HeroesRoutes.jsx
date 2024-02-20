import { Navbar } from "../../ui/components/Navbar";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="dc" element={<DcPage />} />
      </Routes>
    </>
  );
};
