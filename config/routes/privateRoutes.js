const privateRoutes = {
  'GET /users': 'UserController.getAll',
  'POST /leads': 'LeadController.bulkInsert',
  'GET /leads-qualify': 'LeadsQualifiedController.getAll',
  'GET /agents': 'AgentController.getAll',
  'PUT /agents-work' : 'AgentWorkController.updateProp',
  'GET /locations' : 'LocationController.getAll',
  'POST /agents-work' : 'AgentWorkController.bulkAssignAgentLead',
  'POST /agent-distribution' : 'LeadController.distribute',
};

module.exports = privateRoutes;
