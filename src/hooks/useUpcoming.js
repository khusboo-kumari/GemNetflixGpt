import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpComing } from "../utils/movieSlice";

const useUpcoming = () => {
    const dispatch = useDispatch();

    const getUpComing = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
            const json = await response.json(); // Correctly await the JSON parsing
            console.log("Upcoming movies are here:", json.results);
            dispatch(addUpComing(json.results)); // Dispatch the parsed results
        } catch (error) {
            console.error("Error fetching upcoming movies:", error);
        }
    };

    useEffect(() => {
        getUpComing();
    }, []); // Ensure the dependency array is empty for a one-time effect
};

export default useUpcoming;
