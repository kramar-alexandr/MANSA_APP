module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fPLCode: { public: true, type: 'TEXT' },
     fARAcc: { public: true, type: 'TEXT' },
     fRebCode: { public: true, type: 'TEXT' },
     fComCode: { public: true, type: 'TEXT' },
     fOnAccAcc: { public: true, type: 'TEXT' },
     fDownPayPerc: { public: true, type: 'FLOAT' },
     fWebOrderClass: { public: true, type: 'TEXT' },
     fMainDispGroup: { public: true, type: 'TEXT' },
     fWebDisplays: { public: true, type: 'TEXT' },
     fBadARAcc: { public: true, type: 'TEXT' },
     fAccAP: { public: true, type: 'TEXT' },
     fRetainAcc: { public: true, type: 'TEXT' },
     fOnAccAccAP: { public: true, type: 'TEXT' },
     fClassType: { public: true, type: 'TEXT' },
     fWebOTCode: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex73: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } 
}