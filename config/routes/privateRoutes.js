const privateRoutes = {
  'GET /users': 'UserController.getAll',
  'POST /leads': 'LeadController.bulkInsert',
  'GET /leads-qualify': 'LeadsQualifiedController.getAll',
  'GET /agents': 'AgentController.getAll',
  'PUT /agents-work' : 'AgentWorkController.updateBucketSize',
};

module.exports = privateRoutes;
