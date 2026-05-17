// Create src/controllers/faculty/faculty.js with route handlers for faculty list and detail pages. Follow the same pattern you used for the course controllers:

// Import the faculty model functions
// Create a facultyListPage function that renders the faculty list page
// Create a facultyDetailPage function that uses route parameters to look up individual faculty
// Include proper error handling for invalid faculty IDs
// Export both functions

import { getFacultyById, getSortedFaculty } from "../../models/faculty/faculty";

// route handler for the faculty list page
const facultyPage = (req, res) => {
    const faculty = getSortedFaculty;

    res.render('faculty', {
        title: 'Faculty List',
        facultyMembers: faculty
    })
}

// route handler for individual faculty detail pages
const facultyDetailPage = (req, res, next) => {
    const facultyId = req.params.facultyId;
    const facutly = getFacultyById(facultyId);

    // if faculty doesn't exist, create 404 error
    if (!facutly) {
        const err = new Error(`Faculty ${facultyId} not found`);
        err.status = 404;
        return next(err);
    }

    res.render('faculty-detail', {
        
    })
}

export { facultyPage, facultyDetailPage }