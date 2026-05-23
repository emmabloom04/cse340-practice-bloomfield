// Create src/controllers/faculty/faculty.js with route handlers for faculty list and detail pages. Follow the same pattern you used for the course controllers:

// Import the faculty model functions
// Create a facultyListPage function that renders the faculty list page
// Create a facultyDetailPage function that uses route parameters to look up individual faculty
// Include proper error handling for invalid faculty IDs
// Export both functions

import { getFacultyBySlug, getSortedFaculty } from '../../models/faculty/faculty.js';

// route handler for the faculty list page
const facultyPage = async (req, res) => {
    const validSortOptions = ['name', 'department', 'title'];
    const sortBy = validSortOptions.includes(req.query.sort) ? req.query.sort : 'department';
    const facultyMembers = await getSortedFaculty(sortBy);

    res.render('faculty/list', {
        title: 'Faculty List',
        facultyMembers: facultyMembers,
        currentSort: sortBy
    });
}

// route handler for individual faculty detail pages
const facultyDetailPage = async (req, res, next) => {
    const facultySlug = req.params.facultySlug;
    const facultyMember = await getFacultyBySlug(facultySlug);

    // if faculty doesn't exist, create 404 error
    if (Object.keys(facultyMember).length === 0) {
        const err = new Error(`Faculty member ${facultySlug} not found`);
        err.status = 404;
        return next(err);
    }

    res.render('faculty/detail', {
        title: `${facultyMember.name}`,
        faculty: facultyMember
    });
}

export { facultyPage, facultyDetailPage }
