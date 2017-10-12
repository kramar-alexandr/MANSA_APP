module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fCostAcc: { public: true, type: 'TEXT' },
     fInvAcc: { public: true, type: 'TEXT' },
     fCostPerc: { public: true, type: 'FLOAT' },
     fPrimaryCostModel: { public: true, type: 'INTEGER' },
     fSign: { public: true, type: 'TEXT' },
     fSalesAcc: { public: true, type: 'TEXT' },
     fVATCodeDom: { public: true, type: 'TEXT' },
     fVATCodeEU: { public: true, type: 'TEXT' },
     fVATCodeExp: { public: true, type: 'TEXT' },
     fEUSalesAcc: { public: true, type: 'TEXT' },
     fExpSalesAcc: { public: true, type: 'TEXT' },
     fExclFrLabPr: { public: true, type: 'INTEGER' },
     fInternal: { public: true, type: 'INTEGER' },
     fInclItemFreight: { public: true, type: 'INTEGER' },
     fFixedFreight: { public: true, type: 'FLOAT' },
     fSwapAccounts: { public: true, type: 'INTEGER' },
     fPeriodCode: { public: true, type: 'TEXT' },
     fPurchAcc: { public: true, type: 'TEXT' },
     fCredSalesAcc: { public: true, type: 'TEXT' },
     fCredEUSalesAcc: { public: true, type: 'TEXT' },
     fCredExpSalesAcc: { public: true, type: 'TEXT' },
     fCredVATCodeDom: { public: true, type: 'TEXT' },
     fCredVATCodeEU: { public: true, type: 'TEXT' },
     fCredVATCodeExp: { public: true, type: 'TEXT' },
     fEUCodex: { public: true, type: 'TEXT' },
     fWIPAcc: { public: true, type: 'TEXT' },
     fType: { public: true, type: 'INTEGER' },
     fCompUsage: { public: true, type: 'TEXT' },
     fMathMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLangCode: { public: true, type: 'TEXT' },
           fText: { public: true, type: 'TEXT' } } },
     fPriceVarianceAcc: { public: true, type: 'TEXT' },
     fUsageVarianceAcc: { public: true, type: 'TEXT' },
     fClassType: { public: true, type: 'TEXT' },
     fEUCostAcc: { public: true, type: 'TEXT' },
     fExpCostAcc: { public: true, type: 'TEXT' },
     fEUPurchAcc: { public: true, type: 'TEXT' },
     fExpPurchAcc: { public: true, type: 'TEXT' },
     fObjects: { public: true, type: 'TEXT' },
     fProdControl: { public: true, type: 'TEXT' },
     fProdWCostAcc: { public: true, type: 'TEXT' },
     fQueuedCostModel: { public: true, type: 'INTEGER' },
     fFIFOPerSerialNr: { public: true, type: 'INTEGER' },
     fFIFOPerLocation: { public: true, type: 'INTEGER' },
     fWAPerLocation: { public: true, type: 'INTEGER' },
     fCostPricePerLocation: { public: true, type: 'INTEGER' },
     fTaxTemplateCode: { public: true, type: 'TEXT' },
     fTaxTemplateCodeEU: { public: true, type: 'TEXT' },
     fTaxTemplateCodeExp: { public: true, type: 'TEXT' },
     fDiscountAcc: { public: true, type: 'TEXT' },
     fHotelWIPAcc: { public: true, type: 'TEXT' },
     fSVOInvbleSalesAcc: { public: true, type: 'TEXT' },
     fSVOWarrantySalesAcc: { public: true, type: 'TEXT' },
     fSVOContractSalesAcc: { public: true, type: 'TEXT' },
     fSVOGoodwillSalesAcc: { public: true, type: 'TEXT' },
     fSVOInvbleCostAcc: { public: true, type: 'TEXT' },
     fSVOWarrantyCostAcc: { public: true, type: 'TEXT' },
     fSVOContractCostAcc: { public: true, type: 'TEXT' },
     fSVOGoodwillCostAcc: { public: true, type: 'TEXT' },
     fCPSCode: { public: true, type: 'TEXT' },
     fProjMaterialsUsageAcc: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }