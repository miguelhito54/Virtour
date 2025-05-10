var APP_DATA = {
  "scenes": [
    {
      "id": "0-afueras",
      "name": "Afueras",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.028398454004676665,
        "pitch": -0.2811819185443518,
        "fov": 1.5265201484498334
      },
      "linkHotspots": [
        {
          "yaw": -0.3123946214225928,
          "pitch": -0.08629671705873321,
          "rotation": 6.283185307179586,
          "target": "2-lobby"
        },
        {
          "yaw": 0.7517120192572939,
          "pitch": -0.02241577475030354,
          "rotation": 3.9269908169872414,
          "target": "1-parqueadero"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.126364787099412,
          "pitch": -0.5190361967097168,
          "title": "Universidad Cooperativa de Colombia",
          "text": "<br>"
        },
        {
          "yaw": 0.6961436130062175,
          "pitch": -0.1792507590265977,
          "title": "Parqueaderos Universidad",
          "text": "<br>"
        },
        {
          "yaw": -1.1549406013055457,
          "pitch": -0.025792012336712133,
          "title": "Bloque 2",
          "text": "Media cuadra mas abajo se encuentra el bloque 2 de la UCC-sede Medellín&nbsp;"
        }
      ]
    },
    {
      "id": "1-parqueadero",
      "name": "Parqueadero",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.05629149474322226,
        "pitch": 0.08680803470243958,
        "fov": 1.5265201484498334
      },
      "linkHotspots": [
        {
          "yaw": -3.0479127922760814,
          "pitch": -0.1236565034564503,
          "rotation": 0,
          "target": "3-ascensor_p1"
        },
        {
          "yaw": 0.7151775884455045,
          "pitch": -0.030650520666988257,
          "rotation": 0,
          "target": "0-afueras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.15754250942270254,
          "pitch": -0.010762850437853189,
          "rotation": 0,
          "target": "3-ascensor_p1"
        },
        {
          "yaw": 0.26168871848098263,
          "pitch": 0.008987697275857798,
          "rotation": 0,
          "target": "4-biblioteca_lobby"
        },
        {
          "yaw": 2.7710644829191615,
          "pitch": 0.19521529904986146,
          "rotation": 0,
          "target": "0-afueras"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6921066495353045,
          "pitch": -0.06411389963398229,
          "title": "Recepción",
          "text": "<br>"
        },
        {
          "yaw": -1.3781704017992489,
          "pitch": -0.008469352454628876,
          "title": "Sucursal BBVA",
          "text": "Cajero y sucursal BBVA"
        }
      ]
    },
    {
      "id": "3-ascensor_p1",
      "name": "Ascensor_P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1118998102306197,
          "pitch": 0.13340908125052664,
          "rotation": 0,
          "target": "2-lobby"
        },
        {
          "yaw": -1.945482008280731,
          "pitch": 0.22346181331835702,
          "rotation": 0,
          "target": "0-ascesor3"
        },
        {
          "yaw": -0.028294277294559578,
          "pitch": 0.043353728960090265,
          "rotation": 0,
          "target": "5-zona_comun"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-biblioteca_lobby",
      "name": "Biblioteca_lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7943220817251095,
          "pitch": 0.08830137257817938,
          "rotation": 1.5707963267948966,
          "target": "5-zona_comun"
        },
        {
          "yaw": 0.7515759493336773,
          "pitch": 0.00603695119992409,
          "rotation": 0,
          "target": "2-lobby"
        },
        {
          "yaw": -2.3929046004191346,
          "pitch": -0.2557417091108096,
          "rotation": 0,
          "target": "6-escaleras_p2"
        },
        {
          "yaw": 0.04881744307280478,
          "pitch": 0.030208778764635014,
          "rotation": 0,
          "target": "7-principal_biblio1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7477128536610778,
          "pitch": -0.1462854080895255,
          "title": "Recepción Biblioteca",
          "text": "La biblioteca de la UCC está abierta a todo el publico"
        }
      ]
    },
    {
      "id": "5-zona_comun",
      "name": "Zona_Comun",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7055295665212586,
          "pitch": 0.03609782869917311,
          "rotation": 0,
          "target": "3-ascensor_p1"
        },
        {
          "yaw": 0.7546621426029549,
          "pitch": 0.009576648424102885,
          "rotation": 0,
          "target": "4-biblioteca_lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.2942331029983265,
          "pitch": 0.011143264456524804,
          "title": "Baños",
          "text": "<br>"
        },
        {
          "yaw": -1.9358973254110126,
          "pitch": 0.01028317310038851,
          "title": "Residencias",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "6-escaleras_p2",
      "name": "Escaleras_P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6318294406329432,
          "pitch": 0.7032543354651519,
          "rotation": 0,
          "target": "4-biblioteca_lobby"
        },
        {
          "yaw": -1.2645227879040384,
          "pitch": 0.1969852759352726,
          "rotation": 0,
          "target": "9-principal_biblio2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-principal_biblio1",
      "name": "Principal_Biblio1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0802791556711924,
          "pitch": 0.19410314472841605,
          "rotation": 0,
          "target": "4-biblioteca_lobby"
        },
        {
          "yaw": -2.613809505733,
          "pitch": -0.23384643966415197,
          "rotation": 0,
          "target": "6-escaleras_p2"
        },
        {
          "yaw": 0.3482186096152091,
          "pitch": -0.03223186723597493,
          "rotation": 0,
          "target": "2-lobby"
        },
        {
          "yaw": -0.9923613640839424,
          "pitch": 0.09557317659742814,
          "rotation": 0,
          "target": "8-estanterias_p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-estanterias_p1",
      "name": "Estanterias_P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.347550203611153,
          "pitch": 0.1272937566957033,
          "rotation": 0,
          "target": "7-principal_biblio1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-principal_biblio2",
      "name": "Principal_Biblio2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.261492037177323,
          "pitch": 0.10944669116587491,
          "rotation": 0,
          "target": "10-estanterias_p2_1"
        },
        {
          "yaw": -2.8041564530714638,
          "pitch": 0.04409136517952028,
          "rotation": 0,
          "target": "11-estanterias_p2_2"
        },
        {
          "yaw": 2.7330868573591456,
          "pitch": 0.05674127884177693,
          "rotation": 0,
          "target": "6-escaleras_p2"
        },
        {
          "yaw": -1.3795474477459742,
          "pitch": 0.009497430131657936,
          "rotation": 0,
          "target": "12-sala_estudio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6021629971961922,
          "pitch": -0.010392706587682099,
          "title": "Recepción Biblioteca Piso 2",
          "text": "<br>"
        },
        {
          "yaw": 0.41866367159678575,
          "pitch": -0.013605667836333879,
          "title": "Baños",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "10-estanterias_p2_1",
      "name": "Estanterias_P2_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.3282723572266537,
        "pitch": -0.008850685473973385,
        "fov": 1.5565785838768278
      },
      "linkHotspots": [
        {
          "yaw": -0.8292146598124308,
          "pitch": 0.12698527658534964,
          "rotation": 5.497787143782138,
          "target": "13-sala_lectura"
        },
        {
          "yaw": 2.358368282044042,
          "pitch": 0.054093295593451884,
          "rotation": 0,
          "target": "9-principal_biblio2"
        },
        {
          "yaw": 3.113857821812685,
          "pitch": 0.07706784885968787,
          "rotation": 0,
          "target": "6-escaleras_p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-estanterias_p2_2",
      "name": "Estanterias_P2_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 3.1341269219455175,
        "pitch": 0.057211654351913666,
        "fov": 1.5265201484498334
      },
      "linkHotspots": [
        {
          "yaw": -3.0480552232576805,
          "pitch": 0.05977527505251068,
          "rotation": 0,
          "target": "14-sala_lectura_2"
        },
        {
          "yaw": -0.03583379741777648,
          "pitch": 0.034320191135471134,
          "rotation": 0,
          "target": "9-principal_biblio2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-sala_estudio",
      "name": "Sala_Estudio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1394540763664764,
          "pitch": 0.125819769092951,
          "rotation": 0,
          "target": "9-principal_biblio2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.03325742902815776,
          "pitch": -0.06315733558009029,
          "title": "Salas de estudio",
          "text": "Estas salas de estudio podrán ser reservadas por cualquier estudiante del campus"
        }
      ]
    },
    {
      "id": "13-sala_lectura",
      "name": "Sala_lectura",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4725817237624605,
          "pitch": 0.06807478324538074,
          "rotation": 0,
          "target": "13-sala_lectura"
        },
        {
          "yaw": 0.032608475536948234,
          "pitch": 0.0425200368276446,
          "rotation": 0,
          "target": "14-sala_lectura_2"
        },
        {
          "yaw": 1.8695276984415017,
          "pitch": 0.008971510903569069,
          "rotation": 0,
          "target": "6-escaleras_p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-sala_lectura_2",
      "name": "Sala_lectura_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.706058357713464,
          "pitch": 0.18156828943426895,
          "rotation": 0,
          "target": "11-estanterias_p2_2"
        },
        {
          "yaw": -2.9788388764039375,
          "pitch": 0.06793484630001068,
          "rotation": 0,
          "target": "13-sala_lectura"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5358835388405385,
          "pitch": -0.11488595813955271,
          "title": "Administración Biblioteca",
          "text": "<br>"
        }
      ]
    },
    
    /*A partir de esta linea de codigo se encuentra el codigo del recorrido del piso 3*/

    {
      "id": "0-ascesor3",
      "name": "Ascesor3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 3.136809047691207,
        "pitch": 0.073821570421984,
        "fov": 1.5265201484498334
      },
      "linkHotspots": [
        {
          "yaw": 0.8963623455242278,
          "pitch": 0.10994217704074849,
          "rotation": 0,
          "target": "1-entrada_lab"
        },
        {
          "yaw": 3.0741079960285678,
          "pitch": 0.043732206983170485,
          "rotation": 0,
          "target": "0-ascensor4"
        },
        {
          "yaw": 3.0714810589314734,
          "pitch": 0.26981094274865924,
          "rotation": 3.141592653589793,
          "target": "3-ascensor_p1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8108256719641975,
          "pitch": 0.030907486356248626,
          "title": "Baños",
          "text": "<br>"
        },
        {
          "yaw": 1.7059010448159668,
          "pitch": -0.059669864515484505,
          "title": "Baños",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "1-entrada_lab",
      "name": "Entrada_lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.044587929223331,
        "pitch": 0.22011984113928484,
        "fov": 1.5565785838768278
      },
      "linkHotspots": [
        {
          "yaw": 1.4762379862282184,
          "pitch": 0.11523882483695758,
          "rotation": 0,
          "target": "3-area_practica_vis_1"
        },
        {
          "yaw": -3.070978164080378,
          "pitch": 0.06071257302924238,
          "rotation": 0,
          "target": "2-pasillo_fondo"
        },
        {
          "yaw": 0.0630636337645587,
          "pitch": 0.18978191380048415,
          "rotation": 0.7853981633974483,
          "target": "0-ascesor3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.498477174565126,
          "pitch": -0.05206164411491265,
          "title": "Salon***",
          "text": "sasa"
        },
        {
          "yaw": -1.8823182715349187,
          "pitch": -0.0885116440007021,
          "title": "Salon**",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-pasillo_fondo",
      "name": "Pasillo_Fondo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.574450466737776,
        "pitch": 0.1560340745742419,
        "fov": 1.5265201484498334
      },
      "linkHotspots": [
        {
          "yaw": 1.4993199621299942,
          "pitch": 0.03054453875217078,
          "rotation": 0,
          "target": "1-entrada_lab"
        },
        {
          "yaw": 2.829635334349426,
          "pitch": 0.0558960804817783,
          "rotation": 0,
          "target": "10-lab_anatoma"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8829437937923252,
          "pitch": -0.07572077703370894,
          "title": "Salon***",
          "text": "<br>"
        },
        {
          "yaw": 0.648039183749102,
          "pitch": -0.10548340024301162,
          "title": "Salon***",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "3-area_practica_vis_1",
      "name": "Area_practica_vis_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1462701747786035,
          "pitch": 0.1039658700419146,
          "rotation": 0,
          "target": "4-area_practica_vis_2"
        },
        {
          "yaw": 1.5996709017274666,
          "pitch": 0.05408020101953781,
          "rotation": 0,
          "target": "1-entrada_lab"
        },
        {
          "yaw": -1.642888952675687,
          "pitch": -0.03517618160608471,
          "rotation": 0,
          "target": "8-quirfano"
        },
        {
          "yaw": -2.0345572216407923,
          "pitch": 0.1407788250529265,
          "rotation": 4.71238898038469,
          "target": "9-sala_debriefing"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3138153731942683,
          "pitch": -0.021639273419605587,
          "title": "Recepción Piso 3",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "4-area_practica_vis_2",
      "name": "Area_practica_vis_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.040222509049844,
        "pitch": 0.2868434024287083,
        "fov": 1.5265201484498334
      },
      "linkHotspots": [
        {
          "yaw": 2.1704355516597555,
          "pitch": 0.030595883634374488,
          "rotation": 0,
          "target": "5-consultorio_medico"
        },
        {
          "yaw": 1.6473569082537738,
          "pitch": 0.06736776282476598,
          "rotation": 0,
          "target": "6-area_observacin"
        },
        {
          "yaw": -3.0450245726924443,
          "pitch": 0.1321032937610198,
          "rotation": 0,
          "target": "3-area_practica_vis_1"
        },
        {
          "yaw": -1.7991478597522317,
          "pitch": 0.10788351948421848,
          "rotation": 0,
          "target": "7-area_cuiado_critico"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.1920440949182094,
          "pitch": -0.02138107172823922,
          "title": "Sala de control",
          "text": "En esta sala se hace control a dos areas, area de cuidado crtico y el quirófano"
        },
        {
          "yaw": -0.058159350311525415,
          "pitch": -0.19052086824049397,
          "title": "Maniquis terrorificos&nbsp;",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-consultorio_medico",
      "name": "Consultorio_medico",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.263627557758907,
        "pitch": 0.21884739409244958,
        "fov": 1.5265201484498334
      },
      "linkHotspots": [
        {
          "yaw": -3.0541990486250867,
          "pitch": 0.1681796987630939,
          "rotation": 0,
          "target": "4-area_practica_vis_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-area_observacin",
      "name": "Area_observación",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.756952228494022,
        "pitch": 0.25288213818372896,
        "fov": 1.5265201484498334
      },
      "linkHotspots": [
        {
          "yaw": -2.8917346665719226,
          "pitch": 0.15155543192576104,
          "rotation": 0.7853981633974483,
          "target": "4-area_practica_vis_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-area_cuiado_critico",
      "name": "Area_cuiado_critico",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6965655985913095,
          "pitch": 0.17459915428165473,
          "rotation": 10.995574287564278,
          "target": "4-area_practica_vis_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-quirfano",
      "name": "Quirófano",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.371680349270507,
          "pitch": 0.13637525355377988,
          "rotation": 4.71238898038469,
          "target": "3-area_practica_vis_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-sala_debriefing",
      "name": "Sala_debriefing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07506317016471087,
          "pitch": 0.09811182092131787,
          "rotation": 0,
          "target": "3-area_practica_vis_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-lab_anatoma",
      "name": "Lab_anatomía",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.849517038637881,
          "pitch": 0.2157037674190434,
          "rotation": 4.71238898038469,
          "target": "2-pasillo_fondo"
        },
        {
          "yaw": 2.6872226378450605,
          "pitch": 0.3222990158401142,
          "rotation": 0,
          "target": "11-sala_morgue"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-sala_morgue",
      "name": "Sala_morgue",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.157825293057309,
          "pitch": 0.09110685323281409,
          "rotation": 0,
          "target": "10-lab_anatoma"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6743303290330358,
          "pitch": -0.11125364920143177,
          "title": "Morgue",
          "text": "<br>"
        }
      ]
    },

    /*A partir de esta linea de codigo se encuentra el codigo del recorrido del piso 4*/

    {
      "id": "0-ascensor4",
      "name": "Ascensor4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.0011359000942974262,
        "pitch": 0,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": 0.04786251130298247,
          "pitch": 0.2785181077883774,
          "rotation": 3.141592653589793,
          "target": "0-ascesor3"
        },
        {
          "yaw": 0.05210763120385131,
          "pitch": 0.13880010275586407,
          "rotation": 0,
          "target": "0-ascensor5"
        },
        {
          "yaw": -2.016211939436502,
          "pitch": 0.1853775033898586,
          "rotation": 4.71238898038469,
          "target": "1-lobby_oficina"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.32155998936644,
          "pitch": -0.007589068580239555,
          "title": "Baños",
          "text": "<br>"
        },
        {
          "yaw": 1.7206617297955598,
          "pitch": 0.0010626842502077238,
          "title": "Sala Auxiliar",
          "text": "Sala de profesores auxiliar"
        },
        {
          "yaw": -1.4550363104845676,
          "pitch": 0.009430202248164932,
          "title": "Comedor",
          "text": "Espacio para la alimentación del personal."
        }
      ]
    },
    {
      "id": "1-lobby_oficina",
      "name": "Lobby_Oficina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.5620718261062443,
        "pitch": 0.06466958819274637,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": 1.5373165305726744,
          "pitch": 0.06491744018616785,
          "rotation": 4.71238898038469,
          "target": "2-oficina_op2"
        },
        {
          "yaw": 2.729071170988309,
          "pitch": 0.17683489920040785,
          "rotation": 1.5707963267948966,
          "target": "0-ascensor4"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6396545645940854,
          "pitch": -0.33140166665036475,
          "title": "Secretarias",
          "text": "Aquí se encuentran las diferentes secretarias de las carreras"
        }
      ]
    },
    {
      "id": "2-oficina_op2",
      "name": "Oficina_Op2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.060695457536603,
          "pitch": 0.03993108657433453,
          "rotation": 0,
          "target": "0-ascensor4"
        },
        {
          "yaw": -1.833356371468799,
          "pitch": 0.050494043679531586,
          "rotation": 7.853981633974483,
          "target": "1-lobby_oficina"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.039627751056692,
          "pitch": -0.0010293241211076776,
          "title": "Sala de profesores",
          "text": "<br>"
        },
        {
          "yaw": -0.4710357751061629,
          "pitch": -0.009872989331107362,
          "title": "Oficinas de decanaturas",
          "text": "<br>"
        }
      ]
    },

    /*A partir de esta linea de codigo se encuentra el codigo del recorrido del piso 5*/

    {
      "id": "0-ascensor5",
      "name": "Ascensor5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.035580666265835,
        "pitch": 0.014531240748659968,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": -3.069013081935447,
          "pitch": 0.28101024143101405,
          "rotation": 3.141592653589793,
          "target": "0-ascensor4"
        },
        {
          "yaw": -3.051130005644957,
          "pitch": 0.03672896526500935,
          "rotation": 0,
          "target": "0-ascensor6"
        },
        {
          "yaw": -0.902072995371519,
          "pitch": 0.07672521573743651,
          "rotation": 0.7853981633974483,
          "target": "1-pasillo_1"
        },
        {
          "yaw": 1.0999024446122103,
          "pitch": 0.08756534732517807,
          "rotation": 5.497787143782138,
          "target": "2-pasillo_2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.06835513065736798,
          "pitch": -0.05943975381829247,
          "title": "Secretarias de Psicologia",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "1-pasillo_1",
      "name": "Pasillo_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7960597437835393,
          "pitch": 0.13923242465700625,
          "rotation": 4.71238898038469,
          "target": "0-ascensor5"
        },
        {
          "yaw": 0.5894779791058014,
          "pitch": 0.13120480806928825,
          "rotation": 6.283185307179586,
          "target": "6-central"
        },
        {
          "yaw": -1.5029606567319078,
          "pitch": 0.19900574509393465,
          "rotation": 0,
          "target": "8-salon_artes"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.0501214181806002,
          "pitch": -0.013250146882281655,
          "title": "Baños",
          "text": "<br>"
        },
        {
          "yaw": 1.365596529707398,
          "pitch": -0.05329728268038636,
          "title": "Oficina jefatura de psicologia&nbsp;",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "2-pasillo_2",
      "name": "Pasillo_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.370545974286447,
          "pitch": 0.14279228975678393,
          "rotation": 0.7853981633974483,
          "target": "0-ascensor5"
        },
        {
          "yaw": 0.6461097813727168,
          "pitch": 0.2133741560385971,
          "rotation": 0,
          "target": "6-central"
        },
        {
          "yaw": 1.5140367060872197,
          "pitch": 0.0961532094960802,
          "rotation": 0,
          "target": "3-pasillo_2-2"
        },
        {
          "yaw": 2.3873941010325694,
          "pitch": 0.21543742606180416,
          "rotation": 0.7853981633974483,
          "target": "5-sala_evalu_grupal"
        },
        {
          "yaw": 2.9158202860102316,
          "pitch": 0.24509611487183136,
          "rotation": 7.853981633974483,
          "target": "4-sala_habilidades_cognitivas"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6913621494481177,
          "pitch": 0.026843528908683467,
          "title": "Baños",
          "text": "<div><br></div>"
        }
      ]
    },
    {
      "id": "3-pasillo_2-2",
      "name": "Pasillo_2-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.049034171423528505,
          "pitch": 0.08233201922558209,
          "rotation": 0,
          "target": "2-pasillo_2"
        },
        {
          "yaw": 0.9033848458062792,
          "pitch": 0.16987524422700595,
          "rotation": 0.7853981633974483,
          "target": "6-central"
        },
        {
          "yaw": -1.8949001814398745,
          "pitch": 0.17789417597184176,
          "rotation": 5.497787143782138,
          "target": "7-consultorio_psicologia"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.174455509466906,
          "pitch": -0.038822235633393376,
          "title": "Decanatura Psicologia",
          "text": "<br>"
        },
        {
          "yaw": -2.9485032414467085,
          "pitch": -0.17050466362443473,
          "title": "Coordinación consultorios",
          "text": "<br><div><br></div>"
        }
      ]
    },
    {
      "id": "4-sala_habilidades_cognitivas",
      "name": "Sala_habilidades_cognitivas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.9225432057196077,
        "pitch": 0.2137760218234206,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": -2.6078253597214154,
          "pitch": 0.2756353296238494,
          "rotation": 5.497787143782138,
          "target": "2-pasillo_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sala_evalu_grupal",
      "name": "Sala_evalu_grupal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 3.0992947727403237,
        "pitch": 0.21449993561864922,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": 2.903253520009436,
          "pitch": 0.20724244322404672,
          "rotation": 5.497787143782138,
          "target": "2-pasillo_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-central",
      "name": "Central",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.974192389931404,
          "pitch": 0.14849328864823974,
          "rotation": 0.7853981633974483,
          "target": "2-pasillo_2"
        },
        {
          "yaw": -2.4290422874361894,
          "pitch": 0.20606645686481784,
          "rotation": 5.497787143782138,
          "target": "1-pasillo_1"
        },
        {
          "yaw": 0.8797723015315384,
          "pitch": 0.1817588210086214,
          "rotation": 0,
          "target": "3-pasillo_2-2"
        },
        {
          "yaw": -1.4720462630112898,
          "pitch": 0.11838537975331853,
          "rotation": 5.497787143782138,
          "target": "9-laboratorio_practico"
        },
        {
          "yaw": -1.0119612553245485,
          "pitch": 0.05514914616009392,
          "rotation": 0,
          "target": "10-laboratorio_vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-consultorio_psicologia",
      "name": "Consultorio_psicologia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 3.000768296811408,
        "pitch": 0.2435747149493892,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": 2.8073221626968348,
          "pitch": 0.2675941138569691,
          "rotation": 1.5707963267948966,
          "target": "3-pasillo_2-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-salon_artes",
      "name": "Salon_artes",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.5190911351489138,
        "pitch": 0.13123900992189697,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": -2.498492478747462,
          "pitch": 0.20820363715056267,
          "rotation": 10.995574287564278,
          "target": "1-pasillo_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-laboratorio_practico",
      "name": "Laboratorio_practico",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.44237515466982913,
          "pitch": 0.2897952939299877,
          "rotation": 1.5707963267948966,
          "target": "6-central"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-laboratorio_vr",
      "name": "Laboratorio_VR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1557803270304596,
          "pitch": 0.16007968396133343,
          "rotation": 5.497787143782138,
          "target": "6-central"
        }
      ],
      "infoHotspots": []
    },

    /*A partir de esta linea de codigo se encuentra el codigo del recorrido del piso 6*/

    {
      "id": "0-ascensor6",
      "name": "Ascensor6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.012206112096638577,
          "pitch": -0.006136349800422991,
          "rotation": 0,
          "target": "0-ascensor7"
        },
        {
          "yaw": 0.016423961054478298,
          "pitch": 0.1655668927574272,
          "rotation": 3.141592653589793,
          "target": "0-ascensor5"
        },
        {
          "yaw": -2.2591111166170137,
          "pitch": 0.08821953091920776,
          "rotation": 4.71238898038469,
          "target": "1-pasillo1"
        },
        {
          "yaw": -1.5980261247043703,
          "pitch": 0.07730571069165393,
          "rotation": 0,
          "target": "7-lab_fluidos_hidraulica-1"
        },
        {
          "yaw": 2.238431748077728,
          "pitch": 0.06312652712852795,
          "rotation": 1.5707963267948966,
          "target": "2-pasillo2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9917846296603834,
          "pitch": 0.010807776274058156,
          "title": "Baños",
          "text": "<br>"
        },
        {
          "yaw": 1.484628796478379,
          "pitch": -0.024329691940231157,
          "title": "Salon ****",
          "text": "<div><br></div>"
        }
      ]
    },
    {
      "id": "1-pasillo1",
      "name": "Pasillo1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.0180293750853373,
        "pitch": 0.14579952722295708,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": 0.09399659319717912,
          "pitch": 0.09370912129832476,
          "rotation": 0.7853981633974483,
          "target": "0-ascensor6"
        },
        {
          "yaw": 2.753073076997418,
          "pitch": 0.10539854930934922,
          "rotation": 5.497787143782138,
          "target": "3-central"
        },
        {
          "yaw": -2.9052313997259596,
          "pitch": 0.2083211348473526,
          "rotation": 1.5707963267948966,
          "target": "4-lab_materiales-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pasillo2",
      "name": "Pasillo2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 3.118989775010153,
        "pitch": 0.20316109808137028,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": -2.8115503564315922,
          "pitch": 0.07953571278371285,
          "rotation": 0.7853981633974483,
          "target": "3-central"
        },
        {
          "yaw": -0.2984285142105314,
          "pitch": 0.06819246826607639,
          "rotation": 5.497787143782138,
          "target": "0-ascensor6"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.4192608547224363,
          "pitch": -0.044641961511135975,
          "title": "Salon *****",
          "text": "<br>"
        },
        {
          "yaw": 2.9479481649730204,
          "pitch": -0.027522641435201223,
          "title": "Salon ****",
          "text": "<br><div><br></div>"
        }
      ]
    },
    {
      "id": "3-central",
      "name": "Central",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.0673039542747613,
        "pitch": -0.014703229298753229,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": 2.2495219082633273,
          "pitch": 0.09945626579011879,
          "rotation": 0.7853981633974483,
          "target": "1-pasillo1"
        },
        {
          "yaw": -2.082871653980339,
          "pitch": 0.09575292850095707,
          "rotation": 5.497787143782138,
          "target": "2-pasillo2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-lab_materiales-1",
      "name": "Lab_materiales-1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.0093099083800148,
        "pitch": 0.2798075525239945,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": -2.088402156480427,
          "pitch": 0.2315306322997337,
          "rotation": 0,
          "target": "5-lab_materiales-2"
        },
        {
          "yaw": 3.124040433410383,
          "pitch": 0.17253608958582767,
          "rotation": 0,
          "target": "6-lab-materiales-3"
        },
        {
          "yaw": 1.2192047862475306,
          "pitch": 0.17721432793114644,
          "rotation": 4.71238898038469,
          "target": "1-pasillo1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-lab_materiales-2",
      "name": "Lab_materiales-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.5675332500473491,
        "pitch": 0.0926366597727899,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": -2.1747578318227188,
          "pitch": 0.3167898212093174,
          "rotation": 0,
          "target": "4-lab_materiales-1"
        },
        {
          "yaw": -0.9907060067459543,
          "pitch": 0.3740380025170431,
          "rotation": 0,
          "target": "6-lab-materiales-3"
        },
        {
          "yaw": -2.0212757478176098,
          "pitch": 0.11330492838231265,
          "rotation": 4.71238898038469,
          "target": "1-pasillo1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-lab-materiales-3",
      "name": "Lab-materiales-3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07093929613949257,
          "pitch": 0.1882343006599143,
          "rotation": 0,
          "target": "4-lab_materiales-1"
        },
        {
          "yaw": 0.5689781289963083,
          "pitch": 0.11177617372880455,
          "rotation": 5.497787143782138,
          "target": "1-pasillo1"
        },
        {
          "yaw": -1.0292401663522384,
          "pitch": 0.22583507548465143,
          "rotation": 0,
          "target": "5-lab_materiales-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-lab_fluidos_hidraulica-1",
      "name": "Lab_fluidos_hidraulica-1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.003238534937020532,
        "pitch": 0.17680988404760534,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": 2.2447365415141904,
          "pitch": 0.17344750368629214,
          "rotation": 0,
          "target": "0-ascensor6"
        },
        {
          "yaw": -0.03933450961129381,
          "pitch": 0.23097120955335093,
          "rotation": 0,
          "target": "8-lab_fluidos_hidraulica-2"
        },
        {
          "yaw": 1.0539014135538132,
          "pitch": 0.27103726468150136,
          "rotation": 0,
          "target": "9-lab_fluidos_hidraulica-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-lab_fluidos_hidraulica-2",
      "name": "Lab_fluidos_hidraulica-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.025087630789061066,
        "pitch": 0.15955731197837864,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": 0.1740697018263191,
          "pitch": 0.2065424869578507,
          "rotation": 0,
          "target": "7-lab_fluidos_hidraulica-1"
        },
        {
          "yaw": -0.8922185142479524,
          "pitch": 0.3639770447463242,
          "rotation": 4.71238898038469,
          "target": "9-lab_fluidos_hidraulica-3"
        },
        {
          "yaw": -0.4950390987057762,
          "pitch": 0.08892835734116566,
          "rotation": 0,
          "target": "0-ascensor6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-lab_fluidos_hidraulica-3",
      "name": "Lab_fluidos_hidraulica-3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.19198621771936963,
        "pitch": 0.5866713454931798,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": -0.9027582963951524,
          "pitch": 0.4277138627895418,
          "rotation": 0,
          "target": "7-lab_fluidos_hidraulica-1"
        },
        {
          "yaw": 0.7808275301498817,
          "pitch": 0.34845993835229017,
          "rotation": 0,
          "target": "8-lab_fluidos_hidraulica-2"
        },
        {
          "yaw": -2.038767550051464,
          "pitch": 0.21261257808809475,
          "rotation": 0,
          "target": "0-ascensor6"
        }
      ],
      "infoHotspots": []
    },

    /*A partir de esta linea de codigo se encuentra el codigo del recorrido del piso 7*/

    {
      "id": "0-ascensor7",
      "name": "Ascensor7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.8262188480687858,
        "pitch": 0.06802237325999627,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": -1.7852561846464674,
          "pitch": 0.2235000581487867,
          "rotation": 0,
          "target": "0-ascensor8"
        },
        {
          "yaw": -1.7848899762350872,
          "pitch": 0.49668771429909775,
          "rotation": 3.141592653589793,
          "target": "0-ascensor6"
        },
        {
          "yaw": 0.09661502261629451,
          "pitch": 0.1413681814333998,
          "rotation": 0.7853981633974483,
          "target": "2-pasillo_2_p7"
        },
        {
          "yaw": 2.5291232425659675,
          "pitch": 0.14632707136468248,
          "rotation": 5.497787143782138,
          "target": "1-pasillo_1_p7"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3737990333504655,
          "pitch": 0.010936214207440287,
          "title": "Aulas 706-707",
          "text": "Salones de clase."
        },
        {
          "yaw": 2.479410704617667,
          "pitch": -0.006208984732719358,
          "title": "Salas de computo 1-3",
          "text": "Espacios equipados con computadoras para uso académico."
        }
      ]
    },
    {
      "id": "1-pasillo_1_p7",
      "name": "Pasillo_1_p7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.943581803786472,
          "pitch": 0.1892425065091885,
          "rotation": 0.7853981633974483,
          "target": "0-ascensor7"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.1072846573636497,
          "pitch": 0.02851311261158962,
          "title": "Baños",
          "text": "<br>"
        },
        {
          "yaw": -0.12214085609131686,
          "pitch": -0.06656341737027915,
          "title": "Salon ****",
          "text": "Text"
        },
        {
          "yaw": 0.8829950307179999,
          "pitch": -0.03598711893747719,
          "title": "Impact Campus",
          "text": "Oficinas que se encargan del área de innovación y apoyo a protyectos de emprendimiento"
        },
        {
          "yaw": 0.22485222584101372,
          "pitch": 0.08422278075756395,
          "title": "Laboratorio financiero",
          "text": "Salón de clase para diferentes asignaturas."
        }
      ]
    },
    {
      "id": "2-pasillo_2_p7",
      "name": "Pasillo_2_p7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.8157384045581626,
        "pitch": 0.11854689625325854,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": 2.128477467156676,
          "pitch": 0.14988537496120458,
          "rotation": 5.497787143782138,
          "target": "0-ascensor7"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8405871311519544,
          "pitch": 0.03109479688061434,
          "title": "Sala de juntas",
          "text": "Espacio para reuniones y toma de decisiones."
        },
        {
          "yaw": 2.3887693209673486,
          "pitch": 0.019659272998033828,
          "title": "Baños",
          "text": "<br>"
        }
      ]
    },

    /*A partir de esta linea de codigo se encuentra el codigo del recorrido del piso 8*/

    {
      "id": "0-ascensor8",
      "name": "Ascensor8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1363476287404666,
          "pitch": 0.09480002244861474,
          "rotation": 0,
          "target": "1-vista_gene"
        },
        {
          "yaw": -0.025251176041713563,
          "pitch": 0.0812318383952686,
          "rotation": 0,
          "target": "0-ascensor9"
        },
        {
          "yaw": -0.025221144391910144,
          "pitch": 0.32907958043650787,
          "rotation": 3.141592653589793,
          "target": "0-ascensor7"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7777151833685547,
          "pitch": -0.026384221514401673,
          "title": "Auditorio",
          "text": "<br>"
        },
        {
          "yaw": -1.9772450982208287,
          "pitch": 0.07096424604190688,
          "title": "Aulas 801-806",
          "text": "Salones de clase."
        }
      ]
    },
    {
      "id": "1-vista_gene",
      "name": "Vista_gene",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.01756948261884972,
        "pitch": 0.0670641393554181,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": -2.049554644905898,
          "pitch": 0.24775908121408108,
          "rotation": 0.7853981633974483,
          "target": "0-ascensor8"
        }
      ],
      "infoHotspots": []
    },

    /*A partir de esta linea de codigo se encuentra el codigo del recorrido del piso 9*/

    {
      "id": "0-ascensor9",
      "name": "Ascensor9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.005370243852288681,
        "pitch": -0.005449215280748376,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": 0.021223143597977057,
          "pitch": 0.31197287839302845,
          "rotation": 3.141592653589793,
          "target": "0-ascensor8"
        },
        {
          "yaw": 0.014606804499189607,
          "pitch": 0.04778475260268422,
          "rotation": 0,
          "target": "0-ascensor10"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.137063825753179,
          "pitch": -0.07878018859126179,
          "title": "Aulas 901-902-913",
          "text": "Espacios destinados para clases y conferencias."
        }
      ]
    },

    /*A partir de esta linea de codigo se encuentra el codigo del recorrido del piso 10*/

    {
      "id": "0-ascensor10",
      "name": "Ascensor10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07983411179676558,
          "pitch": 0.049992917985346,
          "rotation": 0,
          "target": "0-ascensor11"
        },
        {
          "yaw": 0.08127597630717354,
          "pitch": 0.30154134726153003,
          "rotation": 3.141592653589793,
          "target": "0-ascensor9"
        },
        {
          "yaw": -1.733105326067239,
          "pitch": 0.20665175384287338,
          "rotation": 5.497787143782138,
          "target": "3-zona_comun"
        },
        {
          "yaw": 1.9337153111084984,
          "pitch": 0.18207982057488792,
          "rotation": 0.7853981633974483,
          "target": "1-pasillo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.885920139510012,
          "pitch": -0.06660789892419672,
          "title": "Aulas 1001-1004",
          "text": "Salones de clase."
        },
        {
          "yaw": 1.308254035744655,
          "pitch": -0.10116724575109615,
          "title": "Baños",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "1-pasillo",
      "name": "Pasillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.010628009687007278,
          "pitch": 0.09260777125174968,
          "rotation": 5.497787143782138,
          "target": "0-ascensor10"
        },
        {
          "yaw": -2.8241435931411765,
          "pitch": 0.3236129670646477,
          "rotation": 0.7853981633974483,
          "target": "2-central"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6236767121896847,
          "pitch": -0.05622975987322398,
          "title": "Aulas 1001-1004",
          "text": "&nbsp;Salones de clase."
        }
      ]
    },
    {
      "id": "2-central",
      "name": "Central",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3370090826300771,
          "pitch": 0.1302065675295232,
          "rotation": 5.497787143782138,
          "target": "1-pasillo"
        },
        {
          "yaw": -2.364965352943699,
          "pitch": 0.14652491821659552,
          "rotation": 0.7853981633974483,
          "target": "3-zona_comun"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3518001264846546,
          "pitch": -0.1250090362132532,
          "title": "Vistas",
          "text": "Unas vistas que realmente le gusta al equipo desarrollador de esta pagina web."
        }
      ]
    },
    {
      "id": "3-zona_comun",
      "name": "Zona_Comun",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.138821807825785,
          "pitch": 0.12714415365261544,
          "rotation": 0,
          "target": "0-ascensor10"
        },
        {
          "yaw": 2.7915589835450056,
          "pitch": 0.06167293155366593,
          "rotation": 5.497787143782138,
          "target": "2-central"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.14223186430841572,
          "pitch": -0.043514789482770766,
          "title": "Cafetería",
          "text": "Área para la venta y consumo de alimentos y bebidas."
        }
      ]
    },

    /*A partir de esta linea de codigo se encuentra el codigo del recorrido del piso 11*/

    {
      "id": "0-ascensor11",
      "name": "Ascensor11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.0030453279024094115,
        "pitch": 0.13391890327707046,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": 0.025308259822669044,
          "pitch": 0.07065294811492251,
          "rotation": 0,
          "target": "0-ascensor12"
        },
        {
          "yaw": 0.029968745617875214,
          "pitch": 0.334956273081648,
          "rotation": 3.141592653589793,
          "target": "0-ascensor10"
        },
        {
          "yaw": 1.9660027232448067,
          "pitch": 0.18094382062527536,
          "rotation": 0.7853981633974483,
          "target": "1-pasillo_p11"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.2826755043537332,
          "pitch": -0.021606324302799962,
          "title": "Aulas 1101-1105",
          "text": "Salones de clase."
        },
        {
          "yaw": 1.3602871355884147,
          "pitch": -0.033897620618288826,
          "title": "Baños",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "1-pasillo_p11",
      "name": "Pasillo_P11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.938727555769784,
          "pitch": 0.1850852900454818,
          "rotation": 5.497787143782138,
          "target": "0-ascensor11"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7186794155849707,
          "pitch": -0.072173030610724,
          "title": "Aulas 1101-1105",
          "text": "Salones de clase."
        }
      ]
    },

    /*A partir de esta linea de codigo se encuentra el codigo del recorrido del piso 12*/

    {
      "id": "0-ascensor12",
      "name": "Ascensor12",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.04027309894876829,
        "pitch": 0.14357850974598563,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": 1.9455728721482766,
          "pitch": 0.15975210701985,
          "rotation": 0.7853981633974483,
          "target": "1-pasillo_p12"
        },
        {
          "yaw": -0.03358089875758097,
          "pitch": 0.10362745953721486,
          "rotation": 0,
          "target": "0-ascensor13"
        },
        {
          "yaw": -0.03329119024870408,
          "pitch": 0.38732939768414454,
          "rotation": 3.141592653589793,
          "target": "0-ascensor11"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.032352485059894,
          "pitch": 0.03193003760968516,
          "title": "Aulas 1201-1205",
          "text": "Salones de clase."
        },
        {
          "yaw": 1.3529037465685594,
          "pitch": -0.02195610643887491,
          "title": "Baños",
          "text": "<div><br></div>"
        }
      ]
    },
    {
      "id": "1-pasillo_p12",
      "name": "Pasillo_P12",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.0567793262932508,
        "pitch": 0.03837236930591459,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": 2.904352141105072,
          "pitch": 0.22392281745930376,
          "rotation": 5.497787143782138,
          "target": "0-ascensor12"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3855369980580257,
          "pitch": -0.08332661568309518,
          "title": "Aulas 1201-1205",
          "text": "Salones de clase."
        }
      ]
    },

    /*A partir de esta linea de codigo se encuentra el codigo del recorrido del piso 13*/

    {
      "id": "0-ascensor13",
      "name": "Ascensor13",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.023152329492223345,
        "pitch": 0.12223592593297283,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": 0.011372042192286713,
          "pitch": 0.4142285119324729,
          "rotation": 3.141592653589793,
          "target": "0-ascensor12"
        },
        {
          "yaw": 1.6576282242913027,
          "pitch": 0.11222032915685887,
          "rotation": 0,
          "target": "1-estudio_tv_fotografia"
        },
        {
          "yaw": 1.9612294637301044,
          "pitch": 0.18084778434484505,
          "rotation": 0.7853981633974483,
          "target": "3-pasillo_p13"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.403900319897737,
          "pitch": -0.01777843734511464,
          "title": "Baños",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "1-estudio_tv_fotografia",
      "name": "Estudio_TV_Fotografia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3656793482646421,
          "pitch": -0.020778672718392954,
          "rotation": 4.71238898038469,
          "target": "2-estudio_tv_fotografia-2"
        },
        {
          "yaw": 2.833886719235431,
          "pitch": 0.3099413767200616,
          "rotation": 0.7853981633974483,
          "target": "0-ascensor13"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6037773381867932,
          "pitch": -0.14264768800737926,
          "title": "Estudio de Televisión y Fotografía",
          "text": "Espacio equipado para producción audiovisual."
        }
      ]
    },
    {
      "id": "2-estudio_tv_fotografia-2",
      "name": "Estudio_TV_Fotografia-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.32968631155849,
        "pitch": 0.11775773609634754,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": 2.6774528488110985,
          "pitch": 0.3149506579901207,
          "rotation": 0,
          "target": "1-estudio_tv_fotografia"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.0160759374251835,
          "pitch": -0.10391637145112398,
          "title": "Sala de control y producción televisiva.",
          "text": "<div><br></div>"
        }
      ]
    },
    {
      "id": "3-pasillo_p13",
      "name": "Pasillo_P13",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.7392618608976065,
        "pitch": 0.1537236527064323,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": 0.1029123157013565,
          "pitch": 0.14192999341141643,
          "rotation": 0,
          "target": "4-emisora_ucc"
        },
        {
          "yaw": -0.19381114843418956,
          "pitch": 0.14038597575818557,
          "rotation": 5.497787143782138,
          "target": "6-sala_edicin"
        },
        {
          "yaw": 3.116928890468113,
          "pitch": 0.12360545195783601,
          "rotation": 5.497787143782138,
          "target": "0-ascensor13"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.8459483293918915,
          "pitch": -0.07929664278010762,
          "title": "Aula 1302 y salas de edición",
          "text": "Espacios con herramientas para edición multimedia."
        }
      ]
    },
    {
      "id": "4-emisora_ucc",
      "name": "Emisora_UCC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.2737878529854587,
        "pitch": 0.22452546169634147,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": -2.249719660246255,
          "pitch": 0.3327131279264357,
          "rotation": 0.7853981633974483,
          "target": "5-cabina_radio"
        },
        {
          "yaw": 2.9195715467586805,
          "pitch": 0.5330224461437183,
          "rotation": 0,
          "target": "3-pasillo_p13"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.107371167240899,
          "pitch": -0.04006387818196977,
          "title": "Info",
          "text": "La Universidad Cooperativa de Colombia cuenta con su propia cadena de radio para los estudiantes."
        }
      ]
    },
    {
      "id": "5-cabina_radio",
      "name": "Cabina_Radio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.34101048462044403,
        "pitch": 0.22160142141726524,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": 1.3343331397103775,
          "pitch": 0.4523423463101377,
          "rotation": 0,
          "target": "4-emisora_ucc"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.024742954603192757,
          "pitch": 0.1836292696898454,
          "title": "Info",
          "text": "Cualquier estudiante del campus puede reservar estos espacios para la producción de sus proyectos."
        }
      ]
    },
    {
      "id": "6-sala_edicin",
      "name": "Sala_Edición",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 3.1087916781403306,
        "pitch": 0.06279571894961578,
        "fov": 1.4513076697737626
      },
      "linkHotspots": [
        {
          "yaw": -2.4718121507477964,
          "pitch": 0.12947677474083008,
          "rotation": 0.7853981633974483,
          "target": "3-pasillo_p13"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3257480397458945,
          "pitch": 0.005484835552767464,
          "title": "Info",
          "text": "Una de las salas equipada con los equipos necesarios para edición multimedia.&nbsp;"
        }
      ]
    }

  ],
  "name": "Virtour-U",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
