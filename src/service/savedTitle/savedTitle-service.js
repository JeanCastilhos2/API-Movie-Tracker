import { SavedTitle } from "../../models/SavedTitle.js";

export const SavedTitleService = (request) => {
    const { _id, user_id, title_id, title, poster, category, rating } = request.body;

    const createSavedTitle = async () => {
        try {
            const newSavedTitle = await SavedTitle.create({
                user_id,
                title_id,
                title,
                poster,
                category,
                rating,
            });
            return newSavedTitle;
        } catch (error) {
            return response.json({
                message: `Title could not be saved`,
                status: 404,
            });
        }
    };

    const updateSavedTitle = async () => {
        try {
            let savedTitleForUpdate = await SavedTitle.findById({ _id });
            if (!savedTitleForUpdate) {
                return response.json({
                    message: `Saved title not found`,
                    status: 404,
                });
            }
            savedTitleForUpdate.rating = rating;
            await savedTitleForUpdate.save();
            return savedTitleForUpdate;
        } catch (error) {
            return response.json({
                message: `Saved title could not be updated`,
                status: 404,
            });
        }
    };

    const deleteSavedTitle = async () => {
        try {
            const { _id } = request.params;
            let savedTitleForDelete = await SavedTitle.findByIdAndDelete({ _id });
            if (!savedTitleForDelete) {
                return response.json({
                    message: `Saved title not found`,
                    status: 404,
                });
            }
            return savedTitleForDelete;
        } catch (error) {
            return response.json({
                message: `Saved title not found`,
                status: 404,
            });
        }
    };

    const getUserSavedTitles = async () => {
        try {
            const savedTitles = await SavedTitle.find({ user_id });
            if (!savedTitles) {
                return response.json({
                    message: `User's saved titles not found`,
                    status: 404,
                });
            }
            return { MyList: savedTitles };
        } catch (error) {
            return response.json({
                message: `User's saved titles not found`,
                status: 404,
            });
        }
    };

    return {
        createSavedTitle,
        updateSavedTitle,
        deleteSavedTitle,
        getUserSavedTitles,
    };
};
