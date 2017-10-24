//AccVc
module.exports = {
  fields:{
    id:{ type: 'INTEGER', primaryKey: true, autoIncrement: true},
    fAccNumber: { public: true, type: 'INTEGER',unique:true},//->AccVc
    fComment: { public: true, type: 'TEXT'},
    fAccType: { public: true, type: 'INTEGER'},
    fNvd: { public: true, type: 'INTEGER' },
    fNvc: { public: true, type: 'INTEGER' },
    fBlockedFlag: { public: true, type: 'INTEGER' },
    fControlType: { public: true, type: 'INTEGER' },
    fAutCode: { public: true, type: 'TEXT' },//->AutVc
    fVatCode: { public: true, type: 'TEXT' },//->VATCodeBlock
    fCurncy: { public: true, type: 'TEXT' },//->CurncyCodeVc
    fConsAccNumber: { public: true, type: 'TEXT' },
    fConspr: { public: true, type: 'INTEGER' },
    fObjects: { public: true, type: 'TEXT' },//->ObjVc
    fSruCode: { public: true, type: 'TEXT' },
    fExcFrRep: { public: true, type: 'INTEGER' },
    fPeriodCode: { public: true, type: 'TEXT' },
    fGroupAcc: { public: true, type: 'INTEGER' },
    fTransAutCode: { public: true, type: 'TEXT' },//->AutVc
    fTaxTemplateCode: { public: true, type: 'TEXT'},//->TaxTemplateVc
    fAccClass: { public: true, type: 'TEXT'},//->AccClassVc
    AccountsMatrix: {
      public: true,
      type: 'MATRIX',
      label: 'Язык',
      fields: {
        id:{ type: 'INTEGER', primaryKey: true, autoIncrement: true},
        fLangcode: { public: true, type: 'TEXT', },
        fText: { public: true, type: 'TEXT' }
      }
    }
  }
};
