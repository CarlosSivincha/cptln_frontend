import WhiteIcon from "../../../../assets/WhiteIcon.png";

export const Fotter = () => {
    return(
        <div className="flex flex-col rounded-md border shadow-lg bg-white min-w-[290px]">
            <span className="flex w-full h-3 rounded-t-md bg-[#908A42]"></span>
            <span className="flex w-full px-2  mt-2 font-bold text-xl">Sabiduría del cielo</span>
            <p className="flex-grow p-2 italic text-gray-500 text-lg">
                "Pero la sabiduría que viene de lo alto es, ante todo, pura, y además pacífica, amable, benigna, llena de compasión y de buenos frutos, ecuánime y genuina" (Santiago 3:17)
            </p>
            <span className="flex w-full justify-end font-bold pr-2 pb-2">Julio 13, 2024</span>
        </div>
    );
};
export default Fotter;