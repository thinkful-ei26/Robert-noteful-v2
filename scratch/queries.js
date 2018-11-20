'use strict';

const knex = require('../knex');

// let searchTerm = 'gaga';
let id = '1000';
// let updateObj = {title: 'new title', content: 'new content'};
// let newItem = {title: 'That New New Title', content: 'That New New Content'};

// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .modify(queryBuilder => {
//     if (searchTerm) {
//       queryBuilder.where('title', 'like', `%${searchTerm}%`);
//     }
//   })
//   .orderBy('notes.id')
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });


// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .where('notes.id', `${id}`)
//   .then(results => {
//     console.log(results);
//   })
//   .catch(err => {
//     console.error(err);
//   });


knex
  .select('notes.id', 'title', 'content')
  .from('notes')
  .where('notes.id', `${id}`)
  .update(updateObj, ['notes.id', 'notes.title', 'notes.content'])
  .then(results => {
    console.log(results);
  })
  .catch(err => {
    console.error(err);
  });


knex('notes')
  .insert(newItem, ['notes.id', 'notes.title', 'notes.content'])
  .then(results => {
    console.log(results);
  })
  .catch(err => {
    console.error(err);
  });

knex('notes')
  .where('notes.id', id)
  .del()
  .then(results => {
    console.log(results);
  })
  .catch(err => {
    console.error(err);
  });
