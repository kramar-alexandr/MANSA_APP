module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fIVSave: { public: true, type: 'INTEGER' },
     fORSave: { public: true, type: 'INTEGER' },
     fSHSave: { public: true, type: 'INTEGER' },
     fIVPaste: { public: true, type: 'INTEGER' },
     fORPaste: { public: true, type: 'INTEGER' },
     fSTRSave: { public: true, type: 'INTEGER' },
     fSORPaste: { public: true, type: 'INTEGER' },
     fSTRPaste: { public: true, type: 'INTEGER' },
     fBase: { public: true, type: 'INTEGER' },
     fSHPaste: { public: true, type: 'INTEGER' },
     fOwnCheques: { public: true, type: 'INTEGER' },
     fThirdCheques: { public: true, type: 'INTEGER' },
     fIOUCheques: { public: true, type: 'INTEGER' },
     fThirdIOUCheques: { public: true, type: 'INTEGER' },
     fORSaveWarn: { public: true, type: 'INTEGER' } } }