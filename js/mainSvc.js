angular.module('rijksApp')
    .service('mainSvc', ['$http', function($http) {
        var apiKey = 'L0ObQ3Xi';
        var baseUrl = 'https://www.rijksmuseum.nl/api/en/collection';
        var format = '&format=json';
        var toppieces = '&toppieces=True';
        // var hexEncoded = '%23FF000';
        // var colorParam = '&f.normalized32Colors.hex=' + hexEncoded;
        // Colors found in the images (mind: The `#` in #FF0000 should be url-encoded! change # to %23)
        var imgParam = '&imgonly=True';
        // var sortParam = ['s=relevance', 's=objecttype', 's=chronologic', 's=achronologic', 's=artist'];
        var detailsParam = '';
        // GET /api/en/collection/[object-number]

        var api = 'https://www.rijksmuseum.nl/api/en/collection' + detailsParam + '?key=' + apiKey + format + imgParam + toppieces

        this.getArt = function() {
          console.log('service hit');
            return $http({
                method: 'GET',
                url: api
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                // console.log(response);
                console.log(api);
                return response.data;
            }, function errorCallback(err) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(err);
            })
        }

        this.getDetails = function(detail_id) {
            //get details here
            var detailsParam = detail_id;
            var api = 'https://www.rijksmuseum.nl/api/en/collection/' + detailsParam + '?key=' + apiKey + format + imgParam
            return $http({
                method: 'GET',
                url: api
            }).then(function successCallback(detailsResponse) {
                // console.log('api:' + api);
                // console.log(detailsResponse);
                return detailsResponse.data;
            }, function errorCallback(err) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(err);
            })
        }

        // this is some horrible code
        this.getFavArtist = function(favorite) {
            for (var i = 0; i <= faveArtists.length-1; i++) {
              if (favorite === faveArtists.name) {
                this.favName = faveArtists[i][name];
                this.favDesc = faveArtists[i][desc];
              }
            }
            //here, do an api search by the artist name, and provide data for the gallery
            return $.getJSON("https://www.rijksmuseum.nl/api/en/collection?q=Q&key=L0ObQ3Xi&imgonly=True&format=json".replace("Q", favName));

        }

        // api to search based on input
        // search the collection using a JSON call
      this.search = function search(query) {
        return $.getJSON("https://www.rijksmuseum.nl/api/en/collection?q=Q&key=L0ObQ3Xi&imgonly=True&format=json".replace("Q", query));
      }

      // creates a thumbnail image for the specified art object
      this.getThumb = function thumbnail(object) {
        return $("<div>")
          .addClass("thumb")
          .css("background-image", "url(" + object.webImage.url.replace("s0", "s128") +")");
      }



        this.faveArtists = [
          {
            name: 'Rembrandt Harmensz van Rijn',
            desc: '&lt;p&gt;Rembrandt Harmensz van Rijn (1606-1669) was born in Leiden, the son of a miller. After finishing Latin School, his parents enrolled him at Leiden University. Rembrandt soon dropped out and became an apprentice painter under Jacob van Swanenburch in Leiden, and later Pieter Lastman in Amsterdam. Back in Leiden, he set up as an independent artist together with Jan Lievens. At this time, Rembrandt mainly painted biblical scenes in a precise style and with vibrant colours. &lt;/p&gt;&lt;p&gt; In 1631, he moved to Amsterdam where he received numerous commissions for portraits. His many pupils included Ferdinand Bol, Govert Flinck and Carel Fabritius.In this period, Rembrandt develop a more powerful chiaroscuro, a looser brush and a greater sense of drama. He focused more on historical scenes, and made numerous etchings and drawings.&lt;/p&gt; &lt;p&gt; In 1634, Rembrandt married Saskia Uylenburgh. They had a son, Titus, in 1641. Then a year later Saskia died. Later, in 1654, Rembrandt had a daughter with Hendrickje Stoffels. By now, he had accumulated huge debts and was forced to sell his house and property. He died in 1669 and was buried in Amsterdam\'s Westerkerk. &lt;/p&gt;'
          },
          {
            name: 'Johannes Vermeer',
            desc: '<p>Today Johannes Vermeer (1632-1675) is one of the most celebrated Dutch 17th century masters. Yet for centuries little importance was attached to his name. Works now known as Vermeers were attributed to other artists. It was only in the 1870s that he was rediscovered and 35 paintings identified as his. The son of a silk worker who bought and sold art, Vermeer lived and worked in Delft all his life. He may have served his apprenticeship under fellow townsman Carel Fabritius. In 1653, he joined the local artists guild, which he led at various times. Vermeer&rsquo;s early paintings of historical scenes reveal the influence of the Utrecht Caravaggists. His later paintings are meticulous compositions of interiors featuring one or two figures, usually women. These are intimate genre paintings in which the subject is engaged in some everyday activity, usually in the light of a nearby window. Vermeer could render the way light plays on objects like few others.'
          },
          {
            name: 'Vincent van Gogh',
            desc: '&lt;p&gt;Vincent van Gogh (1853-1890) was born in Zundert in Brabant, where his father was a pastor. His uncles were art dealers and Vincent began his career working for them. After several years in the art trade, he worked as a lay preacher in England and later devoted time to missionary work in Belgium. In 1880, he resolved to become an artist. At The Hague and Nuenen he painted still lifes, landscapes and scenes from village life in sombre colours.&lt;/p&gt;'
          },
          {
            name: 'Jan Havicksz Steen',
            desc: '<p>Jan Havicksz Steen (ca. 1625-1679) was born in Leiden, the son of a brewer. Educated at a Latin school, in 1646 he enrolled at Leiden university yet never graduated. Instead, he took an apprenticeship as a painter, although little is known about this. Eighteenth-century biographers record that his teachers included Nicolaus Knupfer, Adriaen van Ostade and landscapist Jan van Goyen. In 1648, already a master, he helped set up a guild of artists in Leiden, in which he served in various capacities. Steen painted a huge number of works, especially genre paintings showing cheerful people having fun. He also painted portraits, as well as historical scenes. To augment his income, Steen started a brewery in Delft and opened a tavern at his house. Biographers have described him as a man with little sense of restraint, yet that seems to be based more on his paintings than on hard fact. Jan Steen is buried in St Pieter\'s church in Leiden</p>'
          },
          {
            name: 'Pieter de Hooch',
            desc: '<p>Pieter de Hooch (1629-in or after 1684) was born in Rotterdam. He served his apprenticeship under Ludolph de Jongh in Rotterdam and later under Nicolaes Pietersz Berchem in Haarlem. In 1655, he registered with the artists guild in Delft as an independent painter. Like many artists of the time, De Hooch also had a second trade: he worked for a cloth merchant. As an artist, De Hooch mainly painted figures in domestic settings. A characteristic element in many of his paintings is a view of a room or yard through an open door or window. As was usual in Dutch genre painting, his interiors often conveyed a moral message. When De Hooch moved to Amsterdam in 1661, his style became more elegant and profuse. His son Pieter, who was also his pupil, died at Amsterdam\'s mental asylum in 1684. When De Hooch himself died is unclear; his last dated work is from that same year, 1684. </p>'
          },
          {
            name: 'Frans Hals',
            desc: '<p>Frans Hals (ca. 1582-1666), the son of a weaver, was born in Antwerp some time between 1581 and 1585. In his biography of Hals, Arnold Houbraken recounts how the family fled from the Spaniards in 1585 and settled in Haarlem. There the young painter was apprenticed to Karel van Mander. Hals joined Haarlem’s artist guild in 1610. This enabled him to set up his own studio, and take on pupils and assistants, among them Judith Leyster. His younger brother Dirck Hals was probably also an apprentice. Hals was famous for his loose manner of painting, referred to by his contemporaries as \'the rough style\'. This style has been both admired and reviled down the centuries. Hals tended to concentrate on portraits, and painted some superb civic guard pieces. He died in 1666 and was buried at St Bavo\'s, Haarlem\'s principal church.</p>'
          }
        ]

    }]);
