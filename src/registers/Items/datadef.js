module.exports = {

    fields: {
        id        :  { type: 'INTEGER', primaryKey: true, autoIncrement: true },
        name:        { public: true,  type: 'TEXT' },
        description: { public: true,  type: 'TEXT' },
        price:       { public: true,  type: 'INTEGER' }
    }
};
