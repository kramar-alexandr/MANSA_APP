module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     PaymentModeMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCode: { public: true, type: 'TEXT' },
           fAccNr: { public: true, type: 'TEXT' },
           fBankNr: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fBankName: { public: true, type: 'TEXT' },
           fObjects: { public: true, type: 'TEXT' },
           fDocName: { public: true, type: 'TEXT' },
           fPrelAccIn: { public: true, type: 'TEXT' },
           fPrelAccOut: { public: true, type: 'TEXT' },
           fTSerStartIn: { public: true, type: 'INTEGER' },
           fTSerEndIn: { public: true, type: 'INTEGER' },
           fTSerStartOut: { public: true, type: 'INTEGER' },
           fTSerEndOut: { public: true, type: 'INTEGER' },
           fDonotGenTrans: { public: true, type: 'INTEGER' },
           fCheckType: { public: true, type: 'INTEGER' },
           fCalcForm: { public: true, type: 'TEXT' },
           fTAX: { public: true, type: 'FLOAT' },
           fTAXAccIn: { public: true, type: 'TEXT' },
           fTAXAccOut: { public: true, type: 'TEXT' },
           fSortCode: { public: true, type: 'TEXT' },
           fForceBankVals: { public: true, type: 'INTEGER' },
           fBackOfficeAcc: { public: true, type: 'TEXT' },
           fDiffrenceAcc: { public: true, type: 'TEXT' },
           fBankCode: { public: true, type: 'TEXT' },
           fChangeAcc: { public: true, type: 'TEXT' } } } } }