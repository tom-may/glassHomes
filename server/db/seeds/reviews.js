
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {id: 1, title: 'Good', user_ID: 2, property_ID: 3, comments: 'Awesome house',pros: 'Big Garden', cons: 'Junk in Garage cannot use for parking', rating: 4, start_of_tenancy: 2015, end_of_tenancy: 2018, helpful_score: 2, img:""},
        {id: 2, title: 'Moldy', user_ID: 1, property_ID: 4, comments: 'No windows open to air out the house',pros: 'Very quiet area', cons: 'No sun in untill late evening ', rating: 2, start_of_tenancy: 2017, end_of_tenancy: 2018, helpful_score: 1, img:""},
        {id: 3, title: 'Sunny', user_ID: 2, property_ID: 2, comments: 'Good house',pros: 'Nice Neighbours', cons: 'No big garden for kids', rating: 3, start_of_tenancy: 2016, end_of_tenancy: 2018, helpful_score: 4, img:""},
        {id: 4, title: 'Very small', user_ID: 4, property_ID: 5, comments: 'House is very small. All bedrooms can only fit a single bed',pros: 'Close to public transport', cons: 'Neighbours are a nightmare', rating: 2, start_of_tenancy: 2016,end_of_tenancy: 2018, helpful_score: 10, img:""},
        {id: 5, title: 'Love this House', user_ID: 1, property_ID: 1, comments: 'This place this the best',pros: 'Big rooms, spa bath, balcony, big garden, fancy kitchen', cons: 'Some work needs to be done on the outside fence', rating: 4, start_of_tenancy: 2017, end_of_tenancy: 2018, helpful_score: 22, img:""},
        {id: 6, title: 'Love this House', user_ID: 1, property_ID: 3, comments: 'This place this the best',pros: 'Big rooms, spa bath, balcony, big garden, fancy kitchen', cons: 'Some work needs to be done on the outside fence', rating: 4, start_of_tenancy: 2020, end_of_tenancy: 2020, helpful_score: 22, img:""},
        {id: 7, title: 'Love this House', user_ID: 1, property_ID: 3, comments: 'This place this the best',pros: 'Big rooms, spa bath, balcony, big garden, fancy kitchen', cons: 'Some work needs to be done on the outside fence', rating: 4, start_of_tenancy: 2020, end_of_tenancy: 2020, helpful_score: 22, img:""},
        {id: 8, title: 'Love this House', user_ID: 2, property_ID: 1, comments: 'This place this the best',pros: 'Big rooms, spa bath, balcony, big garden, fancy kitchen', cons: 'Some work needs to be done on the outside fence', rating: 4, start_of_tenancy: 2020, end_of_tenancy: 2020, helpful_score: 22, img:""},
        {id: 9, title: 'Love this House', user_ID: 3, property_ID: 2, comments: 'This place this the best',pros: 'Big rooms, spa bath, balcony, big garden, fancy kitchen', cons: 'Some work needs to be done on the outside fence', rating: 4, start_of_tenancy: 2020, end_of_tenancy: 2020, helpful_score: 22, img:""},
        {id: 10, title: 'Love this House', user_ID: 4, property_ID: 6, comments: 'This place this the best',pros: 'Big rooms, spa bath, balcony, big garden, fancy kitchen', cons: 'Some work needs to be done on the outside fence', rating: 4, start_of_tenancy: 2020, end_of_tenancy: 2020, helpful_score: 22, img:""}

      ]);
    });
};
