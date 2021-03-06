export default {
  definitions: {
    order: {
      type: 'object',
      properties: {
        customer: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string'},
            department: { type: 'string' },
            emailAddress: { type: 'string', format: 'email' },
            phone: {
              type: 'string',
              format: 'tel'
            },
          }
        },
        title: {
          type: 'string',
          minLength: 5
        },
        ordered: { type: 'boolean' },
        processId: {
          type: 'number',
          minimum: 0
        },
        assignee: { type: 'string' },
        startDate: {
          type: 'string',
          format: 'date'
        },
        endDate: {
          type: 'string',
          format: 'date'
        },
        status: {
          type: 'string',
          enum: ['unordered', 'planned', 'ordered']
        },
        amount: {
          type: 'integer',
          minimum: 1,
          maximum: 100,
          default: 10,
          multipleOf: 1
        }
      }
    }
  },
  type: 'object',
  properties: {
    orders: {
      type: 'array',
      items: {
        $ref: '#/definitions/order'
      }
    }
  },
  required: ['title']
};
