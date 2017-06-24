import { createSelector } from 'reselect';

const selectApp = state => state.get('app');

const selectLessonDate = createSelector(selectApp, app => app.get('lessonDate'));

export {
    selectLessonDate
};
