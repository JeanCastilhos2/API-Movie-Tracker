import { SavedTitleService } from "../../service/savedTitle/savedTitle-service.js"

export const createSavedTitle = async (request, response) => {
  try {
    const result = await SavedTitleService(request).createSavedTitle()
    return response.status(201).json({
      message: "Saved title created successfully",
      data: result,
    });
  } catch (error) {
    return response.status(404).json({
      message: "Saved title could not be created",
    })
  }
}

export const updateSavedTitle = async (request, response) => {
  try {
    const result = await SavedTitleService(request).updateSavedTitle()
    return response.status(201).json({
      message: "Saved title updated successfully",
      data: result,
    });
  } catch (error) {
    return response.status(404).json({
      message: "Saved title could not be updated",
    })
  }
}

export const deleteSavedTitle = async (request, response) => {
  try {
    const result = await SavedTitleService(request).deleteSavedTitle()
    return response.status(201).json({
      message: "Saved title deleted successfully",
      data: result,
    })
  } catch (error) {
    return response.status(404).json({
      message: "Saved title could not be deleted",
    })
  }
}

export const getSavedTitles = async (request, response) => {
  try {
    const result = await SavedTitleService(request).getSavedTitles()
    return response.status(200).json({
      message: "Saved titles retrieved successfully",
      data: { savedTitles: result },
    })
  } catch (error) {
    return response.status(404).json({
      message: "Saved titles not found",
    })
  }
}
