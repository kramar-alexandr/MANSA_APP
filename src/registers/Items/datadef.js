module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fUnittext: { public: true, type: 'TEXT' },
     fMinLevel: { public: true, type: 'FLOAT' },
     fObjects: { public: true, type: 'TEXT' },
     fSalesAcc: { public: true, type: 'TEXT' },
     fUPrice1: { public: true, type: 'FLOAT' },
     fItemType: { public: true, type: 'INTEGER' },
     fGroup: { public: true, type: 'TEXT' },
     fX1: { public: true, type: 'TEXT' },
     fX2: { public: true, type: 'TEXT' },
     fInPrice: { public: true, type: 'FLOAT' },
     fInvCode: { public: true, type: 'TEXT' },
     fExtraCost: { public: true, type: 'FLOAT' },
     fSerNrf: { public: true, type: 'INTEGER' },
     fDepartment: { public: true, type: 'TEXT' },
     fWeight: { public: true, type: 'FLOAT' },
     fVolume: { public: true, type: 'FLOAT' },
     fEUCodex: { public: true, type: 'TEXT' },
     fInCurncyCode: { public: true, type: 'TEXT' },
     fBonus: { public: true, type: 'FLOAT' },
     fRecepy: { public: true, type: 'TEXT' },
     fMarkup: { public: true, type: 'FLOAT' },
     fX3: { public: true, type: 'TEXT' },
     fBarCode: { public: true, type: 'TEXT' },
     fUpdateCost: { public: true, type: 'INTEGER' },
     fLastPriceChange: { public: true, type: 'DATE' },
     fCalcPrice: { public: true, type: 'TEXT' },
     fVATCode: { public: true, type: 'TEXT' },
     fPriceFactor: { public: true, type: 'FLOAT' },
     fTerminated: { public: true, type: 'INTEGER' },
     fAvgMarkup: { public: true, type: 'FLOAT' },
     fLastPurchPrice: { public: true, type: 'FLOAT' },
     fLastPurchCurncyCode: { public: true, type: 'TEXT' },
     fWeighedAvPrice: { public: true, type: 'FLOAT' },
     fConversion1: { public: true, type: 'FLOAT' },
     fConversion2: { public: true, type: 'FLOAT' },
     fWarrantyLength: { public: true, type: 'FLOAT' },
     fMathMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLangCode: { public: true, type: 'TEXT' },
           fText: { public: true, type: 'TEXT' } 
         } 
       },
     fInvRecepy: { public: true, type: 'TEXT' },
     fEUSalesAcc: { public: true, type: 'TEXT' },
     fExpSalesAcc: { public: true, type: 'TEXT' },
     fVATCodeEU: { public: true, type: 'TEXT' },
     fVATCodeExp: { public: true, type: 'TEXT' },
     fChangePrice: { public: true, type: 'INTEGER' },
     fRebCode: { public: true, type: 'TEXT' },
     fExplodeRec: { public: true, type: 'INTEGER' },
     fUnittext2: { public: true, type: 'TEXT' },
     fUnitCoefficient: { public: true, type: 'FLOAT' },
     fWarnText1: { public: true, type: 'TEXT' },
     fVARList: { public: true, type: 'TEXT' },
     fItemMaterial: { public: true, type: 'INTEGER' },
     fAlcPrc: { public: true, type: 'FLOAT' },
     fDefaultSource: { public: true, type: 'TEXT' },
     fAlternativeCode: { public: true, type: 'TEXT' },
     fCostAcc: { public: true, type: 'TEXT' },
     fDefLocation: { public: true, type: 'TEXT' },
     fLastBasePriceChange: { public: true, type: 'DATE' },
     fMaxLevel: { public: true, type: 'FLOAT' },
     fLastPurchPrice2: { public: true, type: 'FLOAT' },
     fWidth: { public: true, type: 'FLOAT' },
     fHeight: { public: true, type: 'FLOAT' },
     fDepth: { public: true, type: 'FLOAT' },
     fContractItem: { public: true, type: 'TEXT' },
     fInternal: { public: true, type: 'INTEGER' },
     fInclItemFreight: { public: true, type: 'INTEGER' },
     fFixedFreight: { public: true, type: 'FLOAT' },
     fDispGroups: { public: true, type: 'TEXT' },
     fHazLevCode: { public: true, type: 'TEXT' },
     fDensity: { public: true, type: 'FLOAT' },
     fXClassification: { public: true, type: 'TEXT' },
     fCredSalesAcc: { public: true, type: 'TEXT' },
     fCredEUSalesAcc: { public: true, type: 'TEXT' },
     fCredExpSalesAcc: { public: true, type: 'TEXT' },
     fCredVATCode: { public: true, type: 'TEXT' },
     fCredVATCodeEU: { public: true, type: 'TEXT' },
     fCredVATCodeExp: { public: true, type: 'TEXT' },
     fRentalItem: { public: true, type: 'TEXT' },
     fCompUsage: { public: true, type: 'TEXT' },
     fColnr: { public: true, type: 'INTEGER' },
     fVARMask: { public: true, type: 'TEXT' },
     fVARRepOrder: { public: true, type: 'TEXT' },
     fVARSubsets: { public: true, type: 'TEXT' },
     fLocArea: { public: true, type: 'TEXT' },
     fEKNCode: { public: true, type: 'TEXT' },
     fDefPalletItem: { public: true, type: 'TEXT' },
     fQtyonPallet: { public: true, type: 'FLOAT' },
     fPalletWidth: { public: true, type: 'FLOAT' },
     fPalletHeight: { public: true, type: 'FLOAT' },
     fPalletDepth: { public: true, type: 'FLOAT' },
     fBrand: { public: true, type: 'TEXT' },
     fBrandType: { public: true, type: 'TEXT' },
     fPickArea: { public: true, type: 'TEXT' },
     fSWWCode: { public: true, type: 'TEXT' },
     fRepaPricePerWeight: { public: true, type: 'FLOAT' },
     fPalletsInPickArea: { public: true, type: 'FLOAT' },
     fDefPosWidth: { public: true, type: 'FLOAT' },
     fDefPosHeight: { public: true, type: 'FLOAT' },
     fDefPosDepth: { public: true, type: 'FLOAT' },
     fInPriceB2: { public: true, type: 'FLOAT' },
     fWeighedAvPriceB2: { public: true, type: 'FLOAT' },
     fEUCostAcc: { public: true, type: 'TEXT' },
     fExpCostAcc: { public: true, type: 'TEXT' },
     fPalletLayers: { public: true, type: 'FLOAT' },
     fQtyonPalletLayer: { public: true, type: 'FLOAT' },
     fUserStr1: { public: true, type: 'TEXT' },
     fUserStr2: { public: true, type: 'TEXT' },
     fUserStr3: { public: true, type: 'TEXT' },
     fUserStr4: { public: true, type: 'TEXT' },
     fUserStr5: { public: true, type: 'TEXT' },
     fUserVal1: { public: true, type: 'FLOAT' },
     fUserVal2: { public: true, type: 'FLOAT' },
     fUserVal3: { public: true, type: 'FLOAT' },
     fUserDate1: { public: true, type: 'DATE' },
     fUserDate2: { public: true, type: 'DATE' },
     fUserDate3: { public: true, type: 'DATE' },
     fRentGroup: { public: true, type: 'TEXT' },
     fFAGroup: { public: true, type: 'TEXT' },
     fNetWeight: { public: true, type: 'FLOAT' },
     fPrimaryCostModel: { public: true, type: 'INTEGER' },
     fQueuedCostModel: { public: true, type: 'INTEGER' },
     fCostPerc: { public: true, type: 'FLOAT' },
     fFIFOPerSerialNr: { public: true, type: 'INTEGER' },
     fFIFOPerLocation: { public: true, type: 'INTEGER' },
     fWAPerLocation: { public: true, type: 'INTEGER' },
     fCostPricePerLocation: { public: true, type: 'INTEGER' },
     fNotForSales: { public: true, type: 'INTEGER' },
     fSRUpdateCost: { public: true, type: 'INTEGER' },
     fSuppSerialNr: { public: true, type: 'TEXT' },
     fMajStoneDet: { public: true, type: 'TEXT' },
     fColour: { public: true, type: 'TEXT' },
     fClarity: { public: true, type: 'TEXT' },
     fCert: { public: true, type: 'TEXT' },
     fMinStoneDet: { public: true, type: 'TEXT' },
     fMetal: { public: true, type: 'TEXT' },
     fRowWeight: { public: true, type: 'TEXT' },
     fSize: { public: true, type: 'TEXT' },
     fLength: { public: true, type: 'TEXT' },
     fWatchBrand: { public: true, type: 'TEXT' },
     fStyleName: { public: true, type: 'TEXT' },
     fWatchMetal: { public: true, type: 'TEXT' },
     fMovement: { public: true, type: 'TEXT' },
     fBrcStr: { public: true, type: 'TEXT' },
     fGender: { public: true, type: 'TEXT' },
     fOther: { public: true, type: 'TEXT' },
     fOther2: { public: true, type: 'TEXT' },
     fReference: { public: true, type: 'TEXT' },
     fPerceptions: { public: true, type: 'INTEGER' },
     fWithholdings: { public: true, type: 'INTEGER' },
     fTaxTemplateCode: { public: true, type: 'TEXT' },
     fTaxTemplateCodeEU: { public: true, type: 'TEXT' },
     fTaxTemplateCodeExp: { public: true, type: 'TEXT' },
     fDonotRequireBatchNrOnIVCash: { public: true, type: 'INTEGER' },
     fHotelWIPAcc: { public: true, type: 'TEXT' },
     fCPSCode: { public: true, type: 'TEXT' },
     fSVOInvbleSalesAcc: { public: true, type: 'TEXT' },
     fSVOWarrantySalesAcc: { public: true, type: 'TEXT' },
     fSVOContractSalesAcc: { public: true, type: 'TEXT' },
     fSVOGoodwillSalesAcc: { public: true, type: 'TEXT' },
     fSVOInvbleCostAcc: { public: true, type: 'TEXT' },
     fSVOWarrantyCostAcc: { public: true, type: 'TEXT' },
     fSVOContractCostAcc: { public: true, type: 'TEXT' },
     fSVOGoodwillCostAcc: { public: true, type: 'TEXT' },
     fHasExcise: { public: true, type: 'INTEGER' },
     fProjMaterialsUsageAcc: { public: true, type: 'TEXT' },
     fDefOrderType: { public: true, type: 'INTEGER' },
     fMath2: { public: true, type: 'TEXT' },
     fStockItemType: { public: true, type: 'INTEGER' },
     fSortCode: { public: true, type: 'TEXT' },
     fRvrsVATCode: { public: true, type: 'TEXT' } 
   },
  indexes: { CodeIndex98: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }