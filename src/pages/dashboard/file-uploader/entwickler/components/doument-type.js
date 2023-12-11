import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const DocumentType = (props) => {
  const { t } = useTranslation();
  const [selecteddokumentType, setSelecteddokumentType] = useState('');
  const [customdokumentType, setCustomdokumentType] = useState('');
  const [dokumentTypeList, setdokumentTypeList] = useState([
    {value: 'OM1000KONTOWF', label: 'OM1000KONTOWF: Cf Dc MultiPart Document Output Options'},
    {value: 'CLASSIC', label: 'CLASSIC: DOCDEF'},
    {value: 'OM0001', label: 'OM0001: OM001 - Ex Post Kosteninformation - aggregiert - unused'},
    {value: 'OM0002', label: 'OM0002: OM002 - Ex Post Kosteninformation - detailliert'},
    {value: 'OM0003', label: 'OM0003: OM_0003A - ExAnte Kosteninformation'},
    {value: 'OM0004A', label: 'OM0004A: OM_0004A_FodB_Briefe FA-Meldung'},
    {value: 'OM0005', label: 'OM0005: OM0005- Verlustschwellenreport'},
    {value: 'OM0005A', label: 'OM0005A: OM_0005A - FodB - Verlustschwellenreport'},
    {value: 'OM0005B', label: 'OM0005B: OM_0005B - AGI - Verlustschwellenreport'},
    {value: 'OM0006A', label: 'OM0006A: OM_0006A_FodB_Depotabrechnung WPUE Anschaffungsdaten1'},
    {value: 'OM0007A', label: 'OM0007A: OM_0007A_FodB_Depotabrechnung BeProRV'},
    {value: 'OM0008A', label: 'OM0008A: OM_0008A_FodB_Depotabrechnung Übertrag'},
    {value: 'OM0009A', label: 'OM0009A: DocRef: OM_0008A_FodB_Depotabrechnung Übertrag'},
    {value: 'OM0009B', label: 'OM0009B: OM_0009A_FodB_Briefe KEST Kapitalertragsteueranforderung'},
    {value: 'OM0010A', label: 'OM0010A: OM_0010A_FodB_Depotabrechnung Kauf'},
    {value: 'OM0011A', label: 'OM0011A: OM_0011A_FodB_Depotabrechnung Fondsmerge'},
    {value: 'OM0012A', label: 'OM0012A: OM_0012A_FodB_Depotabrechnung Ausschüttung'},
    {value: 'OM0013A', label: 'OM0013A: OM_0013A_FodB_Depotabrechnung Fondssplit'},
    {value: 'OM0014A', label: 'OM0014A: OM_0014A_FodB_Depotabrechnung VAP'},
    {value: 'OM0015A', label: 'OM0015A: OM_0015A_FodB_Depotabrechnung Umsatzübersicht'},
    {value: 'OM0016A', label: 'OM0016A: OM_0016A_FodB_Depotabrechnung VAP/Erweiteterter Depotauszug'},
    {value: 'OM0017A', label: 'OM0017A: OM_0017A_FodB_Depotabrechnung Verkauf'},
    {value: 'OM0017AOM0028A', label: 'OM0017AOM0028A: Cf Dc MultiPart Document Output Options'},
    {value: 'OM0021C', label: 'OM0021C: OM_0021C_AXA_Geldkontoauszug'},
    {value: 'OM0022A', label: 'OM0022A: OM_0022A_FodB_Wechsel Teilfreistellung'},
    {value: 'OM0023A', label: 'OM0023A: OM_0023A_FodB_Steuerverprobung'},
    {value: 'OM0023B', label: 'OM0023B: OM_0023B_FodB_Steuerverprobung Listenblatt'},
    {value: 'OM0023BOM0023C', label: 'OM0023BOM0023C: Cf Dc MultiPart Document Output Options'},
    {value: 'OM0023C', label: 'OM0023C: OM_0023C_FodB_Steuerverprobung Listenblatt Summenblock'},
    {value: 'OM0024A', label: 'OM0024A: OM_0024A_FodB_Alternative_Taxbox'},
    {value: 'OM0025A', label: 'OM0025A: OM_0025A_FodB_Bestandsprovision Vermittler'},
    {value: 'OM0025B', label: 'OM0025B: OM_0025B_FodB_Bestandsprovision VO'},
    {value: 'OM0026A', label: 'OM0026A: OM_0026A_FodB_Umsatzprovision'},
    {value: 'OM0026B', label: 'OM0026B: OM_0026B_FodB_Umsatzprovision VO'},
    {value: 'OM0027A', label: 'OM0027A: OM_0027A_FodB_Quartalsauszug'},
    {value: 'OM0027B', label: 'OM0027B: OM_0027B_FodB_Jahresdepotauszug_Gold'},
    {value: 'OM0028A', label: 'OM0028A: OM_0028A_FodB_erweiterter Depotauszug'},
    {value: 'OM8001A', label: 'OM8001A: OM_8001A AXA Report VV'},
    {value: 'OM8002A', label: 'OM8002A: OM_8002A AXA Report PPP'},
    {value: 'OM8003A', label: 'OM8003A: OM_8003A AKD Report'},
    {value: 'OM8004A', label: 'OM8004A: OM_8004A FODB Report VV'},
    {value: 'OM4001', label: 'OM4001: OM_4001 DAXA FestgeldFw'},
    {value: 'OM4002', label: 'OM4002: OM_4002 Target-Kontoauszug'},

  ]);

  const [showCustomInput, setShowCustomInput] = useState(false);
  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setCustomdokumentType(inputText);
    setSelecteddokumentType(inputText);
  };

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === 'custom') {
      setSelecteddokumentType('');
      setCustomdokumentType('');
    } else {
      setSelecteddokumentType(selectedValue);
    }
  };

  const handleBlur = () => {
    const trimmedCustomdokumentType = customdokumentType.trim();

    if (
      trimmedCustomdokumentType &&
      !dokumentTypeList.some((option) => option.value === trimmedCustomdokumentType)
    ) {
      setdokumentTypeList([...dokumentTypeList, { label: trimmedCustomdokumentType, value: trimmedCustomdokumentType }]);
    }
  };


  return (
    <div>
    <label htmlFor="dokumentType" className="block mb-2 text-sm font-medium text-black dark:text-white">
      dokumentType
    </label>
    <div className="w-[250px]">
     
    <select
      id="dokumentType"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-120 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      {...props.register('dokumentType')}
      value={selecteddokumentType}
      onChange={handleOptionChange}
    >
      {dokumentTypeList.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
     
    </select>
    <input
        type="text"
        value={customdokumentType}
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder="dokumentType neue Value"
        className="mt-4 bg-gray-50 border-2 border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-120 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  </div>
);
};
export default DocumentType;
