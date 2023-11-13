import RecipeAPI from "../Hooks/RecipeAPI";
import BasicPagination from "../components/BasicPagination";

export function Recipes() {

    return (
        <>
            <RecipeAPI />
            <BasicPagination />
        </>
    )
}