var config = {
    style: 'mapbox://styles/mog26/cmm80v0fd00c701qw6qgxgi22',
    accessToken: 'pk.eyJ1IjoibW9nMjYiLCJhIjoiY21seTBmdGtmMHJwajNkcXczb24xZ29pcCJ9.Os9qDH2ENoYwp_MeFD4Y0A',
    showMarkers: true,
    markerColor: '#8f2c2c',
    theme: 'dark',
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    use3dTerrain: false,
    auto: false,
    title: 'Nelly Bly: La Vuelta al Mundo en 72 Días',
    subtitle: 'La historia de la mujer que hizo realidad el sueño de Julio Verne.',
    byline: 'Por Martina Osorio Gualda',
    footer: 'Source: Mapbox Storytelling template.',
    chapters: [
        {
            id: 'destino-1',
            alignment: 'left',
            hidden: false,
            title: '•  Jersey City, Nueva Jersey, EE.UU.',
            image: 'https://media.revistavanityfair.es/photos/60e84e97bf8d45dd8c6f7815/master/w_1600,c_limit/19788.jpg',
            description: '<b><u>14 DE NOVIEMBRE, 1889</u></b><br> ' +
                        'Nellie Bly fue una audaz reportera del <b>New York World</b> y pionera del periodismo de investigación, que desafió ' +
                        'las normas de género de su época gracias a reportajes encubiertos y más tarde mediante una audaz hazaña.' +
                        ' Su travesía comienza en noviembre de 1889,  cuando zarpó de Nueva Jersey en el Vapor Augusta Victoria' +
                        ' con solo una pequeña maleta de mano para intentar dar la vuelta al mundo en menos de 80 días.',
            location: {
                center: [-74.40101, 40.14991],
                zoom: 8.23,
                pitch: 42.99,
                bearing: -58.39
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'destino-2',
            alignment: 'left',
            hidden: false,
            title: '•  Londres, Reino Unido',
            image: 'https://www.heinzhistorycenter.org/wp-content/uploads/2023/01/4_4a15881u-768x615.webp',
            description: '<b><u>22 DE NOVIEMBRE, 1889</u></b><br> '+
            'Tras siete días cruzando el Atlántico en el Augusta Victoria, desembarcó en Southampton y viajó a Londres; '+
            ' allí solo tuvo tiempo para enviar telegramas a su editor y apenas descansar antes de cruzar el Canal de la Mancha esa misma noche.', 
            location: {
                center: [-0.14726, 51.51226],
                zoom: 5.84,
                pitch: 0,
                bearing: -15.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'amiens-francia',
            alignment: 'left',
            hidden: false,
            title: '•  Amiens, Francia',
            image: 'https://publicacionesarenas.com/wp-content/uploads/2022/02/01-retrato-julio-verne_be9f1997_1325x2000-1018x1536.jpeg',
            description: '<b><u>23 DE NOVIEMBRE, 1889</u></b><br> '+
            'Se desvió de su ruta original para visitar al mismísimo Julio Verne, autor de <i>La Vuelta al Mundo en 80 días</i>, obra que inspiraría esta travesía.'+
            ' El escritor quedó impresionado por su determinación y juventud, '+
            ' aunque dudaba de que una mujer sola pudiera viajar tan rápido con tan poco equipaje.', 
            location: {
                center: [2.32138, 49.89178],
                zoom: 6.52,
                pitch: 47.49,
                bearing: -31.19
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'brindisi-italia',
            alignment: 'right',
            hidden: false,
            title: '•  Bríndisi, Italia',
            description: '<b><u>24 DE NOVIEMBRE, 1889</u></b><br> '+
            'Cruzó Europa en tren a toda velocidad hasta este puerto italiano; allí subió al Vapor Victoria,'+
            ' donde descubrió qeu éste no se dirigía la India o la China como esperaba, sino a Australia. Por primera vez sentiría'+
            'la presión de la carrera al saber que cualquier retraso en el Mediterráneo arruinaría su cronómetro.', 
            location: {
                center: [17.93356, 40.64197],
                zoom: 5.77,
                pitch: 24.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'puerto-said-egipto',
            alignment: 'left',
            hidden: false,
            title: '•  Puerto Said, Suez, Egipto',
            image: 'https://64.media.tumblr.com/tumblr_lxuugbtaGo1qd7ygho1_1280.jpg',
            description: '<b><u>27 DE NOVIEMBRE, 1889</u></b><br> '+
            'Entró a Oriente por el Canal de Suez, donde aprovechó una breve parada para bajar a tierra y comprar frutas. Allí estuvo observando '+
            'con curiosidad el bullicio del mercado egipcio antes de que el barco reemprendiera la marcha.', 
            location: {
                center: [32.24117, 31.20086],
                zoom: 5.29,
                pitch: 0,
                bearing: 49.66
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'aden-yemen',
            alignment: 'left',
            hidden: false,
            title: '•  Adén, Yemen',
            image: 'https://www.prints-online.com/p/164/camel-market-aden-yemen-23440712.jpg.webp',
            description: '<b><u>3 DE DICIEMBRE, 1889</u></b><br> '+
            'En la parada de la península arábiga, Bly describió el calor sofocante y la aridez del paisaje, pero se mostró fascinada por la'+
            ' habilidad de los buceadores locales que rodeaban el barco pidiendo monedas.',
             location: {
                center: [45.00761, 12.86874],
                zoom: 5.73,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'colombo-sri-lanka',
            alignment: 'left',
            hidden: false,
            title: '•  Colombo, Sri Lanka',
            image: 'https://www.heinzhistorycenter.org/wp-content/uploads/2023/01/8_MountLaviniaHotel-768x492.webp',
            description: '<b><u>8 DE DICIEMBRE, 1889</u></b><br> '+
            'Llegó a Ceilán (Sri Lanka) y sufrió su mayor pesadilla: un retraso de cinco días por problemas logísticos del barco. Intentó '+
            'calmar sus nervios paseando en coche de caballos y conociendo los templos locales.', 
            location: {
                center: [79.85429, 6.91227],
                zoom: 8.24,
                pitch: 55.49,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'penang-malasia',
            alignment: 'left',
            hidden: false,
            title: '•  Penang, Malasia',
            image: 'https://www.heinzhistorycenter.org/wp-content/uploads/2023/01/10_ChineseCouplefromPenang-jpg.webp',
            description: '<b><u>16 DE DICIEMBRE, 1889</u></b><br> '+
            'En la costa de Malasia, Bly quedó impactada por la mezcla de culturas y el aroma a especias; fue una de las paradas donde más'+
            ' consciente fue de lo lejos que estaba de casa, pero el tiempo seguía siendo su única prioridad.', 
            location: {
                center: [100.34299, 5.39946],
                zoom: 6.46,
                pitch: 25.99,
                bearing: -9.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'singapur-malasia',
            alignment: 'left',
            hidden: false,
            title: '•  Singapur',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Elizabeth_Bisland_circa1891.jpg',
            description: '<b><u>18 DE DICIEMBRE, 1889</u></b><br> '+
            'En esta escala compró a su famoso compañero de viaje, un mono hambriento que la acompañaría el resto del trayecto. Fue aquí donde descubrió con '+
            'sorpresa de que otra periodista, <b>Elizabeth Bisland</b>, estaba compitiendo contra ella en sentido contrario.', 
            location: {
                center: [103.80066, 1.33687],
                zoom: 6.40,
                pitch: 50.49,
                bearing: -54.39
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'hong-kong',
            alignment: 'right',
            hidden: false,
            title: '•  Hong Kong',
            image: 'https://a.1stdibscdn.com/paul-gervais-prints-works-on-paper-the-monkey-original-lithograph-by-paul-gervais-1854-for-sale/a_6503/a_92810621638619763817/T_128099_paul_gervais_the_monkey_1_master.jpeg?disable=upscale&auto=webp&quality=60&width=1400',
            description: '<b><u>23 DE DICIEMBRE, 1889</u></b><br> '+
            'Llegó en plena temporada de monzones y se enfrentó a un clima terrible. Pese a las tormentas, mantuvo el ánimo alto tras descubrir que, '+
            'pese a los retrasos anteriores, todavía iba por delante del récord de Phileas Fogg.', 
            location: {
                center: [114.17129, 22.27313],
                zoom: 8.55,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'canton-china',
            alignment: 'left',
            hidden: false,
            title: '•  Cantón, China',
            image: 'https://images.imagerenderer.com/images/artworkimages/mediumlarge/1/canton-street-scene-19th-century-british-library.jpg',
            description:  '<b><u>25 DE DICIEMBRE, 1889</u></b><br> '+
            'Pasó el día de Navidad explorando la ciudad china, donde visitó un templo y un mercado local. Aunque le impresionó la densidad de población'+
            ' y la arquitectura, se sintió aliviada al regresar a la seguridad del barco para seguir su ruta.', 
            location: {
                center: [113.25710, 23.12919],
                zoom: 7.62,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'yokohama-japon',
            alignment: 'left',
            hidden: false,
            title: '•  Yokohama, Japón',
            image: 'https://images.metmuseum.org/CRDImages/as/original/DP148133.jpg',
            description:  '<b><u>2 DE ENERO, 1890</u></b><br> '+
            'Comenzó el año nuevo en Japón, un país que adoró por su orden y belleza. Fue aquí donde empezó a sentir la nostalgia del hogar,'+
            ' sabiendo que solo le quedaba cruzar el inmenso Pacífico para ganar la apuesta.', 
            location: {
                center: [139.63291, 35.46468],
                zoom: 7.30,
                pitch: 50.49,
                bearing: -24.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'san-francisco-usa',
            alignment: 'left',
            hidden: false,
            title: '•  San Francisco, Estados Unidos',
            image: 'https://i.ebayimg.com/images/g/CqgAAOSwOBhiqTyi/s-l1600.webp',
            description: '<b><u>21 DE ENERO, 1890</u></b><br> '+
            'Tras una travesía oceánica marcada por terribles tormentas que casi detienen el barco, atracó en EE. UU. Fue recibida como una heroína nacional'+
            ' y subió a un tren especial fletado exclusivamente para que cruzara el país sin paradas.', 
            location: {
                center: [-122.42032, 37.78558],
                zoom: 8.68,
                pitch: 0,
                bearing: 27.19
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'jersey-city-usa-2',
            alignment: 'left',
            hidden: false,
            title: '•  Nueva Jersey, Estados Unidos',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nellie_Bly_Reception_1890.jpg/1280px-Nellie_Bly_Reception_1890.jpg',
            description: '<b><u>25 DE ENERO, 1890</u></b><br> '+
            'Cruzó la meta en Nueva Jersey a las <b>3:51 p.m.</b>, completando la vuelta al mundo en <b>72 días, 6 horas y 11 minutos </b>. Miles de personas la vitorearon'+
            ' al bajar del tren, celebrando que una mujer en solitario había derrotado a la ficción.', 
            location: {
                center: [-74.40101, 40.14991],
                zoom: 8.23,
                pitch: 42.99,
                bearing: -58.39
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'final',
            alignment: 'right',
            hidden: false,
             title: 'Información de interés',
            description:
                '<br> <b> '+
               '<details style="cursor: pointer; margin-bottom: 10px;">' +
                    '<summary >' +
                        '<b>Consulta aquí el Diario de Nelly Bly</b>' +
                    '</summary>' +
                    '<ul style="font-family: \'Courier New\', monospace; font-size: 0.85rem; margin-top: 10px; color: #2c2416; line-height: 1.5; padding-left: 20px;">' +
                        '<li>' +
                            '<a href="https://digital.library.upenn.edu/women/bly/world/world.html" target="_blank" style="color: #5a1a1a; font-weight: bold; text-decoration: underline;">' +
                            ' <i> "Arround the world in seventy two days"</i></a> (versión digital completa disponible en la Biblioteca digital de la Universidad de Pennsylvania).' +
                        '</li>' +
                    '</ul>' +
                '</details>'+



                /* BIBLIOGRAFÍA */
                '<details style="cursor: pointer; margin-bottom: 10px;">' +
                    '<summary >' +
                        '<b> Bibliografía </b>' +
                    '</summary>' +
                    '<ul style="font-family: \'Courier New\', monospace; font-size: 0.85rem; margin-top: 10px; color: #2c2416; line-height: 1.5; padding-left: 20px;">' +
                        '<li><b>Bly, N. (1890).</b> <i>Around the world in seventy-two days</i>. The Pictorial Weeklies Company. Digitalizado por <a href="https://digital.library.upenn.edu/women/bly/world/world.html" target="_blank" style="color: #5a1a1a;">University of Pennsylvania</a>.</li>' +
                        '<br>' +
                        '<li><b>Verne, J. (1872).</b> <i>La vuelta al mundo en ochenta días</i> (Le Tour du monde en quatre-vingts jours). Pierre-Jules Hetzel.</li>' +
                        '<br>' +
                        '<li><b>Heinz History Center.</b> <i>Nellie Bly: Around the world</i>. Disponible en <a href="https://www.heinzhistorycenter.org/learn/women-forging-the-way/nellie-bly-around-the-world/" target="_blank" style="color: #5a1a1a;">su sitio web oficial</a>.</li>' +
                        '<br>' +
                        '<li><b>NellieBly125.</b> <i>Nellie Bly’s 125th anniversary around the world</i>. <a href="https://nelliebly125.wordpress.com/" target="_blank" style="color: #5a1a1a;">Enlace al proyecto</a>.</li>' +
                        '<br>' +
                        '<li><b>Wikipedia.</b> <i>Around the world in seventy-two days</i> y <i>Nellie Bly</i>. [Consultado en febrero de 2026].</li>' +
                    '</ul>' +
                '</details>' +

                /* CRÉDITOS IMÁGENES */
                '<details style="cursor: pointer; margin-bottom: 10px;">' +
                    '<summary >' +
                        '<b> Créditos de Imágenes </b> ' +
                    '</summary>' +
                    '<ul style="font-family: \'Courier New\', monospace; font-size: 0.85rem; margin-top: 10px; color: #2c2416; line-height: 1.6; padding-left: 20px;">' +
                        '<li><b>Archive.org.</b> <i>Notes on a pet monkey</i>. <a href="https://dn790009.ca.archive.org/0/items/notesonpetmonkey00pattiala/notesonpetmonkey00pattiala.pdf" target="_blank" style="color: #5a1a1a; font-weight: bold;">[Documento PDF]</a>.</li>' +
                        '<br>' +
                        '<li><b>British Library.</b> <i>Canton street scene, 19th century</i>. <a href="https://images.imagerenderer.com/images/artworkimages/mediumlarge/1/canton-street-scene-19th-century-british-library.jpg" target="_blank" style="color: #5a1a1a; font-weight: bold;">[Fotografía]</a>.</li>' +
                        '<br>' +
                        '<li><b>Heinz History Center.</b> <i>Chinese couple from Penang</i>. <a href="https://www.heinzhistorycenter.org/wp-content/uploads/2023/01/10_ChineseCouplefromPenang-jpg.webp" target="_blank" style="color: #5a1a1a; font-weight: bold;">[Fotografía]</a>.</li>' +
                        '<br>' +
                        '<li><b>Heinz History Center.</b> <i>Mount Lavinia Hotel, Ceylon</i>. <a href="https://www.heinzhistorycenter.org/wp-content/uploads/2023/01/8_MountLaviniaHotel-768x492.webp" target="_blank" style="color: #5a1a1a; font-weight: bold;">[Fotografía]</a>.</li>' +
                        '<br>' +
                        '<li><b>Heinz History Center.</b> <i>Nellie Bly: Around the world archive</i>. <a href="https://www.heinzhistorycenter.org/wp-content/uploads/2023/01/4_4a15881u-768x615.webp" target="_blank" style="color: #5a1a1a; font-weight: bold;">[Imagen]</a>.</li>' +
                        '<br>' +
                        '<li><b>Metropolitan Museum of Art (The Met).</b> <i>Japanese scenery, 19th century</i>. <a href="https://images.metmuseum.org/CRDImages/as/original/DP148133.jpg" target="_blank" style="color: #5a1a1a; font-weight: bold;">[Grabado]</a>.</li>' +
                        '<br>' +
                        '<li><b>Prints Online.</b> <i>Camel Market, Aden, Yemen</i>. <a href="https://www.prints-online.com/p/164/camel-market-aden-yemen-23440712.jpg.webp" target="_blank" style="color: #5a1a1a; font-weight: bold;">[Postal vintage]</a>.</li>' +
                        '<br>' +
                        '<li><b>Publicaciones Arenas (2022).</b> <i>Retrato de Julio Verne</i>. <a href="https://publicacionesarenas.com/wp-content/uploads/2022/02/01-retrato-julio-verne_be9f1997_1325x2000-1018x1536.jpeg" target="_blank" style="color: #5a1a1a; font-weight: bold;">[Imagen]</a>.</li>' +
                        '<br>' +
                        '<li><b>True West Magazine.</b> <i>Johnson Canyon blog history</i>. <a href="https://www.truewestmagazine.com/blog/johnson-canyon/" target="_blank" style="color: #5a1a1a; font-weight: bold;">[Artículo/Imagen]</a>.</li>' +
                        '<br>' +
                        '<li><b>Tumblr (Archive).</b> <i>Port Said, Egypt; The commerce street</i>. <a href="https://64.media.tumblr.com/tumblr_lxuugbtaGo1qd7ygho1_1280.jpg" target="_blank" style="color: #5a1a1a; font-weight: bold;">[Postal]</a>.</li>' +
                        '<br>' +
                        '<li><b>Vanity Fair (2018).</b> <i>Retrato de Nellie Bly</i>. <a href="https://www.revistavanityfair.es/poder/articulos/nellie-bly-periodismo-manicomio/29879" target="_blank" style="color: #5a1a1a; font-weight: bold;">[Fotografía]</a>.</li>' +
                        '<br>' +
                        '<li><b>Wikipedia (2024).</b> <i>Elizabeth Bisland</i>. La periodista que compitió contra Bly en la carrera alrededor del mundo. <a href="https://es.wikipedia.org/wiki/Elizabeth_Bisland" target="_blank" style="color: #5a1a1a; font-weight: bold;">[Biografía]</a>.</li>' +
                        '<br>' +
                        '<li><b>Wikipedia.</b> <i>Tablero del juego "Around the World in 72 Days"</i>. <a href="https://en.wikipedia.org/wiki/Around_the_World_in_Seventy-Two_Days" target="_blank" style="color: #5a1a1a; font-weight: bold;">[Imagen]</a>.</li>' +
                    '</ul>'+
                '</details> ',
                
                image: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Around_the_World_in_Seventy-Two_Days_board_game.jpg',
                location: {
                center: [-74.40101, 40.14991],
                zoom: 8.23,
                pitch: 42.99,
                bearing: -58.39
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};