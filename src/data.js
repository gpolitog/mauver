// Emulating todo records which should be returned from API backend
// in the real world.
/* eslint-disable */
let colors = [{"r":0,"g":0,"b":0,"a":255,"h":0,"s":0,"v":0,"chroma":0,"luma":0,"hex":"#000000","name":"Black500","id":0},{"r":255,"g":235,"b":238,"a":255,"h":351,"s":0.0784313725490196,"v":255,"chroma":20,"luma":241.33,"hex":"#FFEBEE","name":"Red50","id":1},{"r":255,"g":205,"b":210,"a":255,"h":354,"s":0.19607843137254902,"v":255,"chroma":50,"luma":220.54999999999998,"hex":"#FFCDD2","name":"Red100","id":2},{"r":239,"g":154,"b":154,"a":255,"h":0,"s":0.35564853556485354,"v":239,"chroma":85,"luma":179.5,"hex":"#EF9A9A","name":"Red200","id":3},{"r":229,"g":115,"b":115,"a":255,"h":0,"s":0.4978165938864629,"v":229,"chroma":114,"luma":149.20000000000002,"hex":"#E57373","name":"Red300","id":4},{"r":239,"g":83,"b":80,"a":255,"h":1.1320754716981132,"s":0.6652719665271967,"v":239,"chroma":159,"luma":129.47,"hex":"#EF5350","name":"Red400","id":5},{"r":244,"g":67,"b":54,"a":255,"h":4.105263157894737,"s":0.7786885245901639,"v":244,"chroma":190,"luma":118.67,"hex":"#F44336","name":"Red500","id":6},{"r":229,"g":57,"b":53,"a":255,"h":1.3636363636363638,"s":0.7685589519650655,"v":229,"chroma":176,"luma":108.16,"hex":"#E53935","name":"Red600","id":7},{"r":211,"g":47,"b":47,"a":255,"h":0,"s":0.7772511848341233,"v":211,"chroma":164,"luma":96.2,"hex":"#D32F2F","name":"Red700","id":8},{"r":198,"g":40,"b":40,"a":255,"h":0,"s":0.797979797979798,"v":198,"chroma":158,"luma":87.4,"hex":"#C62828","name":"Red800","id":9},{"r":183,"g":28,"b":28,"a":255,"h":0,"s":0.8469945355191257,"v":183,"chroma":155,"luma":74.5,"hex":"#B71C1C","name":"Red900","id":10},{"r":255,"g":138,"b":128,"a":255,"h":4.724409448818897,"s":0.4980392156862745,"v":255,"chroma":127,"luma":172.00000000000003,"hex":"#FF8A80","name":"RedA100","id":11},{"r":255,"g":82,"b":82,"a":255,"h":0,"s":0.6784313725490196,"v":255,"chroma":173,"luma":133.9,"hex":"#FF5252","name":"RedA200","id":12},{"r":255,"g":23,"b":68,"a":255,"h":348.36206896551727,"s":0.9098039215686274,"v":255,"chroma":232,"luma":97.55,"hex":"#FF1744","name":"RedA400","id":13},{"r":213,"g":0,"b":0,"a":255,"h":0,"s":1,"v":213,"chroma":213,"luma":63.9,"hex":"#D50000","name":"RedA700","id":14},{"r":252,"g":228,"b":236,"a":255,"h":340,"s":0.09523809523809523,"v":252,"chroma":24,"luma":236.07999999999998,"hex":"#FCE4EC","name":"Pink50","id":15},{"r":248,"g":187,"b":208,"a":255,"h":339.344262295082,"s":0.24596774193548387,"v":248,"chroma":61,"luma":207.60999999999999,"hex":"#F8BBD0","name":"Pink100","id":16},{"r":244,"g":143,"b":177,"a":255,"h":339.8019801980198,"s":0.4139344262295082,"v":244,"chroma":101,"luma":177.04,"hex":"#F48FB1","name":"Pink200","id":17},{"r":240,"g":98,"b":146,"a":255,"h":339.71830985915494,"s":0.5916666666666667,"v":240,"chroma":142,"luma":145.88,"hex":"#F06292","name":"Pink300","id":18},{"r":236,"g":64,"b":122,"a":255,"h":339.7674418604651,"s":0.7288135593220338,"v":236,"chroma":172,"luma":121.98,"hex":"#EC407A","name":"Pink400","id":19},{"r":233,"g":30,"b":99,"a":255,"h":339.60591133004925,"s":0.871244635193133,"v":233,"chroma":203,"luma":98.49,"hex":"#E91E63","name":"Pink500","id":20},{"r":216,"g":27,"b":96,"a":255,"h":338.0952380952381,"s":0.875,"v":216,"chroma":189,"luma":91.28999999999999,"hex":"#D81B60","name":"Pink600","id":21},{"r":194,"g":24,"b":91,"a":255,"h":336.3529411764706,"s":0.8762886597938144,"v":194,"chroma":170,"luma":82.37,"hex":"#C2185B","name":"Pink700","id":22},{"r":173,"g":20,"b":87,"a":255,"h":333.72549019607845,"s":0.884393063583815,"v":173,"chroma":153,"luma":73.27,"hex":"#AD1457","name":"Pink800","id":23},{"r":136,"g":14,"b":79,"a":255,"h":328.0327868852459,"s":0.8970588235294118,"v":136,"chroma":122,"luma":57.74999999999999,"hex":"#880E4F","name":"Pink900","id":24},{"r":255,"g":128,"b":171,"a":255,"h":339.68503937007875,"s":0.4980392156862745,"v":255,"chroma":127,"luma":170.82999999999998,"hex":"#FF80AB","name":"PinkA100","id":25},{"r":255,"g":64,"b":129,"a":255,"h":339.5811518324607,"s":0.7490196078431373,"v":255,"chroma":191,"luma":128.45,"hex":"#FF4081","name":"PinkA200","id":26},{"r":245,"g":0,"b":87,"a":255,"h":338.6938775510204,"s":1,"v":245,"chroma":245,"luma":83.07,"hex":"#F50057","name":"PinkA400","id":27},{"r":197,"g":17,"b":98,"a":255,"h":333,"s":0.9137055837563451,"v":197,"chroma":180,"luma":79.91,"hex":"#C51162","name":"PinkA700","id":28},{"r":243,"g":229,"b":245,"a":255,"h":292.5,"s":0.0653061224489796,"v":245,"chroma":16,"luma":234.95999999999998,"hex":"#F3E5F5","name":"Purple50","id":29},{"r":225,"g":190,"b":231,"a":255,"h":291.219512195122,"s":0.1774891774891775,"v":231,"chroma":41,"luma":205.01,"hex":"#E1BEE7","name":"Purple100","id":30},{"r":206,"g":147,"b":216,"a":255,"h":291.30434782608694,"s":0.3194444444444444,"v":216,"chroma":69,"luma":172.28999999999996,"hex":"#CE93D8","name":"Purple200","id":31},{"r":186,"g":104,"b":200,"a":255,"h":291.25,"s":0.48,"v":200,"chroma":96,"luma":139.16,"hex":"#BA68C8","name":"Purple300","id":32},{"r":171,"g":71,"b":188,"a":255,"h":291.28205128205127,"s":0.6223404255319149,"v":188,"chroma":117,"luma":113.87,"hex":"#AB47BC","name":"Purple400","id":33},{"r":156,"g":39,"b":176,"a":255,"h":291.24087591240874,"s":0.7784090909090909,"v":176,"chroma":137,"luma":89.17,"hex":"#9C27B0","name":"Purple500","id":34},{"r":142,"g":36,"b":170,"a":255,"h":287.46268656716416,"s":0.788235294117647,"v":170,"chroma":134,"luma":82.54,"hex":"#8E24AA","name":"Purple600","id":35},{"r":123,"g":31,"b":162,"a":255,"h":282.1374045801527,"s":0.808641975308642,"v":162,"chroma":131,"luma":73.00999999999999,"hex":"#7B1FA2","name":"Purple700","id":36},{"r":106,"g":27,"b":154,"a":255,"h":277.3228346456693,"s":0.8246753246753247,"v":154,"chroma":127,"luma":64.67,"hex":"#6A1B9A","name":"Purple800","id":37},{"r":74,"g":20,"b":140,"a":255,"h":267,"s":0.8571428571428571,"v":140,"chroma":120,"luma":49.4,"hex":"#4A148C","name":"Purple900","id":38},{"r":234,"g":128,"b":252,"a":255,"h":291.2903225806452,"s":0.49206349206349204,"v":252,"chroma":124,"luma":173.44,"hex":"#EA80FC","name":"PurpleA100","id":39},{"r":224,"g":64,"b":251,"a":255,"h":291.3368983957219,"s":0.7450199203187251,"v":251,"chroma":187,"luma":132.57,"hex":"#E040FB","name":"PurpleA200","id":40},{"r":213,"g":0,"b":249,"a":255,"h":291.32530120481925,"s":1,"v":249,"chroma":249,"luma":91.28999999999999,"hex":"#D500F9","name":"PurpleA400","id":41},{"r":170,"g":0,"b":255,"a":255,"h":280,"s":1,"v":255,"chroma":255,"luma":79.05,"hex":"#AA00FF","name":"PurpleA700","id":42},{"r":237,"g":231,"b":246,"a":255,"h":264,"s":0.06097560975609756,"v":246,"chroma":15,"luma":234.45,"hex":"#EDE7F6","name":"DeepPurple 50","id":43},{"r":209,"g":196,"b":233,"a":255,"h":261.0810810810811,"s":0.15879828326180256,"v":233,"chroma":37,"luma":203.97,"hex":"#D1C4E9","name":"DeepPurple 100","id":44},{"r":179,"g":157,"b":219,"a":255,"h":261.2903225806452,"s":0.2831050228310502,"v":219,"chroma":62,"luma":170.42,"hex":"#B39DDB","name":"DeepPurple 200","id":45},{"r":149,"g":117,"b":205,"a":255,"h":261.8181818181818,"s":0.4292682926829268,"v":205,"chroma":88,"luma":136.28,"hex":"#9575CD","name":"DeepPurple 300","id":46},{"r":126,"g":87,"b":194,"a":255,"h":261.86915887850466,"s":0.5515463917525774,"v":194,"chroma":107,"luma":110.47,"hex":"#7E57C2","name":"DeepPurple 400","id":47},{"r":103,"g":58,"b":183,"a":255,"h":261.6,"s":0.6830601092896175,"v":183,"chroma":125,"luma":85.25,"hex":"#673AB7","name":"DeepPurple 500","id":48},{"r":94,"g":53,"b":177,"a":255,"h":259.83870967741933,"s":0.7005649717514124,"v":177,"chroma":124,"luma":78.94,"hex":"#5E35B1","name":"DeepPurple 600","id":49},{"r":81,"g":45,"b":168,"a":255,"h":257.5609756097561,"s":0.7321428571428571,"v":168,"chroma":123,"luma":69.33,"hex":"#512DA8","name":"DeepPurple 700","id":50},{"r":69,"g":39,"b":160,"a":255,"h":254.87603305785123,"s":0.75625,"v":160,"chroma":121,"luma":61.309999999999995,"hex":"#4527A0","name":"DeepPurple 800","id":51},{"r":49,"g":27,"b":146,"a":255,"h":251.0924369747899,"s":0.815068493150685,"v":146,"chroma":119,"luma":46.69,"hex":"#311B92","name":"DeepPurple 900","id":52},{"r":179,"g":136,"b":255,"a":255,"h":261.6806722689076,"s":0.4666666666666667,"v":255,"chroma":119,"luma":161.99,"hex":"#B388FF","name":"DeepPurple A100","id":53},{"r":124,"g":77,"b":255,"a":255,"h":255.8426966292135,"s":0.6980392156862745,"v":255,"chroma":178,"luma":110.67999999999999,"hex":"#7C4DFF","name":"DeepPurple A200","id":54},{"r":101,"g":31,"b":255,"a":255,"h":258.75,"s":0.8784313725490196,"v":255,"chroma":224,"luma":76.64,"hex":"#651FFF","name":"DeepPurple A400","id":55},{"r":98,"g":0,"b":234,"a":255,"h":265.12820512820514,"s":1,"v":234,"chroma":234,"luma":55.14,"hex":"#6200EA","name":"DeepPurple A700","id":56},{"r":232,"g":234,"b":246,"a":255,"h":231.42857142857142,"s":0.056910569105691054,"v":246,"chroma":14,"luma":234.72,"hex":"#E8EAF6","name":"Indigo50","id":57},{"r":197,"g":202,"b":233,"a":255,"h":231.66666666666666,"s":0.15450643776824036,"v":233,"chroma":36,"luma":203.90999999999997,"hex":"#C5CAE9","name":"Indigo100","id":58},{"r":159,"g":168,"b":218,"a":255,"h":230.84745762711864,"s":0.2706422018348624,"v":218,"chroma":59,"luma":170.79999999999998,"hex":"#9FA8DA","name":"Indigo200","id":59},{"r":121,"g":134,"b":203,"a":255,"h":230.4878048780488,"s":0.4039408866995074,"v":203,"chroma":82,"luma":137.69,"hex":"#7986CB","name":"Indigo300","id":60},{"r":92,"g":107,"b":192,"a":255,"h":231,"s":0.5208333333333334,"v":192,"chroma":100,"luma":111.85,"hex":"#5C6BC0","name":"Indigo400","id":61},{"r":63,"g":81,"b":181,"a":255,"h":230.84745762711864,"s":0.6519337016574586,"v":181,"chroma":118,"luma":86.6,"hex":"#3F51B5","name":"Indigo500","id":62},{"r":57,"g":73,"b":171,"a":255,"h":231.57894736842104,"s":0.6666666666666666,"v":171,"chroma":114,"luma":78.98,"hex":"#3949AB","name":"Indigo600","id":63},{"r":48,"g":63,"b":159,"a":255,"h":231.8918918918919,"s":0.6981132075471698,"v":159,"chroma":111,"luma":69.05999999999999,"hex":"#303F9F","name":"Indigo700","id":64},{"r":40,"g":53,"b":147,"a":255,"h":232.71028037383178,"s":0.7278911564625851,"v":147,"chroma":107,"luma":59.44,"hex":"#283593","name":"Indigo800","id":65},{"r":26,"g":35,"b":126,"a":255,"h":234.6,"s":0.7936507936507936,"v":126,"chroma":100,"luma":42.31,"hex":"#1A237E","name":"Indigo900","id":66},{"r":140,"g":158,"b":255,"a":255,"h":230.6086956521739,"s":0.45098039215686275,"v":255,"chroma":115,"luma":163.27,"hex":"#8C9EFF","name":"IndigoA100","id":67},{"r":83,"g":109,"b":254,"a":255,"h":230.87719298245614,"s":0.6732283464566929,"v":254,"chroma":171,"luma":117.15,"hex":"#536DFE","name":"IndigoA200","id":68},{"r":61,"g":90,"b":254,"a":255,"h":230.98445595854923,"s":0.7598425196850394,"v":254,"chroma":193,"luma":99.33999999999999,"hex":"#3D5AFE","name":"IndigoA400","id":69},{"r":48,"g":79,"b":254,"a":255,"h":230.97087378640776,"s":0.8110236220472441,"v":254,"chroma":206,"luma":88.95,"hex":"#304FFE","name":"IndigoA700","id":70},{"r":227,"g":242,"b":253,"a":255,"h":205.3846153846154,"s":0.10276679841897234,"v":253,"chroma":26,"luma":238.71,"hex":"#E3F2FD","name":"Blue50","id":71},{"r":187,"g":222,"b":251,"a":255,"h":207.1875,"s":0.2549800796812749,"v":251,"chroma":64,"luma":214.69,"hex":"#BBDEFB","name":"Blue100","id":72},{"r":144,"g":202,"b":249,"a":255,"h":206.85714285714286,"s":0.42168674698795183,"v":249,"chroma":105,"luma":189.76999999999998,"hex":"#90CAF9","name":"Blue200","id":73},{"r":100,"g":181,"b":246,"a":255,"h":206.7123287671233,"s":0.5934959349593496,"v":246,"chroma":146,"luma":163.85,"hex":"#64B5F6","name":"Blue300","id":74},{"r":66,"g":165,"b":245,"a":255,"h":206.81564245810057,"s":0.7306122448979592,"v":245,"chroma":179,"luma":144.1,"hex":"#42A5F5","name":"Blue400","id":75},{"r":33,"g":150,"b":243,"a":255,"h":206.57142857142856,"s":0.8641975308641975,"v":243,"chroma":210,"luma":125.13000000000001,"hex":"#2196F3","name":"Blue500","id":76},{"r":30,"g":136,"b":229,"a":255,"h":208.04020100502512,"s":0.868995633187773,"v":229,"chroma":199,"luma":114.42999999999999,"hex":"#1E88E5","name":"Blue600","id":77},{"r":25,"g":118,"b":210,"a":255,"h":209.83783783783784,"s":0.8809523809523809,"v":210,"chroma":185,"luma":100.22,"hex":"#1976D2","name":"Blue700","id":78},{"r":21,"g":101,"b":192,"a":255,"h":211.9298245614035,"s":0.890625,"v":192,"chroma":171,"luma":87.01,"hex":"#1565C0","name":"Blue800","id":79},{"r":13,"g":71,"b":161,"a":255,"h":216.48648648648648,"s":0.9192546583850931,"v":161,"chroma":148,"luma":63.5,"hex":"#0D47A1","name":"Blue900","id":80},{"r":130,"g":177,"b":255,"a":255,"h":217.44,"s":0.49019607843137253,"v":255,"chroma":125,"luma":171.48000000000002,"hex":"#82B1FF","name":"BlueA100","id":81},{"r":68,"g":138,"b":255,"a":255,"h":217.54010695187165,"s":0.7333333333333333,"v":255,"chroma":187,"luma":129.87,"hex":"#448AFF","name":"BlueA200","id":82},{"r":41,"g":121,"b":255,"a":255,"h":217.57009345794393,"s":0.8392156862745098,"v":255,"chroma":214,"luma":111.74,"hex":"#2979FF","name":"BlueA400","id":83},{"r":41,"g":98,"b":255,"a":255,"h":224.01869158878506,"s":0.8392156862745098,"v":255,"chroma":214,"luma":98.17,"hex":"#2962FF","name":"BlueA700","id":84},{"r":225,"g":245,"b":254,"a":255,"h":198.6206896551724,"s":0.1141732283464567,"v":254,"chroma":29,"luma":239.98999999999998,"hex":"#E1F5FE","name":"LightBlue 50","id":85},{"r":179,"g":229,"b":252,"a":255,"h":198.9041095890411,"s":0.2896825396825397,"v":252,"chroma":73,"luma":216.52999999999997,"hex":"#B3E5FC","name":"LightBlue 100","id":86},{"r":129,"g":212,"b":250,"a":255,"h":198.84297520661158,"s":0.484,"v":250,"chroma":121,"luma":191.28,"hex":"#81D4FA","name":"LightBlue 200","id":87},{"r":79,"g":195,"b":247,"a":255,"h":198.57142857142856,"s":0.680161943319838,"v":247,"chroma":168,"luma":165.92000000000002,"hex":"#4FC3F7","name":"LightBlue 300","id":88},{"r":41,"g":182,"b":246,"a":255,"h":198.7317073170732,"s":0.8333333333333334,"v":246,"chroma":205,"luma":146.73999999999998,"hex":"#29B6F6","name":"LightBlue 400","id":89},{"r":3,"g":169,"b":244,"a":255,"h":198.6721991701245,"s":0.9877049180327869,"v":244,"chroma":241,"luma":127.45,"hex":"#03A9F4","name":"LightBlue 500","id":90},{"r":3,"g":155,"b":229,"a":255,"h":199.64601769911505,"s":0.9868995633187773,"v":229,"chroma":226,"luma":117.53999999999999,"hex":"#039BE5","name":"LightBlue 600","id":91},{"r":2,"g":136,"b":209,"a":255,"h":201.15942028985506,"s":0.9904306220095693,"v":209,"chroma":207,"luma":103.82999999999998,"hex":"#0288D1","name":"LightBlue 700","id":92},{"r":2,"g":119,"b":189,"a":255,"h":202.45989304812835,"s":0.9894179894179894,"v":189,"chroma":187,"luma":91.6,"hex":"#0277BD","name":"LightBlue 800","id":93},{"r":1,"g":87,"b":155,"a":255,"h":206.4935064935065,"s":0.9935483870967742,"v":155,"chroma":154,"luma":68.67999999999999,"hex":"#01579B","name":"LightBlue 900","id":94},{"r":128,"g":216,"b":255,"a":255,"h":198.42519685039372,"s":0.4980392156862745,"v":255,"chroma":127,"luma":193.89000000000001,"hex":"#80D8FF","name":"LightBlue A100","id":95},{"r":64,"g":196,"b":255,"a":255,"h":198.53403141361258,"s":0.7490196078431373,"v":255,"chroma":191,"luma":162.89000000000001,"hex":"#40C4FF","name":"LightBlue A200","id":96},{"r":0,"g":176,"b":255,"a":255,"h":198.58823529411765,"s":1,"v":255,"chroma":255,"luma":131.89,"hex":"#00B0FF","name":"LightBlue A400","id":97},{"r":0,"g":145,"b":234,"a":255,"h":202.82051282051282,"s":1,"v":234,"chroma":234,"luma":111.28999999999999,"hex":"#0091EA","name":"LightBlue A700","id":98},{"r":224,"g":247,"b":250,"a":255,"h":186.92307692307693,"s":0.104,"v":250,"chroma":26,"luma":240.43,"hex":"#E0F7FA","name":"Cyan50","id":99},{"r":178,"g":235,"b":242,"a":255,"h":186.5625,"s":0.2644628099173554,"v":242,"chroma":64,"luma":218.67000000000002,"hex":"#B2EBF2","name":"Cyan100","id":100},{"r":128,"g":222,"b":234,"a":255,"h":186.79245283018867,"s":0.452991452991453,"v":234,"chroma":106,"luma":195.12,"hex":"#80DEEA","name":"Cyan200","id":101},{"r":77,"g":208,"b":225,"a":255,"h":186.8918918918919,"s":0.6577777777777778,"v":225,"chroma":148,"luma":170.57,"hex":"#4DD0E1","name":"Cyan300","id":102},{"r":38,"g":198,"b":218,"a":255,"h":186.66666666666669,"s":0.8256880733944955,"v":218,"chroma":180,"luma":152.2,"hex":"#26C6DA","name":"Cyan400","id":103},{"r":0,"g":188,"b":212,"a":255,"h":186.79245283018867,"s":1,"v":212,"chroma":212,"luma":134.23999999999998,"hex":"#00BCD4","name":"Cyan500","id":104},{"r":0,"g":172,"b":193,"a":255,"h":186.52849740932643,"s":1,"v":193,"chroma":193,"luma":122.71,"hex":"#00ACC1","name":"Cyan600","id":105},{"r":0,"g":151,"b":167,"a":255,"h":185.74850299401197,"s":1,"v":167,"chroma":167,"luma":107.46,"hex":"#0097A7","name":"Cyan700","id":106},{"r":0,"g":131,"b":143,"a":255,"h":185.03496503496504,"s":1,"v":143,"chroma":143,"luma":93.02,"hex":"#00838F","name":"Cyan800","id":107},{"r":0,"g":96,"b":100,"a":255,"h":182.4,"s":1,"v":100,"chroma":100,"luma":67.64,"hex":"#006064","name":"Cyan900","id":108},{"r":132,"g":255,"b":255,"a":255,"h":180,"s":0.4823529411764706,"v":255,"chroma":123,"luma":218.1,"hex":"#84FFFF","name":"CyanA100","id":109},{"r":24,"g":255,"b":255,"a":255,"h":180,"s":0.9058823529411765,"v":255,"chroma":231,"luma":185.7,"hex":"#18FFFF","name":"CyanA200","id":110},{"r":0,"g":229,"b":255,"a":255,"h":186.11764705882354,"s":1,"v":255,"chroma":255,"luma":163.16,"hex":"#00E5FF","name":"CyanA400","id":111},{"r":0,"g":184,"b":212,"a":255,"h":187.9245283018868,"s":1,"v":212,"chroma":212,"luma":131.88,"hex":"#00B8D4","name":"CyanA700","id":112},{"r":224,"g":242,"b":241,"a":255,"h":176.66666666666666,"s":0.0743801652892562,"v":242,"chroma":18,"luma":236.49,"hex":"#E0F2F1","name":"Teal50","id":113},{"r":178,"g":223,"b":219,"a":255,"h":174.66666666666666,"s":0.20179372197309417,"v":223,"chroma":45,"luma":209.06,"hex":"#B2DFDB","name":"Teal100","id":114},{"r":128,"g":203,"b":196,"a":255,"h":174.4,"s":0.3694581280788177,"v":203,"chroma":75,"luma":179.73,"hex":"#80CBC4","name":"Teal200","id":115},{"r":77,"g":182,"b":172,"a":255,"h":174.28571428571428,"s":0.5769230769230769,"v":182,"chroma":105,"luma":149.39999999999998,"hex":"#4DB6AC","name":"Teal300","id":116},{"r":38,"g":166,"b":154,"a":255,"h":174.375,"s":0.7710843373493976,"v":166,"chroma":128,"luma":126.28,"hex":"#26A69A","name":"Teal400","id":117},{"r":0,"g":150,"b":136,"a":255,"h":174.4,"s":1,"v":150,"chroma":150,"luma":103.46000000000001,"hex":"#009688","name":"Teal500","id":118},{"r":0,"g":137,"b":123,"a":255,"h":173.86861313868613,"s":1,"v":137,"chroma":137,"luma":94.36,"hex":"#00897B","name":"Teal600","id":119},{"r":0,"g":121,"b":107,"a":255,"h":173.05785123966942,"s":1,"v":121,"chroma":121,"luma":83.16,"hex":"#00796B","name":"Teal700","id":120},{"r":0,"g":105,"b":92,"a":255,"h":172.57142857142856,"s":1,"v":105,"chroma":105,"luma":72.07,"hex":"#00695C","name":"Teal800","id":121},{"r":0,"g":77,"b":64,"a":255,"h":169.87012987012986,"s":1,"v":77,"chroma":77,"luma":52.47,"hex":"#004D40","name":"Teal900","id":122},{"r":167,"g":255,"b":235,"a":255,"h":166.36363636363637,"s":0.34509803921568627,"v":255,"chroma":88,"luma":226.39999999999998,"hex":"#A7FFEB","name":"TealA100","id":123},{"r":100,"g":255,"b":218,"a":255,"h":165.67741935483872,"s":0.6078431372549019,"v":255,"chroma":155,"luma":204.42999999999998,"hex":"#64FFDA","name":"TealA200","id":124},{"r":29,"g":233,"b":182,"a":255,"h":165,"s":0.8755364806866953,"v":233,"chroma":204,"luma":166.19,"hex":"#1DE9B6","name":"TealA400","id":125},{"r":0,"g":191,"b":165,"a":255,"h":171.8324607329843,"s":1,"v":191,"chroma":191,"luma":130.84,"hex":"#00BFA5","name":"TealA700","id":126},{"r":232,"g":245,"b":233,"a":255,"h":124.61538461538461,"s":0.053061224489795916,"v":245,"chroma":13,"luma":239.77999999999997,"hex":"#E8F5E9","name":"Green50","id":127},{"r":200,"g":230,"b":201,"a":255,"h":122,"s":0.13043478260869565,"v":230,"chroma":30,"luma":217.81,"hex":"#C8E6C9","name":"Green100","id":128},{"r":165,"g":214,"b":167,"a":255,"h":122.44897959183673,"s":0.22897196261682243,"v":214,"chroma":49,"luma":194.13,"hex":"#A5D6A7","name":"Green200","id":129},{"r":129,"g":199,"b":132,"a":255,"h":122.57142857142857,"s":0.35175879396984927,"v":199,"chroma":70,"luma":170.63,"hex":"#81C784","name":"Green300","id":130},{"r":102,"g":187,"b":106,"a":255,"h":122.82352941176471,"s":0.45454545454545453,"v":187,"chroma":85,"luma":152.59,"hex":"#66BB6A","name":"Green400","id":131},{"r":76,"g":175,"b":80,"a":255,"h":122.42424242424242,"s":0.5657142857142857,"v":175,"chroma":99,"luma":134.85,"hex":"#4CAF50","name":"Green500","id":132},{"r":67,"g":160,"b":71,"a":255,"h":122.58064516129032,"s":0.58125,"v":160,"chroma":93,"luma":122.30999999999999,"hex":"#43A047","name":"Green600","id":133},{"r":56,"g":142,"b":60,"a":255,"h":122.79069767441861,"s":0.6056338028169014,"v":142,"chroma":86,"luma":107.17999999999999,"hex":"#388E3C","name":"Green700","id":134},{"r":46,"g":125,"b":50,"a":255,"h":123.0379746835443,"s":0.632,"v":125,"chroma":79,"luma":93.05,"hex":"#2E7D32","name":"Green800","id":135},{"r":27,"g":94,"b":32,"a":255,"h":124.4776119402985,"s":0.7127659574468085,"v":94,"chroma":67,"luma":67.08,"hex":"#1B5E20","name":"Green900","id":136},{"r":185,"g":246,"b":202,"a":255,"h":136.72131147540983,"s":0.24796747967479674,"v":246,"chroma":61,"luma":222.85999999999999,"hex":"#B9F6CA","name":"GreenA100","id":137},{"r":105,"g":240,"b":174,"a":255,"h":150.66666666666666,"s":0.5625,"v":240,"chroma":135,"luma":192.24,"hex":"#69F0AE","name":"GreenA200","id":138},{"r":0,"g":230,"b":118,"a":255,"h":150.7826086956522,"s":1,"v":230,"chroma":230,"luma":148.67999999999998,"hex":"#00E676","name":"GreenA400","id":139},{"r":0,"g":200,"b":83,"a":255,"h":144.9,"s":1,"v":200,"chroma":200,"luma":127.13,"hex":"#00C853","name":"GreenA700","id":140},{"r":241,"g":248,"b":233,"a":255,"h":88,"s":0.06048387096774194,"v":248,"chroma":15,"luma":244.25,"hex":"#F1F8E9","name":"LightGreen 50","id":141},{"r":220,"g":237,"b":200,"a":255,"h":87.56756756756756,"s":0.15611814345991562,"v":237,"chroma":37,"luma":227.82999999999998,"hex":"#DCEDC8","name":"LightGreen 100","id":142},{"r":197,"g":225,"b":165,"a":255,"h":88,"s":0.26666666666666666,"v":225,"chroma":60,"luma":210,"hex":"#C5E1A5","name":"LightGreen 200","id":143},{"r":174,"g":213,"b":129,"a":255,"h":87.85714285714286,"s":0.39436619718309857,"v":213,"chroma":84,"luma":192.05999999999997,"hex":"#AED581","name":"LightGreen 300","id":144},{"r":156,"g":204,"b":101,"a":255,"h":87.96116504854369,"s":0.5049019607843137,"v":204,"chroma":103,"luma":178.26999999999998,"hex":"#9CCC65","name":"LightGreen 400","id":145},{"r":139,"g":195,"b":74,"a":255,"h":87.76859504132231,"s":0.6205128205128205,"v":195,"chroma":121,"luma":164.89,"hex":"#8BC34A","name":"LightGreen 500","id":146},{"r":124,"g":179,"b":66,"a":255,"h":89.20353982300885,"s":0.6312849162011173,"v":179,"chroma":113,"luma":150.07,"hex":"#7CB342","name":"LightGreen 600","id":147},{"r":104,"g":159,"b":56,"a":255,"h":92.03883495145631,"s":0.6477987421383647,"v":159,"chroma":103,"luma":131.17,"hex":"#689F38","name":"LightGreen 700","id":148},{"r":85,"g":139,"b":47,"a":255,"h":95.21739130434783,"s":0.6618705035971223,"v":139,"chroma":92,"luma":112.67999999999999,"hex":"#558B2F","name":"LightGreen 800","id":149},{"r":51,"g":105,"b":30,"a":255,"h":103.2,"s":0.7142857142857143,"v":105,"chroma":75,"luma":80.55,"hex":"#33691E","name":"LightGreen 900","id":150},{"r":204,"g":255,"b":144,"a":255,"h":87.56756756756756,"s":0.43529411764705883,"v":255,"chroma":111,"luma":227.48999999999998,"hex":"#CCFF90","name":"LightGreen A100","id":151},{"r":178,"g":255,"b":89,"a":255,"h":87.83132530120483,"s":0.6509803921568628,"v":255,"chroma":166,"luma":213.64,"hex":"#B2FF59","name":"LightGreen A200","id":152},{"r":118,"g":255,"b":3,"a":255,"h":92.61904761904762,"s":0.9882352941176471,"v":255,"chroma":252,"luma":186.18,"hex":"#76FF03","name":"LightGreen A400","id":153},{"r":100,"g":221,"b":23,"a":255,"h":96.66666666666667,"s":0.8959276018099548,"v":221,"chroma":198,"luma":162.92,"hex":"#64DD17","name":"LightGreen A700","id":154},{"r":249,"g":251,"b":231,"a":255,"h":66,"s":0.0796812749003984,"v":251,"chroma":20,"luma":248.20000000000002,"hex":"#F9FBE7","name":"Lime50","id":155},{"r":240,"g":244,"b":195,"a":255,"h":64.89795918367346,"s":0.20081967213114754,"v":244,"chroma":49,"luma":237.40999999999997,"hex":"#F0F4C3","name":"Lime100","id":156},{"r":230,"g":238,"b":156,"a":255,"h":65.85365853658536,"s":0.3445378151260504,"v":238,"chroma":82,"luma":226.57999999999998,"hex":"#E6EE9C","name":"Lime200","id":157},{"r":220,"g":231,"b":117,"a":255,"h":65.78947368421052,"s":0.4935064935064935,"v":231,"chroma":114,"luma":215.16,"hex":"#DCE775","name":"Lime300","id":158},{"r":212,"g":225,"b":87,"a":255,"h":65.65217391304347,"s":0.6133333333333333,"v":225,"chroma":138,"luma":205.92,"hex":"#D4E157","name":"Lime400","id":159},{"r":205,"g":220,"b":57,"a":255,"h":65.52147239263803,"s":0.740909090909091,"v":220,"chroma":163,"luma":197.57,"hex":"#CDDC39","name":"Lime500","id":160},{"r":192,"g":202,"b":51,"a":255,"h":63.973509933774835,"s":0.7475247524752475,"v":202,"chroma":151,"luma":182.39,"hex":"#C0CA33","name":"Lime600","id":161},{"r":175,"g":180,"b":43,"a":255,"h":62.18978102189781,"s":0.7611111111111111,"v":180,"chroma":137,"luma":163.42999999999998,"hex":"#AFB42B","name":"Lime700","id":162},{"r":158,"g":157,"b":36,"a":255,"h":59.50819672131148,"s":0.7721518987341772,"v":158,"chroma":122,"luma":143.99,"hex":"#9E9D24","name":"Lime800","id":163},{"r":130,"g":119,"b":23,"a":255,"h":53.83177570093458,"s":0.823076923076923,"v":130,"chroma":107,"luma":111.74,"hex":"#827717","name":"Lime900","id":164},{"r":244,"g":255,"b":129,"a":255,"h":65.23809523809524,"s":0.49411764705882355,"v":255,"chroma":126,"luma":237.83999999999997,"hex":"#F4FF81","name":"LimeA100","id":165},{"r":238,"g":255,"b":65,"a":255,"h":65.36842105263158,"s":0.7450980392156863,"v":255,"chroma":190,"luma":228.99999999999997,"hex":"#EEFF41","name":"LimeA200","id":166},{"r":198,"g":255,"b":0,"a":255,"h":73.41176470588235,"s":1,"v":255,"chroma":255,"luma":209.85,"hex":"#C6FF00","name":"LimeA400","id":167},{"r":174,"g":234,"b":0,"a":255,"h":75.38461538461539,"s":1,"v":234,"chroma":234,"luma":190.26,"hex":"#AEEA00","name":"LimeA700","id":168},{"r":255,"g":253,"b":231,"a":255,"h":55,"s":0.09411764705882353,"v":255,"chroma":24,"luma":251.17999999999998,"hex":"#FFFDE7","name":"Yellow50","id":169},{"r":255,"g":249,"b":196,"a":255,"h":53.898305084745765,"s":0.23137254901960785,"v":255,"chroma":59,"luma":244.97,"hex":"#FFF9C4","name":"Yellow100","id":170},{"r":255,"g":245,"b":157,"a":255,"h":53.87755102040816,"s":0.3843137254901961,"v":255,"chroma":98,"luma":238.32,"hex":"#FFF59D","name":"Yellow200","id":171},{"r":255,"g":241,"b":118,"a":255,"h":53.86861313868613,"s":0.5372549019607843,"v":255,"chroma":137,"luma":231.67,"hex":"#FFF176","name":"Yellow300","id":172},{"r":255,"g":238,"b":88,"a":255,"h":53.89221556886228,"s":0.6549019607843137,"v":255,"chroma":167,"luma":226.6,"hex":"#FFEE58","name":"Yellow400","id":173},{"r":255,"g":235,"b":59,"a":255,"h":53.87755102040816,"s":0.7686274509803922,"v":255,"chroma":196,"luma":221.64000000000001,"hex":"#FFEB3B","name":"Yellow500","id":174},{"r":253,"g":216,"b":53,"a":255,"h":48.9,"s":0.7905138339920948,"v":253,"chroma":200,"luma":209.17,"hex":"#FDD835","name":"Yellow600","id":175},{"r":251,"g":192,"b":45,"a":255,"h":42.81553398058252,"s":0.8207171314741036,"v":251,"chroma":206,"luma":193.52999999999997,"hex":"#FBC02D","name":"Yellow700","id":176},{"r":249,"g":168,"b":37,"a":255,"h":37.07547169811321,"s":0.8514056224899599,"v":249,"chroma":212,"luma":177.89,"hex":"#F9A825","name":"Yellow800","id":177},{"r":245,"g":127,"b":23,"a":255,"h":28.10810810810811,"s":0.9061224489795918,"v":245,"chroma":222,"luma":150.96,"hex":"#F57F17","name":"Yellow900","id":178},{"r":255,"g":255,"b":141,"a":255,"h":60,"s":0.4470588235294118,"v":255,"chroma":114,"luma":242.45999999999998,"hex":"#FFFF8D","name":"YellowA100","id":179},{"r":255,"g":255,"b":0,"a":255,"h":60,"s":1,"v":255,"chroma":255,"luma":226.95,"hex":"#FFFF00","name":"YellowA200","id":180},{"r":255,"g":234,"b":0,"a":255,"h":55.05882352941176,"s":1,"v":255,"chroma":255,"luma":214.56,"hex":"#FFEA00","name":"YellowA400","id":181},{"r":255,"g":214,"b":0,"a":255,"h":50.35294117647059,"s":1,"v":255,"chroma":255,"luma":202.76,"hex":"#FFD600","name":"YellowA700","id":182},{"r":255,"g":248,"b":225,"a":255,"h":46,"s":0.11764705882352941,"v":255,"chroma":30,"luma":247.57,"hex":"#FFF8E1","name":"Amber50","id":183},{"r":255,"g":236,"b":179,"a":255,"h":45,"s":0.2980392156862745,"v":255,"chroma":76,"luma":235.42999999999998,"hex":"#FFECB3","name":"Amber100","id":184},{"r":255,"g":224,"b":130,"a":255,"h":45.12,"s":0.49019607843137253,"v":255,"chroma":125,"luma":222.96,"hex":"#FFE082","name":"Amber200","id":185},{"r":255,"g":213,"b":79,"a":255,"h":45.68181818181818,"s":0.6901960784313725,"v":255,"chroma":176,"luma":210.85999999999999,"hex":"#FFD54F","name":"Amber300","id":186},{"r":255,"g":202,"b":40,"a":255,"h":45.20930232558139,"s":0.8431372549019608,"v":255,"chroma":215,"luma":200.08,"hex":"#FFCA28","name":"Amber400","id":187},{"r":255,"g":193,"b":7,"a":255,"h":45,"s":0.9725490196078431,"v":255,"chroma":248,"luma":191.14000000000001,"hex":"#FFC107","name":"Amber500","id":188},{"r":255,"g":179,"b":0,"a":255,"h":42.11764705882353,"s":1,"v":255,"chroma":255,"luma":182.11,"hex":"#FFB300","name":"Amber600","id":189},{"r":255,"g":160,"b":0,"a":255,"h":37.64705882352941,"s":1,"v":255,"chroma":255,"luma":170.89999999999998,"hex":"#FFA000","name":"Amber700","id":190},{"r":255,"g":143,"b":0,"a":255,"h":33.64705882352941,"s":1,"v":255,"chroma":255,"luma":160.87,"hex":"#FF8F00","name":"Amber800","id":191},{"r":255,"g":111,"b":0,"a":255,"h":26.11764705882353,"s":1,"v":255,"chroma":255,"luma":141.99,"hex":"#FF6F00","name":"Amber900","id":192},{"r":255,"g":229,"b":127,"a":255,"h":47.8125,"s":0.5019607843137255,"v":255,"chroma":128,"luma":225.57999999999998,"hex":"#FFE57F","name":"AmberA100","id":193},{"r":255,"g":215,"b":64,"a":255,"h":47.43455497382199,"s":0.7490196078431373,"v":255,"chroma":191,"luma":210.39,"hex":"#FFD740","name":"AmberA200","id":194},{"r":255,"g":196,"b":0,"a":255,"h":46.11764705882353,"s":1,"v":255,"chroma":255,"luma":192.14,"hex":"#FFC400","name":"AmberA400","id":195},{"r":255,"g":171,"b":0,"a":255,"h":40.23529411764706,"s":1,"v":255,"chroma":255,"luma":177.39,"hex":"#FFAB00","name":"AmberA700","id":196},{"r":255,"g":243,"b":224,"a":255,"h":36.774193548387096,"s":0.12156862745098039,"v":255,"chroma":31,"luma":244.51,"hex":"#FFF3E0","name":"Orange50","id":197},{"r":255,"g":224,"b":178,"a":255,"h":35.84415584415584,"s":0.30196078431372547,"v":255,"chroma":77,"luma":228.24,"hex":"#FFE0B2","name":"Orange100","id":198},{"r":255,"g":204,"b":128,"a":255,"h":35.90551181102362,"s":0.4980392156862745,"v":255,"chroma":127,"luma":210.94000000000003,"hex":"#FFCC80","name":"Orange200","id":199},{"r":255,"g":183,"b":77,"a":255,"h":35.73033707865169,"s":0.6980392156862745,"v":255,"chroma":178,"luma":192.94,"hex":"#FFB74D","name":"Orange300","id":200},{"r":255,"g":167,"b":38,"a":255,"h":35.668202764976954,"s":0.8509803921568627,"v":255,"chroma":217,"luma":179.21,"hex":"#FFA726","name":"Orange400","id":201},{"r":255,"g":152,"b":0,"a":255,"h":35.76470588235294,"s":1,"v":255,"chroma":255,"luma":166.18,"hex":"#FF9800","name":"Orange500","id":202},{"r":251,"g":140,"b":0,"a":255,"h":33.46613545816733,"s":1,"v":251,"chroma":251,"luma":157.89999999999998,"hex":"#FB8C00","name":"Orange600","id":203},{"r":245,"g":124,"b":0,"a":255,"h":30.36734693877551,"s":1,"v":245,"chroma":245,"luma":146.66,"hex":"#F57C00","name":"Orange700","id":204},{"r":239,"g":108,"b":0,"a":255,"h":27.112970711297073,"s":1,"v":239,"chroma":239,"luma":135.42000000000002,"hex":"#EF6C00","name":"Orange800","id":205},{"r":230,"g":81,"b":0,"a":255,"h":21.130434782608695,"s":1,"v":230,"chroma":230,"luma":116.78999999999999,"hex":"#E65100","name":"Orange900","id":206},{"r":255,"g":209,"b":128,"a":255,"h":38.26771653543307,"s":0.4980392156862745,"v":255,"chroma":127,"luma":213.89000000000001,"hex":"#FFD180","name":"OrangeA100","id":207},{"r":255,"g":171,"b":64,"a":255,"h":33.61256544502618,"s":0.7490196078431373,"v":255,"chroma":191,"luma":184.42999999999998,"hex":"#FFAB40","name":"OrangeA200","id":208},{"r":255,"g":145,"b":0,"a":255,"h":34.11764705882353,"s":1,"v":255,"chroma":255,"luma":162.05,"hex":"#FF9100","name":"OrangeA400","id":209},{"r":255,"g":109,"b":0,"a":255,"h":25.64705882352941,"s":1,"v":255,"chroma":255,"luma":140.81,"hex":"#FF6D00","name":"OrangeA700","id":210},{"r":251,"g":233,"b":231,"a":255,"h":6,"s":0.0796812749003984,"v":251,"chroma":20,"luma":238.17999999999998,"hex":"#FBE9E7","name":"DeepOrange 50","id":211},{"r":255,"g":204,"b":188,"a":255,"h":14.328358208955224,"s":0.2627450980392157,"v":255,"chroma":67,"luma":217.54000000000002,"hex":"#FFCCBC","name":"DeepOrange 100","id":212},{"r":255,"g":171,"b":145,"a":255,"h":14.181818181818182,"s":0.43137254901960786,"v":255,"chroma":110,"luma":193.33999999999997,"hex":"#FFAB91","name":"DeepOrange 200","id":213},{"r":255,"g":138,"b":101,"a":255,"h":14.415584415584416,"s":0.6039215686274509,"v":255,"chroma":154,"luma":169.03000000000003,"hex":"#FF8A65","name":"DeepOrange 300","id":214},{"r":255,"g":112,"b":67,"a":255,"h":14.361702127659575,"s":0.7372549019607844,"v":255,"chroma":188,"luma":149.95,"hex":"#FF7043","name":"DeepOrange 400","id":215},{"r":255,"g":87,"b":34,"a":255,"h":14.389140271493213,"s":0.8666666666666667,"v":255,"chroma":221,"luma":131.57,"hex":"#FF5722","name":"DeepOrange 500","id":216},{"r":244,"g":81,"b":30,"a":255,"h":14.299065420560748,"s":0.8770491803278688,"v":244,"chroma":214,"luma":124.29,"hex":"#F4511E","name":"DeepOrange 600","id":217},{"r":230,"g":74,"b":25,"a":255,"h":14.341463414634145,"s":0.8913043478260869,"v":230,"chroma":205,"luma":115.41,"hex":"#E64A19","name":"DeepOrange 700","id":218},{"r":216,"g":67,"b":21,"a":255,"h":14.153846153846153,"s":0.9027777777777778,"v":216,"chroma":195,"luma":106.64,"hex":"#D84315","name":"DeepOrange 800","id":219},{"r":191,"g":54,"b":12,"a":255,"h":14.078212290502794,"s":0.93717277486911,"v":191,"chroma":179,"luma":90.47999999999999,"hex":"#BF360C","name":"DeepOrange 900","id":220},{"r":255,"g":158,"b":128,"a":255,"h":14.173228346456693,"s":0.4980392156862745,"v":255,"chroma":127,"luma":183.8,"hex":"#FF9E80","name":"DeepOrange A100","id":221},{"r":255,"g":110,"b":64,"a":255,"h":14.450261780104713,"s":0.7490196078431373,"v":255,"chroma":191,"luma":148.43999999999997,"hex":"#FF6E40","name":"DeepOrange A200","id":222},{"r":255,"g":61,"b":0,"a":255,"h":14.352941176470589,"s":1,"v":255,"chroma":255,"luma":112.49,"hex":"#FF3D00","name":"DeepOrange A400","id":223},{"r":221,"g":44,"b":0,"a":255,"h":11.945701357466062,"s":1,"v":221,"chroma":221,"luma":92.25999999999999,"hex":"#DD2C00","name":"DeepOrange A700","id":224},{"r":239,"g":235,"b":233,"a":255,"h":20,"s":0.02510460251046025,"v":239,"chroma":6,"luma":235.98000000000002,"hex":"#EFEBE9","name":"Brown50","id":225},{"r":215,"g":204,"b":200,"a":255,"h":16,"s":0.06976744186046512,"v":215,"chroma":15,"luma":206.86,"hex":"#D7CCC8","name":"Brown100","id":226},{"r":188,"g":170,"b":164,"a":255,"h":15,"s":0.1276595744680851,"v":188,"chroma":24,"luma":174.73999999999998,"hex":"#BCAAA4","name":"Brown200","id":227},{"r":161,"g":136,"b":127,"a":255,"h":15.882352941176471,"s":0.2111801242236025,"v":161,"chroma":34,"luma":142.51,"hex":"#A1887F","name":"Brown300","id":228},{"r":141,"g":110,"b":99,"a":255,"h":15.714285714285715,"s":0.2978723404255319,"v":141,"chroma":42,"luma":118.08999999999999,"hex":"#8D6E63","name":"Brown400","id":229},{"r":121,"g":85,"b":72,"a":255,"h":15.918367346938776,"s":0.4049586776859504,"v":121,"chroma":49,"luma":94.36999999999999,"hex":"#795548","name":"Brown500","id":230},{"r":109,"g":76,"b":65,"a":255,"h":15,"s":0.4036697247706422,"v":109,"chroma":44,"luma":84.69,"hex":"#6D4C41","name":"Brown600","id":231},{"r":93,"g":64,"b":55,"a":255,"h":14.210526315789473,"s":0.40860215053763443,"v":93,"chroma":38,"luma":71.71,"hex":"#5D4037","name":"Brown700","id":232},{"r":78,"g":52,"b":46,"a":255,"h":11.25,"s":0.41025641025641024,"v":78,"chroma":32,"luma":59.14,"hex":"#4E342E","name":"Brown800","id":233},{"r":62,"g":39,"b":35,"a":255,"h":8.88888888888889,"s":0.43548387096774194,"v":62,"chroma":27,"luma":45.46,"hex":"#3E2723","name":"Brown900","id":234},{"r":250,"g":250,"b":250,"a":255,"h":0,"s":0,"v":250,"chroma":0,"luma":250,"hex":"#FAFAFA","name":"Grey50","id":235},{"r":245,"g":245,"b":245,"a":255,"h":0,"s":0,"v":245,"chroma":0,"luma":244.99999999999997,"hex":"#F5F5F5","name":"Grey100","id":236},{"r":238,"g":238,"b":238,"a":255,"h":0,"s":0,"v":238,"chroma":0,"luma":238,"hex":"#EEEEEE","name":"Grey200","id":237},{"r":224,"g":224,"b":224,"a":255,"h":0,"s":0,"v":224,"chroma":0,"luma":224,"hex":"#E0E0E0","name":"Grey300","id":238},{"r":189,"g":189,"b":189,"a":255,"h":0,"s":0,"v":189,"chroma":0,"luma":188.99999999999997,"hex":"#BDBDBD","name":"Grey400","id":239},{"r":158,"g":158,"b":158,"a":255,"h":0,"s":0,"v":158,"chroma":0,"luma":158,"hex":"#9E9E9E","name":"Grey500","id":240},{"r":117,"g":117,"b":117,"a":255,"h":0,"s":0,"v":117,"chroma":0,"luma":117,"hex":"#757575","name":"Grey600","id":241},{"r":97,"g":97,"b":97,"a":255,"h":0,"s":0,"v":97,"chroma":0,"luma":97,"hex":"#616161","name":"Grey700","id":242},{"r":66,"g":66,"b":66,"a":255,"h":0,"s":0,"v":66,"chroma":0,"luma":66,"hex":"#424242","name":"Grey800","id":243},{"r":33,"g":33,"b":33,"a":255,"h":0,"s":0,"v":33,"chroma":0,"luma":33,"hex":"#212121","name":"Grey900","id":244},{"r":236,"g":239,"b":241,"a":255,"h":204,"s":0.02074688796680498,"v":241,"chroma":5,"luma":238.32,"hex":"#ECEFF1","name":"BlueGrey 50","id":245},{"r":207,"g":216,"b":220,"a":255,"h":198.46153846153845,"s":0.05909090909090909,"v":220,"chroma":13,"luma":213.73999999999998,"hex":"#CFD8DC","name":"BlueGrey 100","id":246},{"r":176,"g":190,"b":197,"a":255,"h":200,"s":0.1065989847715736,"v":197,"chroma":21,"luma":186.57,"hex":"#B0BEC5","name":"BlueGrey 200","id":247},{"r":144,"g":164,"b":174,"a":255,"h":200,"s":0.1724137931034483,"v":174,"chroma":30,"luma":159.09999999999997,"hex":"#90A4AE","name":"BlueGrey 300","id":248},{"r":120,"g":144,"b":156,"a":255,"h":200,"s":0.23076923076923078,"v":156,"chroma":36,"luma":138.12,"hex":"#78909C","name":"BlueGrey 400","id":249},{"r":96,"g":125,"b":139,"a":255,"h":199.53488372093022,"s":0.30935251798561153,"v":139,"chroma":43,"luma":117.84,"hex":"#607D8B","name":"BlueGrey 500","id":250},{"r":84,"g":110,"b":122,"a":255,"h":198.94736842105263,"s":0.3114754098360656,"v":122,"chroma":38,"luma":103.52,"hex":"#546E7A","name":"BlueGrey 600","id":251},{"r":69,"g":90,"b":100,"a":255,"h":199.35483870967744,"s":0.31,"v":100,"chroma":31,"luma":84.8,"hex":"#455A64","name":"BlueGrey 700","id":252},{"r":55,"g":71,"b":79,"a":255,"h":200,"s":0.3037974683544304,"v":79,"chroma":24,"luma":67.08,"hex":"#37474F","name":"BlueGrey 800","id":253},{"r":38,"g":50,"b":56,"a":255,"h":200,"s":0.32142857142857145,"v":56,"chroma":18,"luma":47.06,"hex":"#263238","name":"BlueGrey 900","id":254},{"r":255,"g":255,"b":255,"a":255,"h":0,"s":0,"v":255,"chroma":0,"luma":255,"hex":"#FFFFFF","name":"White500","id":255}]

export default colors
