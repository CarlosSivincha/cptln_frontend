import { lazy } from "react";
import ProgramsImage from "../../../../assets/ProgramsImage.jpg";

const Header = lazy(() => import("@/pages/client/components/Header"));
const ProgramCard = lazy(() => import("@/pages/client/pages/Programs/components/ProgramCard.jsx"));


export const Programs = () => {
    return(
        <div className="flex flex-col gap-12 pb-12 lg:gap-16 xl:gap-24">
            <Header color="bg-l_color_y-600" title="Programas"/>
            <ProgramCard color="bg-l_color_r-" title="JOEL" img={ProgramsImage} description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto optio, sit voluptatem rem tempore quae id voluptatum. Magnam veniam tenetur et sunt omnis distinctio, consequuntur eum, ipsa quos blanditiis culpa."/>
            
        </div>
    );
}

export default Programs