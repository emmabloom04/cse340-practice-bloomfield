import { getAllCourses, getCourseById, getSortedSections } from '../../models/catalog/catalog.js'

// route handler for the course catalog list page
const catalogPage = (req, res) => {
    const courses = getAllCourses();

    res.render('catalog', {
        title: 'Course Catalog',
        courses: courses
    });
};