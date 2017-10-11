module.exports = {
  fields:{
    id:{ type: 'INTEGER', primaryKey: true, autoIncrement: true},
    acc_number: { public: true, type: 'INTEGER'},
    comment: { public: true, type: 'TEXT', unique: true },
    acc_type: { public: true, type: 'INTEGER'},
    nvd: { public: true, type: 'INTEGER' },
    nvc: { public: true, type: 'INTEGER' },
    blocked_flag: { public: true, type: 'INTEGER' },
    control_type: { public: true, type: 'INTEGER' },
    aut_code: { public: true, type: 'INTEGER' },
    vat_code: { public: true, type: 'TEXT' },
    curncy: { public: true, type: 'TEXT' },
    cons_acc_number: { public: true, type: 'TEXT' },
    cons_pr: { public: true, type: 'INTEGER' },
    objects: { public: true, type: 'TEXT' },
    sru_code: { public: true, type: 'TEXT' },
    exc_fr_rep: { public: true, type: 'INTEGER' },
    period_code: { public: true, type: 'TEXT' },
    group_acc: { public: true, type: 'INTEGER' },
    trans_aut_code: { public: true, type: 'TEXT' },
    tax_template_code: { public: true, type: 'TEXT'},
    acc_class: { public: true, type: 'INTEGER'},
    lang_matrix: {
      public: true,
      type: 'MATRIX',
      label: 'Languages',
      fields: {
        id:{ type: 'INTEGER', primaryKey: true, autoIncrement: true},
        lang_code: { public: true, type: 'TEXT', },
        text: { public: true, type: 'TEXT' }
      }
    }
  },
  indexes:{
    n_codes_unique:{ fields: ['aut_code','vat_code'],indicesType:'UNIQUE'}
  }
};
