angular.module('dataGrid').controller('preview', function ($scope) {
    $scope.shares = [
        { 'Ticker':'ACIW', 'Industry':'Technical & System Software', 'Market_Cap':'1,837.89', 'Price':'£47.04', 'Change':'1.01%', 'Volume':'51,718.00' },
        { 'Ticker':'ACXM', 'Industry':'Information Technology Services', 'Market_Cap':'1,754.84', 'Price':'£23.95', 'Change':'0.55%', 'Volume':'114,570.00' },
        { 'Ticker':'ADBE', 'Industry':'Application Software', 'Market_Cap':'23,170.76', 'Price':'£46.61', 'Change':'1.26%', 'Volume':'808,302.00' },
        { 'Ticker':'ADI', 'Industry':'Semiconductor - Integrated Circuits', 'Market_Cap':'13,930.29', 'Price':'£45.80', 'Change':'1.08%', 'Volume':'339,210.00' },
        { 'Ticker':'ADP', 'Industry':'Business Software & Services', 'Market_Cap':'33,827.62', 'Price':'£70.28', 'Change':'0.29%', 'Volume':'481,525.00' },
        { 'Ticker':'ADSK', 'Industry':'Technical & System Software', 'Market_Cap':'7,495.06', 'Price':'£33.53', 'Change':'0.12%', 'Volume':'1,156,350.00' },
        { 'Ticker':'ADTN', 'Industry':'Communication Equipment', 'Market_Cap':'1,557.31', 'Price':'£24.83', 'Change':'-1.39%', 'Volume':'310,397.00' },
        { 'Ticker':'ADVS', 'Industry':'Application Software', 'Market_Cap':'1,777.29', 'Price':'£35.08', 'Change':'-0.20%', 'Volume':'40,206.00' },
        { 'Ticker':'AKAM', 'Industry':'Internet Information Providers', 'Market_Cap':'7,569.60', 'Price':'£42.78', 'Change':'0.54%', 'Volume':'256,017.00' },
        { 'Ticker':'AMSWA', 'Industry':'Application Software', 'Market_Cap':'239.30', 'Price':'£8.80', 'Change':'0.00%', 'Volume':'1,435.00' },
        { 'Ticker':'ARRS', 'Industry':'Communication Equipment', 'Market_Cap':'1,673.13', 'Price':'£14.47', 'Change':'-0.45%', 'Volume':'420,539.00' },
        { 'Ticker':'ATNI', 'Industry':'Telecom Services - Domestic', 'Market_Cap':'782.21', 'Price':'£49.70', 'Change':'-0.96%', 'Volume':'21,063.00' },
        { 'Ticker':'AWAY', 'Industry':'Internet Information Providers', 'Market_Cap':'2,644.11', 'Price':'£31.54', 'Change':'0.13%', 'Volume':'193,553.00' },
        { 'Ticker':'AYI', 'Industry':'Diversified Electronics', 'Market_Cap':'3,426.52', 'Price':'£81.35', 'Change':'-0.05%', 'Volume':'246,730.00' },
        { 'Ticker':'AZPN', 'Industry':'Business Software & Services', 'Market_Cap':'2,745.35', 'Price':'£29.57', 'Change':'0.96%', 'Volume':'99,726.00' },
        { 'Ticker':'BIO', 'Industry':'Scientific & Technical Instruments', 'Market_Cap':'3,212.41', 'Price':'£113.35', 'Change':'0.54%', 'Volume':'7,010.00' },
        { 'Ticker':'BIRT', 'Industry':'Application Software', 'Market_Cap':'324.73', 'Price':'£6.79', 'Change':'0.74%', 'Volume':'15,432.00' },
        { 'Ticker':'BLKB', 'Industry':'Business Software & Services', 'Market_Cap':'1,465.86', 'Price':'£33.18', 'Change':'0.67%', 'Volume':'26,108.00' },
        { 'Ticker':'BMI', 'Industry':'Scientific & Technical Instruments', 'Market_Cap':'632.14', 'Price':'£44.22', 'Change':'-1.05%', 'Volume':'24,404.00' },
        { 'Ticker':'BR', 'Industry':'Information & Delivery Services', 'Market_Cap':'3,263.92', 'Price':'£27.12', 'Change':'0.71%', 'Volume':'72,660.00' },
        { 'Ticker':'BRC', 'Industry':'Security Software & Services', 'Market_Cap':'1,591.29', 'Price':'£30.94', 'Change':'-0.03%', 'Volume':'12,875.00' },
        { 'Ticker':'BRCD', 'Industry':'Data Storage Devices', 'Market_Cap':'2,591.92', 'Price':'£5.77', 'Change':'0.87%', 'Volume':'1,528,631.00' },
        { 'Ticker':'BRKR', 'Industry':'Scientific & Technical Instruments', 'Market_Cap':'2,657.41', 'Price':'£15.48', 'Change':'-3.07%', 'Volume':'524,986.00' },
        { 'Ticker':'BSFT', 'Industry':'Application Software', 'Market_Cap':'800.34', 'Price':'£28.88', 'Change':'0.94%', 'Volume':'134,468.00' },
        { 'Ticker':'CCI', 'Industry':'Diversified Communication Services', 'Market_Cap':'21,005.92', 'Price':'£72.40', 'Change':'0.33%', 'Volume':'384,132.00' },
        { 'Ticker':'CCMP', 'Industry':'Semiconductor - Integrated Circuits', 'Market_Cap':'779.51', 'Price':'£34.26', 'Change':'0.97%', 'Volume':'21,814.00' },
        { 'Ticker':'CCUR', 'Industry':'Computer Based Systems', 'Market_Cap':'66.36', 'Price':'£7.60', 'Change':'0.26%', 'Volume':'25,849.00' },
        { 'Ticker':'CEVA', 'Industry':'Semiconductor - Specialized', 'Market_Cap':'445.94', 'Price':'£20.11', 'Change':'0.10%', 'Volume':'47,788.00' },
        { 'Ticker':'CGNX', 'Industry':'Scientific & Technical Instruments', 'Market_Cap':'2,053.17', 'Price':'£47.00', 'Change':'-0.97%', 'Volume':'76,885.00' },
        { 'Ticker':'CNSL', 'Industry':'Telecom Services - Domestic', 'Market_Cap':'695.71', 'Price':'£17.57', 'Change':'0.37%', 'Volume':'32,918.00' },
        { 'Ticker':'CODE', 'Industry':'Semiconductor- Memory Chips', 'Market_Cap':'738.27', 'Price':'£12.75', 'Change':'0.31%', 'Volume':'9,513.00' },
        { 'Ticker':'CREE', 'Industry':'Semiconductor Equipment & Materials', 'Market_Cap':'7,775.69', 'Price':'£67.06', 'Change':'0.63%', 'Volume':'624,001.00' },
        { 'Ticker':'CTL', 'Industry':'Telecom Services - Domestic', 'Market_Cap':'21,828.47', 'Price':'£35.35', 'Change':'0.31%', 'Volume':'868,393.00' },
        { 'Ticker':'CTRX', 'Industry':'Application Software', 'Market_Cap':'9,869.75', 'Price':'£47.50', 'Change':'-1.06%', 'Volume':'367,450.00' },
        { 'Ticker':'CTS', 'Industry':'Diversified Electronics', 'Market_Cap':'462.28', 'Price':'£13.78', 'Change':'-0.07%', 'Volume':'11,416.00' },
        { 'Ticker':'CTXS', 'Industry':'Business Software & Services', 'Market_Cap':'11,404.80', 'Price':'£61.64', 'Change':'0.88%', 'Volume':'487,445.00' },
        { 'Ticker':'CVLT', 'Industry':'Application Software', 'Market_Cap':'3,492.57', 'Price':'£76.76', 'Change':'1.64%', 'Volume':'71,791.00' },
        { 'Ticker':'DBD', 'Industry':'Application Software', 'Market_Cap':'2,163.34', 'Price':'£34.04', 'Change':'-0.38%', 'Volume':'83,696.00' },
        { 'Ticker':'DELL', 'Industry':'Personal Computers', 'Market_Cap':'23,388.24', 'Price':'£13.32', 'Change':'-0.45%', 'Volume':'22,162,924.00' },
        { 'Ticker':'DGII', 'Industry':'Networking & Communication Devices', 'Market_Cap':'248.05', 'Price':'£9.51', 'Change':'0.21%', 'Volume':'10,912.00' },
        { 'Ticker':'DIOD', 'Industry':'Semiconductor - Integrated Circuits', 'Market_Cap':'1,217.26', 'Price':'£26.69', 'Change':'0.91%', 'Volume':'221,532.00' },
        { 'Ticker':'DMD', 'Industry':'Internet Software & Services', 'Market_Cap':'540.50', 'Price':'£6.18', 'Change':'-0.96%', 'Volume':'636,234.00' },
        { 'Ticker':'EA', 'Industry':'Multimedia & Graphics Software', 'Market_Cap':'7,079.52', 'Price':'£23.37', 'Change':'-0.64%', 'Volume':'1,060,810.00' },
        { 'Ticker':'EDGW', 'Industry':'Information Technology Services', 'Market_Cap':'47.86', 'Price':'£4.43', 'Change':'0.68%', 'Volume':'9,291.00' },
        { 'Ticker':'EGHT', 'Industry':'Communication Equipment', 'Market_Cap':'605.50', 'Price':'£8.38', 'Change':'-0.36%', 'Volume':'164,804.00' },
        { 'Ticker':'EGOV', 'Industry':'Application Software', 'Market_Cap':'1,101.36', 'Price':'£17.04', 'Change':'0.12%', 'Volume':'79,032.00' },
        { 'Ticker':'EMAN', 'Industry':'Semiconductor Equipment & Materials', 'Market_Cap':'82.58', 'Price':'£3.54', 'Change':'0.85%', 'Volume':'8,296.00' },
        { 'Ticker':'EMR', 'Industry':'Diversified Electronics', 'Market_Cap':'39,922.90', 'Price':'£55.03', 'Change':'-0.69%', 'Volume':'943,896.00' },
        { 'Ticker':'EPIQ', 'Industry':'Information Technology Services', 'Market_Cap':'478.46', 'Price':'£13.42', 'Change':'-0.12%', 'Volume':'55,328.00' },
        { 'Ticker':'EQIX', 'Industry':'Internet Software & Services', 'Market_Cap':'9,093.41', 'Price':'£185.19', 'Change':'-0.15%', 'Volume':'189,648.00' },
        { 'Ticker':'ESE', 'Industry':'Scientific & Technical Instruments', 'Market_Cap':'858.29', 'Price':'£32.54', 'Change':'0.15%', 'Volume':'5,482.00' },
        { 'Ticker':'EXAR', 'Industry':'Semiconductor - Integrated Circuits', 'Market_Cap':'490.07', 'Price':'£11.20', 'Change':'1.82%', 'Volume':'31,279.00' },
        { 'Ticker':'FB', 'Industry':'Internet Information Providers', 'Market_Cap':'58,242.26', 'Price':'£24.68', 'Change':'1.11%', 'Volume':'7,067,118.00' },
        { 'Ticker':'FCS', 'Industry':'Semiconductor - Integrated Circuits', 'Market_Cap':'1,796.06', 'Price':'£14.25', 'Change':'0.92%', 'Volume':'131,359.00' },
        { 'Ticker':'FIRE', 'Industry':'Security Software & Services', 'Market_Cap':'1,686.67', 'Price':'£55.95', 'Change':'1.67%', 'Volume':'129,867.00' },
        { 'Ticker':'FTNT', 'Industry':'Application Software', 'Market_Cap':'2,796.63', 'Price':'£18.20', 'Change':'4.96%', 'Volume':'2,284,237.00' },
        { 'Ticker':'GKNT', 'Industry':'Internet Software & Services', 'Market_Cap':'91.87', 'Price':'£13.98', 'Change':'0.22%', 'Volume':'693.00' },
        { 'Ticker':'GSIT', 'Industry':'Semiconductor - Broad Line', 'Market_Cap':'164.67', 'Price':'£6.07', 'Change':'-0.25%', 'Volume':'13,098.00' },
        { 'Ticker':'GWAY', 'Industry':'Information Technology Services', 'Market_Cap':'350.34', 'Price':'£11.30', 'Change':'-4.24%', 'Volume':'56,947.00' },
        { 'Ticker':'GWRE', 'Industry':'Business Software & Services', 'Market_Cap':'2,485.98', 'Price':'£44.09', 'Change':'1.12%', 'Volume':'88,570.00' },
        { 'Ticker':'HRS', 'Industry':'Communication Equipment', 'Market_Cap':'5,454.79', 'Price':'£49.00', 'Change':'-0.65%', 'Volume':'139,174.00' },
        { 'Ticker':'HSTM', 'Industry':'Internet Information Providers', 'Market_Cap':'691.69', 'Price':'£26.39', 'Change':'0.50%', 'Volume':'34,772.00' },
        { 'Ticker':'HTCO', 'Industry':'Telecom Services - Domestic', 'Market_Cap':'142.76', 'Price':'£10.39', 'Change':'-1.33%', 'Volume':'3,341.00' },
        { 'Ticker':'IHS', 'Industry':'Information & Delivery Services', 'Market_Cap':'6,862.89', 'Price':'£104.84', 'Change':'0.65%', 'Volume':'239,662.00' },
        { 'Ticker':'INFA', 'Industry':'Business Software & Services', 'Market_Cap':'3,741.50', 'Price':'£35.17', 'Change':'1.21%', 'Volume':'197,200.00' },
        { 'Ticker':'ININ', 'Industry':'Business Software & Services', 'Market_Cap':'1,032.29', 'Price':'£52.42', 'Change':'0.06%', 'Volume':'6,195.00' },
        { 'Ticker':'IRM', 'Industry':'Business Software & Services', 'Market_Cap':'5,160.48', 'Price':'£26.92', 'Change':'-0.77%', 'Volume':'355,614.00' },
        { 'Ticker':'ITRI', 'Industry':'Scientific & Technical Instruments', 'Market_Cap':'1,620.56', 'Price':'£41.02', 'Change':'-0.22%', 'Volume':'120,162.00' },
        { 'Ticker':'JKHY', 'Industry':'Business Software & Services', 'Market_Cap':'4,088.98', 'Price':'£47.34', 'Change':'-0.29%', 'Volume':'83,582.00' },
        { 'Ticker':'JNPR', 'Industry':'Networking & Communication Devices', 'Market_Cap':'9,654.91', 'Price':'£19.26', 'Change':'0.68%', 'Volume':'816,831.00' },
        { 'Ticker':'KEYN', 'Industry':'Internet Software & Services', 'Market_Cap':'360.03', 'Price':'£19.82', 'Change':'0.05%', 'Volume':'178,613.00' },
        { 'Ticker':'LDR', 'Industry':'Scientific & Technical Instruments', 'Market_Cap':'459.93', 'Price':'£49.00', 'Change':'0.33%', 'Volume':'4,528.00' },
        { 'Ticker':'LLTC', 'Industry':'Semiconductor - Specialized', 'Market_Cap':'8,732.49', 'Price':'£37.06', 'Change':'0.71%', 'Volume':'379,861.00' },
        { 'Ticker':'LMOS', 'Industry':'Diversified Communication Services', 'Market_Cap':'372.24', 'Price':'£17.66', 'Change':'0.51%', 'Volume':'32,972.00' },
        { 'Ticker':'LNKD', 'Industry':'Internet Information Providers', 'Market_Cap':'19,951.82', 'Price':'£188.69', 'Change':'3.51%', 'Volume':'911,208.00' },
        { 'Ticker':'LRCX', 'Industry':'Semiconductor Equipment & Materials', 'Market_Cap':'7,290.88', 'Price':'£45.08', 'Change':'0.81%', 'Volume':'474,816.00' },
        { 'Ticker':'LSI', 'Industry':'Semiconductor - Specialized', 'Market_Cap':'3,961.63', 'Price':'£7.26', 'Change':'0.90%', 'Volume':'1,730,343.00' },
        { 'Ticker':'MANH', 'Industry':'Application Software', 'Market_Cap':'1,534.76', 'Price':'£80.60', 'Change':'1.50%', 'Volume':'10,745.00' },
        { 'Ticker':'MCHP', 'Industry':'Semiconductor - Specialized', 'Market_Cap':'7,336.79', 'Price':'£37.82', 'Change':'0.99%', 'Volume':'393,491.00' },
        { 'Ticker':'MCRL', 'Industry':'Semiconductor - Integrated Circuits', 'Market_Cap':'583.87', 'Price':'£10.14', 'Change':'1.20%', 'Volume':'127,804.00' },
        { 'Ticker':'MDAS', 'Industry':'Healthcare Information Services', 'Market_Cap':'1,036.15', 'Price':'£17.51', 'Change':'-0.28%', 'Volume':'102,743.00' },
        { 'Ticker':'MDSO', 'Industry':'Healthcare Information Services', 'Market_Cap':'1,968.91', 'Price':'£78.17', 'Change':'-0.27%', 'Volume':'26,104.00' },
        { 'Ticker':'MENT', 'Industry':'Technical & System Software', 'Market_Cap':'2,144.89', 'Price':'£19.14', 'Change':'0.58%', 'Volume':'188,806.00' },
        { 'Ticker':'MKTG', 'Industry':'Application Software', 'Market_Cap':'690.18', 'Price':'£14.11', 'Change':'0.28%', 'Volume':'143,802.00' },
        { 'Ticker':'MORN', 'Industry':'Information & Delivery Services', 'Market_Cap':'3,619.20', 'Price':'£77.91', 'Change':'-0.10%', 'Volume':'14,456.00' },
        { 'Ticker':'MOVE', 'Industry':'Internet Information Providers', 'Market_Cap':'506.01', 'Price':'£12.97', 'Change':'0.23%', 'Volume':'109,359.00' },
        { 'Ticker':'MPWR', 'Industry':'Semiconductor - Specialized', 'Market_Cap':'872.03', 'Price':'£24.48', 'Change':'1.79%', 'Volume':'46,812.00' },
        { 'Ticker':'MSCC', 'Industry':'Semiconductor - Integrated Circuits', 'Market_Cap':'2,041.12', 'Price':'£22.86', 'Change':'0.13%', 'Volume':'135,416.00' },
        { 'Ticker':'MSFT', 'Industry':'Business Software & Services', 'Market_Cap':'283,874.15', 'Price':'£34.08', 'Change':'0.40%', 'Volume':'9,739,719.00' },
        { 'Ticker':'MSTR', 'Industry':'Business Software & Services', 'Market_Cap':'1,003.00', 'Price':'£89.07', 'Change':'0.30%', 'Volume':'6,955.00' },
        { 'Ticker':'MTSC', 'Industry':'Scientific & Technical Instruments', 'Market_Cap':'905.33', 'Price':'£57.77', 'Change':'0.33%', 'Volume':'14,395.00' },
        { 'Ticker':'NATI', 'Industry':'Technical & System Software', 'Market_Cap':'3,411.88', 'Price':'£27.73', 'Change':'0.22%', 'Volume':'48,960.00' },
        { 'Ticker':'NCR', 'Industry':'Information Technology Services', 'Market_Cap':'5,454.48', 'Price':'£33.00', 'Change':'-0.96%', 'Volume':'356,436.00' },
        { 'Ticker':'NLSN', 'Industry':'Information & Delivery Services', 'Market_Cap':'12,588.70', 'Price':'£33.94', 'Change':'-0.10%', 'Volume':'1,013,942.00' },
        { 'Ticker':'NTAP', 'Industry':'Data Storage Devices', 'Market_Cap':'13,726.97', 'Price':'£38.48', 'Change':'0.50%', 'Volume':'1,236,924.00' },
        { 'Ticker':'NTGR', 'Industry':'Communication Equipment', 'Market_Cap':'1,211.02', 'Price':'£31.89', 'Change':'1.21%', 'Volume':'139,623.00' },
        { 'Ticker':'NUAN', 'Industry':'Application Software', 'Market_Cap':'5,899.35', 'Price':'£18.77', 'Change':'0.40%', 'Volume':'655,611.00' },
        { 'Ticker':'OMCL', 'Industry':'Computer Based Systems', 'Market_Cap':'672.24', 'Price':'£19.57', 'Change':'-1.31%', 'Volume':'35,571.00' },
        { 'Ticker':'OPEN', 'Industry':'Internet Information Providers', 'Market_Cap':'1,460.86', 'Price':'£64.10', 'Change':'0.64%', 'Volume':'95,986.00' },
        { 'Ticker':'OPLK', 'Industry':'Semiconductor - Integrated Circuits', 'Market_Cap':'343.66', 'Price':'£18.40', 'Change':'1.89%', 'Volume':'6,827.00' },
        { 'Ticker':'PGI', 'Industry':'Diversified Communication Services', 'Market_Cap':'551.20', 'Price':'£11.78', 'Change':'-1.51%', 'Volume':'28,631.00' },
        { 'Ticker':'PKE', 'Industry':'Semiconductor Equipment & Materials', 'Market_Cap':'513.62', 'Price':'£24.97', 'Change':'1.24%', 'Volume':'7,371.00' },
        { 'Ticker':'PRGS', 'Industry':'Application Software', 'Market_Cap':'1,302.68', 'Price':'£23.80', 'Change':'0.34%', 'Volume':'169,451.00' },
        { 'Ticker':'PRO', 'Industry':'Application Software', 'Market_Cap':'814.95', 'Price':'£29.35', 'Change':'-0.03%', 'Volume':'28,170.00' },
        { 'Ticker':'PWER', 'Industry':'Diversified Electronics', 'Market_Cap':'771.52', 'Price':'£6.32', 'Change':'0.08%', 'Volume':'239,392.00' },
        { 'Ticker':'Q', 'Industry':'Telecom Services - Domestic', 'Market_Cap':'4,985.92', 'Price':'£42.60', 'Change':'-1.07%', 'Volume':'344,556.00' },
        { 'Ticker':'QLYS', 'Industry':'Application Software', 'Market_Cap':'505.16', 'Price':'£16.17', 'Change':'0.81%', 'Volume':'17,505.00' },
        { 'Ticker':'QSII', 'Industry':'Healthcare Information Services', 'Market_Cap':'1,131.87', 'Price':'£18.87', 'Change':'-0.74%', 'Volume':'286,912.00' },
        { 'Ticker':'RATE', 'Industry':'Internet Information Providers', 'Market_Cap':'1,444.68', 'Price':'£14.45', 'Change':'0.08%', 'Volume':'17,171.00' },
        { 'Ticker':'RAX', 'Industry':'Information Technology Services', 'Market_Cap':'5,245.22', 'Price':'£39.82', 'Change':'4.57%', 'Volume':'843,884.00' },
        { 'Ticker':'RHT', 'Industry':'Application Software', 'Market_Cap':'9,159.75', 'Price':'£47.67', 'Change':'0.55%', 'Volume':'256,881.00' },
        { 'Ticker':'RKUS', 'Industry':'Computer Based Systems', 'Market_Cap':'983.91', 'Price':'£13.46', 'Change':'1.51%', 'Volume':'443,905.00' },
        { 'Ticker':'ROVI', 'Industry':'Multimedia & Graphics Software', 'Market_Cap':'2,277.80', 'Price':'£22.71', 'Change':'0.26%', 'Volume':'169,379.00' },
        { 'Ticker':'RP', 'Industry':'Application Software', 'Market_Cap':'1,392.89', 'Price':'£18.60', 'Change':'-1.17%', 'Volume':'137,734.00' },
        { 'Ticker':'RVBD', 'Industry':'Information Technology Services', 'Market_Cap':'2,546.89', 'Price':'£15.60', 'Change':'0.06%', 'Volume':'1,095,710.00' },
        { 'Ticker':'SAI', 'Industry':'Information & Delivery Services', 'Market_Cap':'4,680.48', 'Price':'£13.78', 'Change':'-1.08%', 'Volume':'705,369.00' },
        { 'Ticker':'SATS', 'Industry':'Communication Equipment', 'Market_Cap':'3,426.60', 'Price':'£38.95', 'Change':'0.23%', 'Volume':'32,720.00' },
        { 'Ticker':'SLH', 'Industry':'Business Software & Services', 'Market_Cap':'3,840.70', 'Price':'£55.66', 'Change':'-0.23%', 'Volume':'41,042.00' },
        { 'Ticker':'SMTC', 'Industry':'Semiconductor - Integrated Circuits', 'Market_Cap':'2,239.01', 'Price':'£33.20', 'Change':'-0.72%', 'Volume':'341,922.00' },
        { 'Ticker':'SNCR', 'Industry':'Application Software', 'Market_Cap':'1,165.36', 'Price':'£30.40', 'Change':'-0.56%', 'Volume':'17,342.00' },
        { 'Ticker':'SNPS', 'Industry':'Semiconductor Equipment & Materials', 'Market_Cap':'5,434.43', 'Price':'£35.47', 'Change':'0.20%', 'Volume':'138,160.00' },
        { 'Ticker':'SOFO', 'Industry':'Application Software', 'Market_Cap':'41.84', 'Price':'£10.69', 'Change':'-0.09%', 'Volume':'388.00' },
        { 'Ticker':'SPRT', 'Industry':'Internet Software & Services', 'Market_Cap':'232.90', 'Price':'£4.76', 'Change':'2.45%', 'Volume':'14,775.00' },
        { 'Ticker':'SPSC', 'Industry':'Application Software', 'Market_Cap':'829.63', 'Price':'£55.51', 'Change':'-0.41%', 'Volume':'3,064.00' },
        { 'Ticker':'SSNC', 'Industry':'Business Software & Services', 'Market_Cap':'2,639.64', 'Price':'£33.42', 'Change':'0.45%', 'Volume':'56,934.00' },
        { 'Ticker':'SUPX', 'Industry':'Semiconductor - Integrated Circuits', 'Market_Cap':'272.86', 'Price':'£23.98', 'Change':'1.22%', 'Volume':'16,040.00' },
        { 'Ticker':'SYMC', 'Industry':'Security Software & Services', 'Market_Cap':'15,550.92', 'Price':'£22.35', 'Change':'-0.40%', 'Volume':'1,908,331.00' },
        { 'Ticker':'SYMM', 'Industry':'Communication Equipment', 'Market_Cap':'181.04', 'Price':'£4.48', 'Change':'0.22%', 'Volume':'4,912.00' },
        { 'Ticker':'T', 'Industry':'Telecom Services - Domestic', 'Market_Cap':'195,876.88', 'Price':'£35.53', 'Change':'0.00%', 'Volume':'6,081,350.00' },
        { 'Ticker':'TDS', 'Industry':'Wireless Communications', 'Market_Cap':'2,579.72', 'Price':'£23.51', 'Change':'-1.34%', 'Volume':'74,171.00' },
        { 'Ticker':'TIBX', 'Industry':'Business Software & Services', 'Market_Cap':'3,489.64', 'Price':'£21.65', 'Change':'-0.18%', 'Volume':'597,072.00' },
        { 'Ticker':'TNAV', 'Industry':'Scientific & Technical Instruments', 'Market_Cap':'211.73', 'Price':'£5.40', 'Change':'1.69%', 'Volume':'45,681.00' },
        { 'Ticker':'TNGO', 'Industry':'Business Software & Services', 'Market_Cap':'580.48', 'Price':'£15.35', 'Change':'-0.71%', 'Volume':'65,955.00' },
        { 'Ticker':'TRAK', 'Industry':'Internet Software & Services', 'Market_Cap':'1,564.59', 'Price':'£36.09', 'Change':'-0.41%', 'Volume':'71,864.00' },
        { 'Ticker':'TRIP', 'Industry':'Internet Information Providers', 'Market_Cap':'8,616.68', 'Price':'£60.41', 'Change':'0.30%', 'Volume':'839,036.00' },
        { 'Ticker':'TRMB', 'Industry':'Scientific & Technical Instruments', 'Market_Cap':'6,724.02', 'Price':'£26.62', 'Change':'1.02%', 'Volume':'325,955.00' },
        { 'Ticker':'TTGT', 'Industry':'Internet Information Providers', 'Market_Cap':'181.30', 'Price':'£4.54', 'Change':'0.22%', 'Volume':'1,900.00' },
        { 'Ticker':'TWTC', 'Industry':'Telecom Services - Domestic', 'Market_Cap':'4,233.77', 'Price':'£28.60', 'Change':'0.76%', 'Volume':'472,268.00' },
        { 'Ticker':'TXN', 'Industry':'Semiconductor - Broad Line', 'Market_Cap':'38,888.91', 'Price':'£35.49', 'Change':'1.02%', 'Volume':'1,765,961.00' },
        { 'Ticker':'TYL', 'Industry':'Technical & System Software', 'Market_Cap':'2,197.27', 'Price':'£70.41', 'Change':'0.63%', 'Volume':'63,024.00' },
        { 'Ticker':'TYPE', 'Industry':'Application Software', 'Market_Cap':'949.47', 'Price':'£25.76', 'Change':'0.66%', 'Volume':'41,104.00' },
        { 'Ticker':'UBNT', 'Industry':'Wireless Communications', 'Market_Cap':'1,555.63', 'Price':'£18.38', 'Change':'2.80%', 'Volume':'115,047.00' },
        { 'Ticker':'UCTT', 'Industry':'Semiconductor - Specialized', 'Market_Cap':'170.67', 'Price':'£6.10', 'Change':'0.00%', 'Volume':'20,966.00' },
        { 'Ticker':'ULTI', 'Industry':'Internet Software & Services', 'Market_Cap':'3,290.80', 'Price':'£120.96', 'Change':'0.99%', 'Volume':'36,034.00' },
        { 'Ticker':'USM', 'Industry':'Wireless Communications', 'Market_Cap':'2,923.43', 'Price':'£34.68', 'Change':'-0.54%', 'Volume':'17,955.00' },
        { 'Ticker':'VDSI', 'Industry':'Security Software & Services', 'Market_Cap':'333.10', 'Price':'£8.65', 'Change':'0.46%', 'Volume':'15,908.00' },
        { 'Ticker':'VG', 'Industry':'Diversified Communication Services', 'Market_Cap':'596.70', 'Price':'£2.80', 'Change':'0.72%', 'Volume':'222,457.00' },
        { 'Ticker':'VLTR', 'Industry':'Semiconductor - Integrated Circuits', 'Market_Cap':'364.86', 'Price':'£14.67', 'Change':'1.17%', 'Volume':'14,647.00' },
        { 'Ticker':'VMW', 'Industry':'Technical & System Software', 'Market_Cap':'28,077.13', 'Price':'£65.84', 'Change':'0.37%', 'Volume':'510,981.00' },
        { 'Ticker':'VRNT', 'Industry':'Business Software & Services', 'Market_Cap':'1,800.24', 'Price':'£34.70', 'Change':'0.17%', 'Volume':'77,242.00' },
        { 'Ticker':'VZ', 'Industry':'Telecom Services - Domestic', 'Market_Cap':'145,105.58', 'Price':'£51.14', 'Change':'1.01%', 'Volume':'3,157,756.00' },
        { 'Ticker':'WDC', 'Industry':'Data Storage Devices', 'Market_Cap':'15,100.02', 'Price':'£63.44', 'Change':'0.42%', 'Volume':'495,628.00' },
        { 'Ticker':'WIFI', 'Industry':'Information Technology Services', 'Market_Cap':'220.70', 'Price':'£6.20', 'Change':'0.00%', 'Volume':'28,502.00' },
        { 'Ticker':'WIRE', 'Industry':'Diversified Electronics', 'Market_Cap':'716.63', 'Price':'£34.88', 'Change':'0.58%', 'Volume':'16,746.00' },
        { 'Ticker':'XLNX', 'Industry':'Semiconductor - Integrated Circuits', 'Market_Cap':'10,421.13', 'Price':'£39.96', 'Change':'0.78%', 'Volume':'524,270.00' },
        { 'Ticker':'XXIA', 'Industry':'Internet Software & Services', 'Market_Cap':'1,366.59', 'Price':'£17.95', 'Change':'-1.86%', 'Volume':'121,344.00' },
        { 'Ticker':'Z', 'Industry':'Internet Software & Services', 'Market_Cap':'1,942.45', 'Price':'£57.01', 'Change':'-0.89%', 'Volume':'68,108.00' }
    ];
    $scope.gridOptions = {
        data: 'shares',
        columnDefs: [
            // todo: Column names shouldn't contain spaces
            {field: 'Ticker',     displayName: 'Ticker'},
            {field: 'Industry',   displayName: 'Industry'},
            {field: 'Market_Cap', displayName: 'Market Cap'},
            {field: 'Price',      displayName: 'Price'},
            {field: 'Change',     displayName: 'Change'},
            {field: 'Volume',     displayName: 'Volume'}
        ],
        headerRowHeight: 30,
        multiSelect: false,
        enableColumnResize: true,

        // todo: consider moving templates to static html
        headerRowTemplate:
            "<div ng-style=\"{ height: col.headerRowHeight }\" ng-repeat=\"col in renderedColumns\" ng-class=\"col.colIndex()\" class=\"ngHeaderCell {{ (col.showSortButtonDown() || col.showSortButtonUp()) && 'selected' }}\">" +
            "	<div ng-header-cell></div>" +
            "</div>",

        rowTemplate:
            "<div ng-style=\"{ 'cursor': row.cursor }\" ng-repeat=\"col in renderedColumns\" ng-class=\"col.colIndex()\" class=\"ngCell {{col.cellClass}}\">" +
            "	<div ng-cell></div>" +
            "</div>",

        cellTemplate:
            "<div class=\"ngCellText\" ng-class=\"col.colIndex()\"><span ng-cell-text>{{COL_FIELD CUSTOM_FILTERS}}</span></div>"
    };
});