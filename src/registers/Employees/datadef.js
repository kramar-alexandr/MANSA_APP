module.exports = {
    fields: {
        id        :  { type: 'INTEGER', autoIncrement: true,  primaryKey: true },
        first_name:  { public: true,  type: 'TEXT' },
        second_name: { public: true,  type: 'TEXT' },
        birth_date:  { public: true,  type: 'TEXT' },
        city:        { public: true,  type: 'TEXT' },
        join_date:   { public: true,  type: 'TEXT' },
        position:    { public: true,  type: 'TEXT' },
        order_matrix : { public: true,
            type: 'MATRIX',
            label: 'Orders',
            fields : {
                id        :  { type: 'INTEGER', autoIncrement: true,  primaryKey: true },
                Employer : { public: true, type: 'STRING'   },
                Shop     : { public: true, type: 'STRING'   },
                Item     : { public: true, type: 'STRING'   },
                Count    : { public: true, type: 'INTEGER'  },
                System   : { public: true, type: 'INTEGER'  }
            }
        }
    },
    indexes: {
        names_index: { fields: ['first_name', 'second_name'], indicesType: 'UNIQUE' }
    }
};
