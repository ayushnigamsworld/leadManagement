const privateRoutes = {
  'GET /users': 'UserController.getAll',
  'POST /leads': 'LeadController.bulkInsert',
  'GET /leads/qualify': 'LeadsQualifiedController.getAll',
};

module.exports = privateRoutes;
