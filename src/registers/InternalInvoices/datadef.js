module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fSalesMan: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fReference: { public: true, type: 'TEXT' },
     fDepartment: { public: true, type: 'TEXT' },
     fSign: { public: true, type: 'TEXT' },
     fInclVAT: { public: true, type: 'INTEGER' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fInvalid: { public: true, type: 'INTEGER' },
     fLangCode: { public: true, type: 'TEXT' },
     fSalesGroup: { public: true, type: 'TEXT' },
     fSum0: { public: true, type: 'FLOAT' },
     fSum1: { public: true, type: 'FLOAT' },
     fSum2: { public: true, type: 'FLOAT' },
     fSum3: { public: true, type: 'FLOAT' },
     fSum4: { public: true, type: 'FLOAT' },
     fVISerNr: { public: true, type: 'INTEGER' },
     InternalInvoicesMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fStp: { public: true, type: 'INTEGER' },
           fOvst: { public: true, type: 'INTEGER' },
           fArtCode: { public: true, type: 'TEXT' },
           fQuant: { public: true, type: 'FLOAT' },
           fSpec: { public: true, type: 'TEXT' },
           fPrice: { public: true, type: 'FLOAT' },
           fSum: { public: true, type: 'FLOAT' },
           fVATCode: { public: true, type: 'TEXT' },
           fSalesAcc: { public: true, type: 'TEXT' },
           fTaxTemplateCode: { public: true, type: 'TEXT' } } },
     fExportFlag: { public: true, type: 'INTEGER' },
     fVETaxTemplateCode: { public: true, type: 'TEXT' },
     fRvrsVATType: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex436: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } 
}