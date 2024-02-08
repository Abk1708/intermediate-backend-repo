const routes = (handler) => [
  {
    method: 'POST',
    path: '/export/notes',
    handler: handler.postExportNotesHandler,
    options: {
      auth: 'internotesapp_jwt',
    },
  },
];

module.exports = routes;
